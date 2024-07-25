import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../config/firebase";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      Swal.fire("Validation Error", "Please fill out all fields", "warning");
      return;
    }
    loginFunc();
  };

  const loginFunc = async () => {
    try {
      await loginUser(email, password);
      await Swal.fire("Success", "Successfully logged in", "success");
      navigate("/");
    } catch (error: any) {
      console.error("Login error:", error);
      await Swal.fire(
        "Error",
        `There was an error during login: ${error.message}`,
        "error"
      );
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className="hidden md:block md:w-2/3 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg)",
        }}
      />
      <div className="flex items-center justify-center w-full md:w-1/3 bg-white p-8">
        <div className="w-full max-w-md">
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
            <h2 className="mt-4 text-2xl font-bold text-gray-700">Sign In</h2>
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                required
                className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                required
                className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <button
              type="submit"
              className="w-full px-3 py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Sign In
            </button>
            <div className="flex justify-between">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
              <Link
                to="/signup"
                className="text-sm text-blue-500 hover:underline"
              >
                Don't have an account? Sign Up
              </Link>
            </div>
          </form>
          <div className="mt-6 text-center text-gray-500">
            © {new Date().getFullYear()} Your Website
          </div>
        </div>
      </div>
    </div>
  );
}
