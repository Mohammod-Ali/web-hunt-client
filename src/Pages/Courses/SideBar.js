import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({course}) => {
    return (
        <div className='container mt-3'>
            <h5><Link to={`/course/${course.course_id}`} style={{ textDecoration: 'none' }}>{course.course_name}</Link></h5>
        </div>
    );
};

export default SideBar;