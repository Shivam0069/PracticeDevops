import React from "react";
import UserTable from "../components/UserTable";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = ({ user, setUser }) => {
  const navigate = useNavigate();

  const date = new Date(user?.dateOfBirth);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/logout`,
        {}, // Axios expects data object here
        { withCredentials: true }
      );

      if (res.status === 200 || res.status === 204) {
        localStorage.removeItem("user");
        setUser(null);
        console.log("User logged out successfully");
        navigate("/login");
      } else {
        console.warn("Unexpected logout status:", res.status);
      }
    } catch (err) {
      console.error(
        "Logout failed:",
        err.response?.data?.message || err.message
      );
    }
  };
  return (
    <div className="flex flex-col md:flex-row w-full md:max-h-screen   ">
      <div className="w-full md:w-1/4 md:h-screen  p-6 border-r border-x-gray-500">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 rounded-full flex items-center justify-center overflow-hidden ">
            <svg
              className="w-20 h-20 text-slate-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold">{user?.userName}</h2>
          <p className="">{user?.email}</p>
          <p className="text-gray-500">{formattedDate}</p>
          <button
            onClick={handleLogout}
            className=" mt-10 flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
      <UserTable />
    </div>
  );
};

export default Home;
