import { useState } from 'react';
import images from '../images/course1.jpg';

const CourseItem = ({ course, onEnroll }) => {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div 
      style={{ 
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.2s',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }
      }}
      onMouseEnter={() => setShowDesc(true)}
      onMouseLeave={() => setShowDesc(false)}
    >
      <div style={{ height: '180px', overflow: 'hidden' }}>
        <img 
          src={images} 
          alt={course.name}
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} 
        />
      </div>
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>{course.name}</h3>
        <p style={{ color: '#666', margin: '0 0 0.5rem 0' }}>
          Instructor: {course.instructor}
        </p>
        {showDesc && (
          <p style={{ margin: '0.5rem 0' }}>
            {course.description}
          </p>
        )}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem'
        }}>
          <span>Duration: {course.duration}</span>
          <button 
            onClick={() => onEnroll(course)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
