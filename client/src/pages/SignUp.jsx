import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signup', { name, email, password });
      
      if (response.status === 201) {
        alert('Registration successful!');
        navigate('/signin');
      }
    } catch (err) {
      console.error('Error during sign up:', err);
      alert('Error during sign up, please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 w-full max-w-md border rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Already have an account?</p>
          <button
            onClick={() => navigate('/signin')}
            className="text-blue-500 hover:underline"
          >
            Go to Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
