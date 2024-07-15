import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import travel from '../assets/travel.jpg';
import Facebook from '../assets/Facebook.svg';
import Apple from '../assets/Apple.svg';
import Google from '../assets/Google.svg';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/login', formData);

      if (response.status === 200) {
        alert('Login successful');
        navigate('/'); // Navigate to the home page
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <hr />

      <div className="container mx-auto my-8 p-4 md:my-20 md:p-14 flex flex-col md:flex-row bg-neutral-200 border border-neutral-400 w-11/12 md:w-9/12 rounded-xl">

        {/* image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:items-center">
          <div className="w-4/5 rounded-sm">
            <img src={travel} alt="travel" className="w-full h-auto rounded-sm" />
          </div>
        </div>

        {/* login */}
        <div className="w-full md:w-1/2">
          <h4 className="text-xl font-black mb-2">Login</h4>
          <h6>Login to access your Easyset24 account</h6>
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <h6 className="text-sm font-semibold my-1">Email</h6>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full p-2 h-10 border border-slate-400 rounded-sm"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="my-4">
              <h6 className="text-sm font-semibold my-1">Password</h6>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="***************"
                className="w-full p-2 h-10 border border-slate-400 rounded-sm"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="w-full h-10 bg-[#07689F] text-white font-bold rounded-sm">Login</button>
          </form>
          <div className="flex flex-col items-center gap-2 mt-4">
            <h6 className="text-sm">Or</h6>
            <div className="flex items-center gap-4 md:gap-10">
              <img src={Facebook} alt="Facebook" className="w-8 h-8 md:w-10 md:h-10" />
              <img src={Apple} alt="Apple" className="w-8 h-8 md:w-10 md:h-10" />
              <img src={Google} alt="Google" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h6>Don&apos;t have an account in EasySet24 yet? <b className="text-[#07689F]"><Link to="/register">Register</Link>
            </b></h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
