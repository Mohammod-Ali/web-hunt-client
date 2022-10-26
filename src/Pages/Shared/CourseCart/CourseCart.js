import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseCart = () => {
  const course = useLoaderData();
  return (
    <div>
        <h2 className="ms-3">About: {course.course_name}. <br /> Why we should learn: {course.course_name}</h2>
      <Card className="container w-50 mx-auto mb-5">
        <Card.Img variant="top" src={course?.image} />
        <Card.Body>
          <Card.Title>{course.course_name}</Card.Title>
          <Card.Text>{course.course_details}</Card.Text>
          <Link to='/courses'>
          <Button variant="outline-primary">
            Back Courses Page
          </Button>
          </Link>
          

        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCart;
