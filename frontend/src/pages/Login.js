import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/login`,
        { email, password },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        const user = res.data.user;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in:", user);
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
        <div className="text-center pt-10 mb-8">
          <div className="absolute -top-2 left-[50%] -translate-x-[50%] bg-teal-400 text-slate-800 font-bold py-3 px-8 rounded-md inline-block mb-6">
            SIGN IN
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
          {/* email Field */}
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
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                className="w-5 h-5 text-slate-400 "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
            </div>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-600 text-white placeholder-slate-400 pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-slate-300">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2 w-4 h-4 text-teal-400 bg-slate-600 border-slate-500 rounded focus:ring-teal-400"
              />
              Remember me
            </label>
            <a href="#" className="text-teal-400 hover:text-teal-300">
              Forgot your password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-teal-400 hover:bg-teal-500 text-slate-800 font-bold py-3 px-4 rounded-md transition-colors duration-200"
          >
            LOGIN
          </button>
          <div className="text-center mt-4">
            <span className="text-slate-300 text-sm">
              Don't have an account?{" "}
            </span>
            <a
              href="/register"
              className="text-teal-400 hover:text-teal-300 text-sm"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
