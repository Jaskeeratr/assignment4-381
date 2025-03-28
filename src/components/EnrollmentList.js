import { useEffect } from 'react';
import EnrolledCourse from './EnrolledCourse';

const EnrollmentList = ({ enrolledCourses, onDrop }) => {
  useEffect(() => {
    localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const totalCredits = enrolledCourses.reduce((sum, course) => sum + course.credits, 0);

  return (
    <div style={{ marginLeft: '2rem' }}>
      <h2>Enrolled Courses</h2>
      {enrolledCourses.map(course => (
        <EnrolledCourse 
          key={course.id}
          course={course}
          onDrop={() => onDrop(course.id)}
        />
      ))}
      <p>Total Credits: {totalCredits}</p>
    </div>
  );
};
export default EnrollmentList;