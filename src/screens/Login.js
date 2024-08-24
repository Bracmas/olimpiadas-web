import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../controllers/authContext";
import { Alert } from "./Alert";
import "./styles/login.css"

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
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
          className="form_input"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            
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
            name="password"
            id="password"
            onChange={handleChange}
            className="form_input"
            placeholder="*************"
          />
        </div>

        <div className="">
          <button
            className="form_button"
            type="submit"
          >
            Sign In
          </button>
          <a
            className=""
            href="#!"
            onClick={handleResetPassword}
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <button
        onClick={handleGoogleSignin}
        className=""
      >
        Google login
      </button>
      <p className="my-4 text-sm flex justify-between px-3">
        Don't have an account?
        <Link to="/register" className="text-blue-700 hover:text-blue-900">
          Register
        </Link>
      </p>
    </div>
  );
}