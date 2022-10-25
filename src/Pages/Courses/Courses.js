import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <h1>We provide this {courses.length} Courses</h1>
      <div className="card-container">
        {courses.map((course) => (
          <Course key={course.course_id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
