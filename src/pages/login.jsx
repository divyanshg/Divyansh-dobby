import { useState } from "react";
import useAuth from "../hooks/useAuth";

import login from "../api/login";

import { Link, useNavigate, useLocation } from "react-router-dom";

function Login() {
  const { setIsAuthenticated } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("test");
  const [password, setPassword] = useState("test");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password).then((res) => {
      localStorage.setItem("accessToken", res.data.accessToken);
      setIsAuthenticated(true);
      navigate(from, {
        replace: true,
      });
    });
  };

  return <div onClick={handleSubmit}>Login</div>;
}

export default Login;
