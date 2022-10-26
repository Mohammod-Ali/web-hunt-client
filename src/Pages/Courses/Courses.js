import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import SideBar from "./SideBar";

const Courses = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div className="container">
      <h1>We provide this {courses.length} Courses</h1>
      <Container>
      <Row>
        <Col lg='2' className="border rounded">
          {
            courses.map(course => <SideBar
              key={course.course_id} course={course}
            ></SideBar>)
          }
        </Col>
        <Col lg='10'>
        <div className="card-container">
        {courses.map((course) => (
          <Course key={course.course_id} course={course}></Course>
        ))}
      </div>
        </Col>
        
      </Row>
    </Container>
      
    </div>
  );
};

export default Courses;
