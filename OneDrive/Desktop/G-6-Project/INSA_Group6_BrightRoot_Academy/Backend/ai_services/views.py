import os
import json
import re
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.conf import settings
from core.supabase_client import supabase
from .models import AIRequest
from notes.models import Summary, Quiz, UploadedFile
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from openai import OpenAI
from tempfile import NamedTemporaryFile
import requests

client = OpenAI(
    base_url="https://models.github.ai/inference",
    api_key=settings.GITHUB_TOKEN,
)


def get_file_content(file_obj):
    """
    Downloads the file from Supabase and returns text content.
    """
    r = requests.get(file_obj.file_url)
    if r.status_code != 200:
        return ""

    import tempfile
    temp_path = None
    try:
        # Save to temporary file
        with tempfile.NamedTemporaryFile(delete=False) as tmp_file:
            tmp_file.write(r.content)
            tmp_file.flush()
            temp_path = tmp_file.name

        # Parse file
        if file_obj.file_name.endswith(".pdf"):
            import PyPDF2
            reader = PyPDF2.PdfReader(temp_path)
            text = "\n".join([page.extract_text() or "" for page in reader.pages])
        elif file_obj.file_name.endswith(".docx"):
            import docx
            doc = docx.Document(temp_path)
            text = "\n".join([p.text for p in doc.paragraphs])
        else:
            text = r.text

    finally:
        if temp_path and os.path.exists(temp_path):
            os.remove(temp_path)

    return text


class GenerateSummaryView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        file_id = request.data.get("file_id")
        if not file_id:
            return Response({"error": "File ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            file_obj = UploadedFile.objects.get(id=file_id, user=request.user)

            # Extract or simulate file content
            file_content = get_file_content(file_obj)

            prompt = f"""
            Please provide a comprehensive summary of the following educational content:

            Subject: {file_obj.subject}
            Grade: {file_obj.grade}
            Title: {file_obj.title}

            Content: {file_content}

            Please include:
            1. A concise summary (2-3 paragraphs)
            2. Key concepts and main points
            3. Important definitions or formulas
            4. Study recommendations

            Format the response clearly for students.
            """

            response = client.chat.completions.create(
                model="gpt-4o-mini",  # or "gpt-4o" if you have full access
                messages=[{"role": "user", "content": prompt}],
            )

            summary_content = response.choices[0].message.content

            # Save to database
            summary = Summary.objects.create(user=request.user, file=file_obj, content=summary_content)

            AIRequest.objects.create(
                user=request.user,
                request_type="summary",
                content=file_content[:500],
                response=summary_content[:500],
            )

            return Response(
                {
                    "summary": summary_content,
                    "summary_id": summary.id,
                    "message": "Summary generated successfully",
                },
                status=status.HTTP_200_OK,
            )

        except UploadedFile.DoesNotExist:
            return Response({"error": "File not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(
                {"error": f"Failed to generate summary: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

class GenerateQuizView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        file_id = request.data.get("file_id")
        num_questions = request.data.get("num_questions", 5)

        if not file_id:
            return Response({"error": "File ID is required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            file_obj = UploadedFile.objects.get(id=file_id, user=request.user)
            file_content = get_file_content(file_obj)

            prompt = f"""
            Please create a {num_questions}-question multiple choice quiz based on this educational content:

            Subject: {file_obj.subject}
            Grade: {file_obj.grade}
            Title: {file_obj.title}
            Content: {file_content}

            Provide:
            1. {num_questions} multiple choice questions
            2. 4 answer choices for each (A, B, C, D)
            3. The correct answer for each
            4. A short explanation for the correct answer

            Format your entire response as JSON:
            {{
                "questions": [
                    {{
                        "question": "Question text?",
                        "options": {{
                            "A": "Option A",
                            "B": "Option B",
                            "C": "Option C",
                            "D": "Option D"
                        }},
                        "correct_answer": "A",
                        "explanation": "Why this is correct"
                    }}
                ]
            }}
            """

            response = client.chat.completions.create(
                model="gpt-4o-mini",  # or "gpt-4o"
                messages=[{"role": "user", "content": prompt}],
            )

            quiz_content = response.choices[0].message.content

            clean_content = re.search(r'{.*}', quiz_content, re.DOTALL)
            if clean_content:
                try:
                    quiz_data = json.loads(clean_content.group())
                except json.JSONDecodeError:
                    quiz_data = {"questions": []}  # fallback
            else:
                quiz_data = {"questions": []}  # fallback

            quiz = Quiz.objects.create(user=request.user, file=file_obj, questions=quiz_data)

            AIRequest.objects.create(
                user=request.user,
                request_type="quiz",
                content=file_content[:500],
                response=str(quiz_data)[:500],
            )

            return Response(
                {
                    "quiz": quiz_data,
                    "quiz_id": quiz.id,
                    "message": "Quiz generated successfully",
                },
                status=status.HTTP_200_OK,
            )

        except UploadedFile.DoesNotExist:
            return Response({"error": "File not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(
                {"error": f"Failed to generate quiz: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
