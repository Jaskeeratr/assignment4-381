import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import CourseItem from './CourseItem';
import EnrollmentList from './EnrollmentList';
import courses from '../data/courses'; // ADD THIS IMPORT

const CoursesPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('enrolledCourses');
    if (saved) setEnrolledCourses(JSON.parse(saved));
  }, []);

  const handleEnroll = (course) => {
    if (!enrolledCourses.some(c => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const handleDrop = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(c => c.id !== courseId));
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', padding: '1rem' }}>
        <div style={{ flex: 2 }}>
          <h2>Course Catalog</h2>
          {courses.map(course => (  // NOW THIS WILL WORK
            <CourseItem 
              key={course.id}
              course={course}
              onEnroll={handleEnroll}
            />
          ))}
        </div>
        <EnrollmentList 
          enrolledCourses={enrolledCourses}
          onDrop={handleDrop}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;