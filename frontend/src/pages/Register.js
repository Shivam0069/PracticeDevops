import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
export default function Register({ setUser }) {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/register`,
        formData,
        {
          withCredentials: true,
        }
      );
      if (res.status === 201) {
        const user = res.data.user;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User registered:", user);
        navigate("/");
      } else {
        console.warn("Unexpected status code:", res.status);
      }
    } catch (error) {
      console.error(
        "Registration error:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center p-4">
      {loading && <Loader />}
      <div className="relative bg-slate-800 rounded-lg shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8 pt-6">
          <div className="absolute -top-2 left-[50%] -translate-x-[50%] bg-teal-400 text-slate-800 font-bold py-3 px-8 rounded-md inline-block mb-6">
            REGISTER
          </div>

          {/* Avatar */}
          <div className="w-20 h-20 bg-slate-600 rounded-full mx-auto flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-slate-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* userName Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-slate-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <input
              type="text"
              name="userName"
              placeholder="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full bg-slate-600 text-white placeholder-slate-400 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-slate-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-600 text-white placeholder-slate-400 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <div
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer"
            >
              <svg
                className="w-5 h-5 text-slate-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
            </div>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-slate-600 text-white placeholder-slate-400 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Date of Birth Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-slate-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
              </svg>
            </div>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full bg-slate-600 text-white placeholder-slate-400 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 [color-scheme:dark]"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-teal-400 hover:bg-teal-500 text-slate-800 font-bold py-3 px-4 rounded-md transition-colors duration-200 mt-6"
          >
            REGISTER
          </button>

          {/* Login Link */}
          <div className="text-center mt-4">
            <span className="text-slate-300 text-sm">
              Already have an account?{" "}
            </span>
            <a
              href="/login"
              className="text-teal-400 hover:text-teal-300 text-sm"
            >
              Sign in here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
