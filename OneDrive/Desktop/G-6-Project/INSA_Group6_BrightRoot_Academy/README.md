<div align="center">

# 🎓 BrightRoot Academy Platform
### Next-Generation AI-Powered Learning Management System (LMS)

[![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=for-the-badge)]()
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)]()
[![Django](https://img.shields.io/badge/Django-4.2_DRF-092E20?style=for-the-badge&logo=django&logoColor=white)]()
[![LangChain](https://img.shields.io/badge/LangChain-RAG_AI-121212?style=for-the-badge&logo=chainlink&logoColor=white)]()
[![Group](https://img.shields.io/badge/INSA-Group_6_Project-FF9900?style=for-the-badge)]()

**Empowering Students and Instructors with Personalized RAG-driven Education Intelligence.**

</div>

---

## 🌟 Executive Summary

**BrightRoot Academy** is a modern, state-of-the-art **Learning Management System (LMS)** engineered by **INSA Group 6**. It bridges traditional educational management with cutting-edge **Artificial Intelligence (AI)**.

By leveraging **Retrieval-Augmented Generation (RAG)** powered by **LangChain**, **Groq Llama 3**, and **Google Gemini**, BrightRoot Academy transforms static course materials into interactive, adaptive learning experiences. Students receive instant, context-aware answers to course queries, automated quiz generation, and personalized study recommendations, while instructors gain deep telemetry into student progress and engagement.

---

## 🏗 System Architecture

```mermaid
graph TD
    User["🎓 Client / User Interface\n(React 18 + TailwindCSS + Vite)"]
    API["⚡ Django REST Framework API\n(Authentication, Courses, Enrollment)"]
    DB[("🐘 PostgreSQL Database\n(User Profiles, Streaks, Course Data)")]
    VectorDB[("🧠 ChromaDB / Vector Store\n(Course Document Embeddings)")]
    AIEngine["🤖 AI RAG Layer\n(LangChain + Groq Llama-3 / Gemini)"]

    User <-->|HTTP REST / JSON| API
    API <-->|ORM Queries| DB
    API <-->|Similarity Search| VectorDB
    API <-->|Prompt Ingestion| AIEngine
```

### 🧠 RAG & AI Pipeline Flow

1. **Document Ingestion**: Course PDFs, lecture notes, and syllabus materials are chunked and vectorized using LangChain embeddings.
2. **Semantic Search**: Student questions trigger similarity searches across ChromaDB vector store.
3. **Contextual Generation**: Relevant document chunks are injected into Groq Llama 3 / Gemini prompt templates to deliver hallucination-free, accurate answers.

---

## 🛠 Tech Stack Matrix

| Domain | Technology / Framework | Purpose |
|---|---|---|
| **Frontend UI** | React 18, TypeScript, Vite | Fast Single Page Application & component rendering |
| **Styling** | TailwindCSS | Modern dark mode responsive UI design system |
| **State & Context** | React Context API, Axios | Global auth state management & REST API client |
| **Backend API** | Django 4.2, DRF (Django REST Framework) | Secure RESTful API endpoints, CORS & JWT Auth |
| **Database** | PostgreSQL / Supabase | Relational data persistence (users, courses, streaks) |
| **AI Orchestration** | LangChain, Groq API (Llama 3 8B), Gemini | RAG pipeline, prompt templates & LLM proxying |
| **Vector Store** | ChromaDB | High-performance vector embeddings storage & retrieval |
| **DevOps & Infra** | Docker, GitHub Actions, Render | Automated CI/CD deployment & containerization |

---

## ⚡ Key Features & Portals

### 👨‍🎓 Student Experience
- **Interactive Course Dashboard**: Track enrolled courses, module progress bars, and active learning streaks.
- **AI Course Assistant**: Ask natural-language questions directly on course materials with precise citation back to lecture notes.
- **Smart Material Summarizer**: Summarize multi-page PDF documents and video transcripts into concise key takeaways.
- **Automated AI Quiz Generator**: Dynamically generate multiple-choice and short-answer quizzes based on specific course modules to test comprehension.

### 👩‍🏫 Instructor Command Center
- **Course Publishing Suite**: Upload lecture notes, PDF slides, and syllabus documents with automated vector indexing.
- **Analytics & Engagement Telemetry**: Monitor class completion rates, streak metrics, and AI interaction frequency.
- **Assignment & Quiz Management**: Review auto-generated quizzes and customize question difficulty.

---

## ⚙️ Installation

1. **Clone repo**

```bash
git clone https://github.com/Miftah-Ebrahim/INSA_Group6_BrightRoot_Academy.git
cd INSA_Group6_BrightRoot_Academy
```

2. **Setup Backend**

```bash
cd Backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

3. **Setup Frontend**

```bash
cd front-end
npm install
npm run dev
```

---

## 📜 License

MIT License © 2025 BrightRoot Academy — INSA Group 6
