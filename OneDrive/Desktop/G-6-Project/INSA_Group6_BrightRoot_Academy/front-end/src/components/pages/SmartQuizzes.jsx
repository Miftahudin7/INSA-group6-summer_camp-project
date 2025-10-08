import React, { useState } from "react";
import { Container, Button, Card, Form, Spinner } from "react-bootstrap";
import axios from "axios";

const SmartQuizzes = ({ onBack }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch quiz from backend
  const generateQuiz = async () => {
    setLoading(true);
    setShowResults(false);
    setAnswers({});

    try {
      const fileId = 1; // Replace with actual file ID or selected content
      const numQuestions = 5; // Or any user-defined number

      const response = await axios.post(
        "http://localhost:8000/api/ai/quiz/generate/", // Your Django endpoint
        { file_id: fileId, num_questions: numQuestions },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // JWT from login
          },
        }
      );

      const quizData = response.data.quiz.questions;
      // Transform quizData to match your state format if needed
      const formattedQuestions = quizData.map((q, index) => ({
        id: index + 1,
        question: q.question,
        options: Object.values(q.options),
        correct: q.correct_answer,
      }));

      setQuestions(formattedQuestions);
    } catch (err) {
      console.error(err);
      alert("Failed to generate quiz. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (qId, value) => {
    setAnswers({ ...answers, [qId]: value });
  };

  const calculateResults = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) score++;
    });
    alert(`You scored ${score} out of ${questions.length}`);
    setShowResults(true);
  };

  return (
    <Container className="py-4">
      <Button variant="secondary" onClick={onBack} className="mb-3">
        &larr; Back
      </Button>
      <h4 className="text-light mb-3">Smart Quizzes</h4>

      <Button variant="success" onClick={generateQuiz} className="mb-3" disabled={loading}>
        {loading ? <Spinner animation="border" size="sm" /> : "Generate Quiz"}
      </Button>

      {questions.map((q) => (
        <Card key={q.id} className="mb-3">
          <Card.Body>
            <Card.Title>{q.question}</Card.Title>
            <Form>
              {q.options.map((opt, idx) => (
                <Form.Check
                  key={idx}
                  type="radio"
                  label={opt}
                  name={`question-${q.id}`}
                  value={opt}
                  checked={answers[q.id] === opt}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  disabled={showResults}
                />
              ))}
            </Form>
            {showResults && (
              <p className="mt-2">
                Correct Answer: <strong>{q.correct}</strong>
              </p>
            )}
          </Card.Body>
        </Card>
      ))}

      {questions.length > 0 && !showResults && (
        <Button variant="primary" onClick={calculateResults}>
          Submit Answers
        </Button>
      )}
    </Container>
  );
};

export default SmartQuizzes;
