import { useState } from 'react';

const CourseItem = ({ course, onEnroll }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div 
      style={{ 
        border: '1px solid #ddd', 
        padding: '1rem',
        position: 'relative'
      }}
      onMouseEnter={() => setShowDesc(true)}
      onMouseLeave={() => setShowDesc(false)}
    >
      <img 
        src={course.image} 
        alt={course.name} 
        style={{ 
          width: '200px', 
          height: '150px', 
          objectFit: 'cover' 
        }} 
      />
      <h3>{course.name}</h3>
      <p>{course.instructor}</p>
      {showDesc && <p>{course.description}</p>}
      <button onClick={() => onEnroll(course)}>Enroll Now</button>
    </div>
  );
};
export default CourseItem;