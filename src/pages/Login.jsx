import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // LOGIN API
      const res = await axios.post(
        "https://event-38as.onrender.com/api/auth/login",
        form
      );

      console.log(res.data);

      // STORE USER
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-indigo-100 to-blue-200">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 rounded-2xl bg-white/70 backdrop-blur-lg shadow-xl border border-gray-200"
      >

        {/* Title */}
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text mb-6">
          Welcome Back
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="text-sm text-gray-600">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />
        </div>

        {/* Button */}
        <button className="w-full py-3 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition duration-300">
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-indigo-600 hover:underline"
          >
            Register
          </Link>
        </p>

      </form>
    </div>
  );
}