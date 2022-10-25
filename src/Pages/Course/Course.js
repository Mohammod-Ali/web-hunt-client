import React from "react";
import Card from "react-bootstrap/Card";
import './Course.css';


const Course = ({ course }) => {
  const { course_name, image, course_details } = course;
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Card className="mb-5" style={{ width: "280px", height: "470px" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{course_name}</Card.Title>
          <Card.Text>
           {course_details}
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>
    
  );
};

export default Course;
