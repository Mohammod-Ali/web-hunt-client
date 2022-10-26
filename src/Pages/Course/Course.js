import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './Course.css';


const Course = ({ course }) => {
  const { course_name,  course_details, course_id } = course;
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Card className="mb-5" style={{ width: "280px", height: "470px" }}>
        <Card.Img variant="top" src={course?.image} />
        <Card.Body>
          <Card.Title>{course_name}</Card.Title>
          <Card.Text>
           {
           course_details.length > 100 ? <p>{course_details.slice(0, 120) + '...'} <Link to={`/course/${course_id}`}>Read more...</Link></p>
           : 
           {course_details}
           }
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>
    
  );
};

export default Course;
