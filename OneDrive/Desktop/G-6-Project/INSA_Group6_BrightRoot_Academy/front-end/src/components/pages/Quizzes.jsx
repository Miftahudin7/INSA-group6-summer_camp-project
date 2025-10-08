import React, { useEffect, useState } from "react";
import { Container, Card, ListGroup, Spinner, Alert, Button, Badge } from "react-bootstrap";
import api from "../services/api";

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await api.get("/ai/quizzes/");
        setQuizzes(res.data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch quizzes");
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  if (loading) return <Spinner animation="border" />;

  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="py-4">
      <h2>AI-Generated Quizzes</h2>
      {quizzes.length === 0 ? (
        <p>No quizzes generated yet.</p>
      ) : (
        quizzes.map((quiz) => (
          <Card key={quiz.id} className="mb-4">
            <Card.Header>
              <h5 className="mb-0">{quiz.file_title}</h5>
              <small>{quiz.subject} • {quiz.grade}</small>
            </Card.Header>
            <Card.Body>
              {quiz.questions?.questions?.length ? (
                <ListGroup>
                  {quiz.questions.questions.map((q, index) => (
                    <ListGroup.Item key={index} className="mb-2">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6>Question {index + 1}</h6>
                        <Badge bg="info">
                          {Math.round(((index + 1) / quiz.questions.questions.length) * 100)}% Complete
                        </Badge>
                      </div>
                      <p>{q.question}</p>
                      {q.options &&
                        Object.entries(q.options).map(([key, value]) => (
                          <div key={key} className="mb-1">
                            <strong>{key}.</strong> {value}
                          </div>
                        ))}
                      <p className="mt-2">
                        <strong>Correct Answer:</strong> {q.correct_answer}
                      </p>
                      {q.explanation && (
                        <p className="text-muted small">{q.explanation}</p>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>No questions found for this quiz.</p>
              )}
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default Quizzes;
