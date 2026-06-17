import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  let newErrors = {};

  // Name Validation
  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  } else if (form.name.trim().length < 3) {
    newErrors.name = "Name must be at least 3 characters";
  }

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
    const res = await axios.post(
      "https://event-38as.onrender.com/api/auth/register",
      form
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    alert("User Registered Successfully");
    navigate("/dashboard");
  } catch (err) {
    console.log(err);
    alert("Registration Failed");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-emerald-100 to-green-200">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 rounded-2xl bg-white/70 backdrop-blur-lg shadow-xl border border-gray-200"
      >

        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-600 to-green-500 text-transparent bg-clip-text mb-6">
          Create Account
        </h2>

        {/* NAME */}
     <div className="mb-4">
  <label className="text-sm text-gray-600">
    Name
  </label>

  <input
    type="text"
    placeholder="Enter your name"
    value={form.name}
    className={`w-full mt-1 p-3 rounded-lg border ${
      errors.name
        ? "border-red-500"
        : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-emerald-400`}
    onChange={(e) => {
      setForm({
        ...form,
        name: e.target.value,
      });

      setErrors({
        ...errors,
        name: "",
      });
    }}
  />

  {errors.name && (
    <p className="text-red-500 text-sm mt-1">
      {errors.name}
    </p>
  )}
</div>

        {/* EMAIL */}
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
    } focus:outline-none focus:ring-2 focus:ring-emerald-400`}
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

        {/* PASSWORD */}
      <div className="mb-5">
  <label className="text-sm text-gray-600">
    Password
  </label>

  <input
    type="password"
    placeholder="Create a password"
    value={form.password}
    className={`w-full mt-1 p-3 rounded-lg border ${
      errors.password
        ? "border-red-500"
        : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-emerald-400`}
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

        {/* BUTTON */}
        <button className="w-full py-3 rounded-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition duration-300">
          Register
        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}

          <Link
            to="/login"
            className="text-emerald-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}