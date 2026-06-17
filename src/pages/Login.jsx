import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {

  const navigate = useNavigate();
   const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

      let newErrors = {};

  // Email Validation
  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  ) {
    newErrors.email = "Please enter a valid email";
  }

  // Password Validation
  if (!form.password.trim()) {
    newErrors.password = "Password is required";
  } else if (form.password.length < 6) {
    newErrors.password =
      "Password must be at least 6 characters";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }


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
    value={form.email}
    className={`w-full mt-1 p-3 rounded-lg border ${
      errors.email
        ? "border-red-500"
        : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
    onChange={(e) => {
      setForm({
        ...form,
        email: e.target.value,
      });

      setErrors({
        ...errors,
        email: "",
      });
    }}
  />

  {errors.email && (
    <p className="text-red-500 text-sm mt-1">
      {errors.email}
    </p>
  )}
</div>

        {/* Password */}
      <div className="mb-5">
  <label className="text-sm text-gray-600">
    Password
  </label>

  <input
    type="password"
    placeholder="Enter your password"
    value={form.password}
    className={`w-full mt-1 p-3 rounded-lg border ${
      errors.password
        ? "border-red-500"
        : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
    onChange={(e) => {
      setForm({
        ...form,
        password: e.target.value,
      });

      setErrors({
        ...errors,
        password: "",
      });
    }}
  />

  {errors.password && (
    <p className="text-red-500 text-sm mt-1">
      {errors.password}
    </p>
  )}
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