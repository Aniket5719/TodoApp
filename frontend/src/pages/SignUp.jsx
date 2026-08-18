import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // <-- import navigate

const Signup = () => {
  const navigate = useNavigate();  // <-- initialize navigate

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", user);
      setMessage("User registered successfully! Redirecting to login...");
      setMessageType("success");

      // Redirect to login after short delay
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
      setMessageType("error");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome to the App</h1>

        {message && (
          <div
            className={`mb-4 p-3 rounded ${
              messageType === "success"
                ? "bg-green-100 text-green-700 border border-green-400"
                : "bg-red-100 text-red-700 border border-red-400"
            }`}
          >
            {message}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={user.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={user.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
