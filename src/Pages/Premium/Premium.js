import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Premium = () => {
    const course = useLoaderData()
    return (
        <div>
            <div className='container'>
            <h1>Congratulations...</h1>
            <h4>You can get the premium services...</h4>
            </div>
            <Card className="container w-50 mx-auto mb-5">
        <Card.Img variant="top" src={course?.image} />
        <Card.Body>
          <Card.Title>{course.course_name}</Card.Title>
          <Card.Text>{course.course_details}</Card.Text>
          <Link to={`/`}>
          <Button variant="outline-primary">
            Go Home
          </Button>
          </Link>
          

        </Card.Body>
      </Card>
        </div>
    );
};

export default Premium;