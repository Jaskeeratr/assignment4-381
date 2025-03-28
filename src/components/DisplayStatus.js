const DisplayStatus = ({ type, message }) => (
    <div style={{ 
      color: type === 'success' ? 'green' : 'red',
      padding: '1rem',
      margin: '1rem 0',
      border: `1px solid ${type === 'success' ? 'green' : 'red'}`
    }}>
      {message}
    </div>
  );
  export default DisplayStatus;