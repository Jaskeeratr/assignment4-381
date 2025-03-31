import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import CourseItem from './CourseItem';
import EnrollmentList from './EnrollmentList';
import courses from '../data/courses';

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
      <div style={{ 
        display: 'flex', 
        padding: '1rem',
        gap: '2rem'
      }}>
        {/* Course Catalog Section */}
        <div style={{ 
          flex: 3,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          <h2 style={{ gridColumn: '1 / -1' }}>Course Catalog</h2>
          {courses.map(course => (
            <CourseItem 
              key={course.id}
              course={course}
              onEnroll={handleEnroll}
            />
          ))}
        </div>
        
        {/* Enrollment List Section */}
        <div style={{ flex: 1 }}>
          <EnrollmentList 
            enrolledCourses={enrolledCourses}
            onDrop={handleDrop}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
