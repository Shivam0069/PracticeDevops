import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProtectiveRoute from "./components/ProtectiveRoute";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Loader from "./components/Loader";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const storedUser = localStorage.getItem("user");
    // if (storedUser) {
    //   setUser(JSON.parse(storedUser));
    // }
    // setLoading(false);
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/users/profile`,
          { withCredentials: true }
        );
        console.log("Profile response:", res);
        if (res.status === 200) {
          setUser(res.data);
        } else {
          console.log(`Unexpected status code: ${res.status}`);
        }
      } catch (err) {
        console.log("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectiveRoute user={user}>
            <Home user={user} setUser={setUser} />
          </ProtectiveRoute>
        }
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register setUser={setUser} />}
      />
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <Login setUser={setUser} />}
      />
    </Routes>
  );
}

export default App;
