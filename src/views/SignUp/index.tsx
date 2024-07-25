import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpUser } from "../../config/firebase";
import Swal from "sweetalert2";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      Swal.fire("Validation Error", "Please fill out all fields", "warning");
      return;
    }
    register();
  };

  const register = async () => {
    try {
      await SignUpUser({ firstName, lastName, email, password });
      await Swal.fire("Success", "Register successful", "success");
      navigate("/login");
    } catch (error: any) {
      console.error("Registration error:", error);
      await Swal.fire(
        "Error",
        `There was an error during registration: ${error.message}`,
        "error"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <h2 className="mt-4 text-2xl font-bold text-gray-700">Sign Up</h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                First Name
              </label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                value={firstName}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Last Name
              </label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                value={lastName}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border rounded focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-600">
              I want to receive inspiration, marketing promotions and updates
              via email.
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 mt-6 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
          <div className="flex justify-end mt-4">
            <Link to="/login" className="text-sm text-blue-500 hover:underline">
              Already have an account? Sign in
            </Link>
          </div>
        </form>
        <div className="mt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Your Website
        </div>
      </div>
    </div>
  );
}
