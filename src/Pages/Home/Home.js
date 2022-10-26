import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

const Home = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      {/* <h1>This is home: {courses.length}</h1> */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     <div className="card-container mt-5">
     {
        courses.map( course => (
            <div className="d-flex align-items-center justify-content-center mt-5">
      <Card className="mb-5" style={{ width: "280px", height: "440px" }}>
        <Card.Img variant="top" style={{height: "230px", width: "280px"}} src={course?.image} />
        <Card.Body>
          <Card.Title>{course.course_name}</Card.Title>
          <Card.Text>
           {
           course.course_details.length > 100 ? <p>{course.course_details.slice(0, 120) + '...'} <Link to={`/course/${course.course_id}`}>Read more...</Link></p>
           : 
           {}
           }
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>
        ))
      }
     </div>
    </div>
  );
};

export default Home;
