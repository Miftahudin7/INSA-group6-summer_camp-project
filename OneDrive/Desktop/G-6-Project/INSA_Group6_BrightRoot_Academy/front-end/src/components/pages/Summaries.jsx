import React, { useEffect, useState } from "react";
import { Container, Card, ListGroup, Spinner, Alert } from "react-bootstrap";
import api from "../services/api";

const Summaries = () => {
  const [summaries, setSummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummaries = async () => {
      try {
        const res = await api.get("/ai/summaries/");
        setSummaries(res.data);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to fetch summaries");
      } finally {
        setLoading(false);
      }
    };
    fetchSummaries();
  }, []);

  if (loading) return <Spinner animation="border" />;

  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="py-4">
      <h2>AI-Generated Summaries</h2>
      {summaries.length === 0 ? (
        <p>No summaries yet.</p>
      ) : (
        <ListGroup>
          {summaries.map((s) => (
            <ListGroup.Item key={s.id}>
              <h5>{s.file_title}</h5>
              <p>{s.content}</p>
              <small>{s.subject} • {s.grade}</small>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Summaries;
