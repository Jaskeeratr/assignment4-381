import { useState, useEffect } from 'react';
import courses from '../data/courses';
import testimonials from '../data/testimonials';

const MainSection = () => {
  const [featuredCourses, setFeaturedCourses] = useState([]);
  const [featuredTestimonials, setFeaturedTestimonials] = useState([]);

  useEffect(() => {
    const shuffledCourses = [...courses].sort(() => Math.random() - 0.5);
    setFeaturedCourses(shuffledCourses.slice(0, 3));
    
    const shuffledTestimonials = [...testimonials].sort(() => Math.random() - 0.5);
    setFeaturedTestimonials(shuffledTestimonials.slice(0, 2));
  }, []);

  return (
    <main style={{ padding: '1rem' }}>
      <section>
        <h2>About LMS</h2>
        <p>Your platform for learning cutting-edge technologies.</p>
      </section>
      
      <section>
        <h2>Featured Courses</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {featuredCourses.map(course => (
            <div key={course.id} style={{ border: '1px solid #ddd', padding: '1rem' }}>
              <img src={course.image} alt={course.name} style={{ width: '200px' }} />
              <h3>{course.name}</h3>
              <p>{course.instructor}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Testimonials</h2>
        {featuredTestimonials.map((testimonial, index) => (
          <div key={index} style={{ margin: '1rem 0' }}>
            <h4>{testimonial.studentName}</h4>
            <p>{testimonial.review}</p>
            <div>{'★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating)}</div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default MainSection;