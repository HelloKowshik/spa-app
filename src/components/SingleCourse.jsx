import React from 'react';
import { useState } from 'react';

const SingleCourse = props => {
  const [isTaken, setIsTaken] = useState(false);
  const {
    courseName,
    coursePrice,
    instructorName,
    totalHour,
    totalVideos,
    photo,
  } = props.course;

  const handleClick = () => {
    props.handleEnroll(props);
    setIsTaken(true);
  }

  let Button = (
    <button className='btn btn-primary' onClick={handleClick}>Enroll Now</button>
  );
  if (isTaken) {
    Button = (
      <button disabled className='btn btn-info'>
        Already Enrolled
      </button>
    );
  }
  return (
    <div className='d-flex flex-row mb-3 ml-4'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={photo} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{courseName}</h5>
          <p className='card-text'>Course Price: {coursePrice}</p>
          <p className='card-text'>Instructor: {instructorName}</p>
          <p className='card-text'>Total Video Hours: {totalHour}</p>
          <p className='card-text'>Total Videos: {totalVideos}</p>
          {Button}
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
