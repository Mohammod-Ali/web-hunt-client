import React from "react";
import Card from "react-bootstrap/Card";

const Blog = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <div className="container m-5 ">
      <Card>
        <Card.Body>
          <Card.Title>{question}</Card.Title>
          <Card.Text>{answer}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
