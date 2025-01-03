import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signin', { email, password });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        alert('Sign In successful!');
        navigate('/home');
      }
    } catch (err) {
      console.error('Error during sign in:', err);
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 w-full max-w-md border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Don't have an account?</p>
          <button
            onClick={() => navigate('/signup')}
            className="text-blue-500 hover:underline"
          >
            Go to Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
