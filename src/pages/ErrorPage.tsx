import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default ErrorPage;
