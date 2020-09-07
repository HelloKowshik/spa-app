import React from 'react';

const CourseCart = props => {
    const { courses, prices } = props;
    return (
            <div className='row'>
                <div className='col-md-8'>
                <h4> Course(s) Taken: {courses.length === 0? 0 : courses.length}</h4>
                {courses.length > 0 ? (courses.map((name,i) => <button key={i} className='btn btn-outline-secondary'>{name}</button> )) : ''}
                </div>
                <div className='col-md-4'>
                <h2>Total Price: {prices.length > 0 ? (prices.reduce((prev, curr) => prev + curr, 0)) : ''}</h2>
                </div>
            </div>
    );
};

export default CourseCart;