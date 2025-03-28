import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayStatus from './DisplayStatus';
import Header from './Header';
import Footer from './Footer';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setMessage({ type: 'error', text: 'All fields are required' });
      return;
    }
    
    if (password.length < 8) {
      setMessage({ type: 'error', text: 'Password must be 8+ characters' });
      return;
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      const validUser = users.find(u => u.username === username && u.email === password);
      
      if (validUser) {
        setMessage({ type: 'success', text: 'Login successful! Redirecting...' });
        setTimeout(() => navigate('/courses'), 2000);
      } else {
        setMessage({ type: 'error', text: 'Invalid credentials' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Login failed. Try again.' });
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '2rem auto' }}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Login</button>
        <a href="#" style={{ display: 'block', marginTop: '1rem' }}>Forgot Password?</a>
        {message && <DisplayStatus {...message} />}
      </form>
      <Footer />
    </div>
  );
};
export default LoginForm;