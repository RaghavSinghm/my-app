// src/LoginForm.js

import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ email, username, password, rememberMe });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          Remember Me
        </label>
      </div>  

      <div style={{ margin: '10px 0' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); alert('Forgot Password Clicked'); }}>
          Forgot Password?
        </a>
      </div>

      <button type="submit" style={{ padding: '10px 20px' }}>Login</button>
    </form>
  );
};

export default LoginForm;
