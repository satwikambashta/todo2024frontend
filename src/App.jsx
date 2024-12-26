import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context, server } from "./main";

function App() {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  useEffect(() => {
    const checkAuthentication = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${server}/users/me`, {
          withCredentials: true,
        });

        if (res.status === 200 && res.data.user) {
          setUser(res.data.user);
          setIsAuthenticated(true);
        } else {
          throw new Error("Invalid response");
        }
      } catch (error) {
        console.error("Authentication failed:", error);
        setUser({});
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
