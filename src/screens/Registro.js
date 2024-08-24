import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../controllers/authContext";
import { Alert } from "./Alert";
import "./styles/login.css"
export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      {error && <Alert message={error} />}

      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <div className="container .info">
          <label
            htmlFor="email"
            className="form_input"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="form_input"
            placeholder="youremail@company.tld"
          />
        </div>

        <div className="container .info">
          <label
            htmlFor="password"
            className=""
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="form_input"
            placeholder="*************"
          />
        </div>

        <button className="form_button">
          Register
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
        Already have an Account?
        <Link to="/login" className="text-blue-700 hover:text-blue-900">
          Login
        </Link>
      </p>
    </div>
  );
}