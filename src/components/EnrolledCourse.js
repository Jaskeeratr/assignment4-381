// src/components/EnrolledCourse.js
const EnrolledCourse = ({ course, onDrop }) => (
    <div style={{ 
      border: '1px solid #ddd',
      padding: '1rem',
      margin: '1rem 0',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <div>
        <h3>{course.name}</h3>
        <p>{course.credits} credits</p>
      </div>
      <button onClick={onDrop}>Drop Course</button>
    </div>
  );
  
  export default EnrolledCourse;