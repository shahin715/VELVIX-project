import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = storedUsers.find((u) => u.email === form.email);
    if (userExists) {
      setError("User with this email already exists.");
      return;
    }

    const newUser = {
      name: form.name,
      surname: form.surname,
      email: form.email,
      passwordHash: bcrypt.hashSync(form.password, 10),
    };

    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify(newUser));

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border px-4 py-3 rounded"
          />
          <input
            type="text"
            name="surname"
            placeholder="Last Name"
            value={form.surname}
            onChange={handleChange}
            required
            className="w-full border px-4 py-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border px-4 py-3 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border px-4 py-3 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold text-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
