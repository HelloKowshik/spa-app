import React from 'react';
import CourseData from '../Data/CourseData';
import SingleCourse from './SingleCourse';
import { useState } from 'react';
import CourseCart from './CourseCart';

const Course = () => {

    const [courses, setCourses] = useState('');
    const [prices, setPrices] = useState([]);

    const handleEnroll = enrolledCourse => {
        const { courseName, coursePrice } = enrolledCourse.course;
        const allCourses = [...courses, courseName];
        const totalPrice = [...prices, coursePrice];
        setCourses(allCourses);
        setPrices(totalPrice);
    }

  return (
    <div className='container-fluid'>
          <div className=' mb-5'>
              <CourseCart courses={courses} prices={prices} />
      </div>
      <div className='row'>
        {CourseData.map(course => (
            <SingleCourse key={course.courseId} course={course} handleEnroll={handleEnroll} />
        ))}
      </div>
    </div>
  );
};

export default Course;
