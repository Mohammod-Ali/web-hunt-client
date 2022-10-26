import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";


const CourseCart = () => {
  const course = useLoaderData();

  const pdfGenerate = () => {
    const doc = new jsPDF('landscape', 'px', 'a4', 'false')
    doc.addImage(course.image, 'PNG', 65,20,500,400)
    doc.addPage()
    doc.text(60,60, course.course_name)
    doc.text(60,80, course.course_details)
    doc.save('a.pdf')

  }

  return (
    <div>
      <div className="d-flex justify-content-around mt-5">
        <div>
        <h2 className="ms-3">
        About: {course.course_name} <br /> Why we should learn:{" "}
        {course.course_name}
      </h2>
        </div>
        <div>
          <Button onClick={pdfGenerate}><h3><FaFileDownload></FaFileDownload> Download PDF file</h3></Button>
        </div>
      </div>
      <Card className="container w-50 mx-auto mb-5">
        <Card.Img variant="top" src={course?.image} />
        <Card.Body>
          <Card.Title>{course.course_name}</Card.Title>
          <Card.Text>{course.course_details}</Card.Text>
          <Link to={`/premium/${course.course_id}`}>
            <Button variant="outline-primary">Get Premium Service</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseCart;
