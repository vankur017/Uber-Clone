import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const navigate = useNavigate();

  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        fisrtname: firstname,
        lastname: lastname,
      },
      email, 
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true, 
        }
      );


      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        navigate('/home');
      }
    } catch (error) {
      console.error('Error during signup:', error.response?.data || error.message);
    }

    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  };

  return (
    <div className="p-4 flex flex-col justify-between">
      <div>
        <img
          className="w-24 mb-5"
          src="https://brandlogos.net/wp-content/uploads/2021/12/uber-brandlogo.net_-512x512.png"
          alt="Not Rendered"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-base font-medium mb-2">What's your name?</h3>
          <div className="flex gap-3 mb-5">
            <input
              required
              className="bg-[#eeeeee] w-1/2 mb-7 border-2 rounded px-4 py-2 text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 mb-7 border-2 rounded px-4 py-2 text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h3 className="text-base font-medium mb-2">What's your email?</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 border-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-7 border-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-7 border-2 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Create Account
          </button>
        </form>
        <p className="text-center mb-3">
          Already have an account?{' '}
          <Link to="/login" className="mb-3 text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[12px] leading-tight">
          Welcome to Uber! Your privacy is important to us. Please take a moment to review our Privacy Policy, which
          explains how we collect, use, and protect your personal information. By signing up, you agree to the terms of
          this policy.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
