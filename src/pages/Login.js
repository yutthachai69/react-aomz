import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import { useState } from "react";
import axios from "axios";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      login(res.data.token);
      alert("Login Successful!");
      navigate("/");
    } catch (err) {
      setError(err.response ? err.response.data.message : "Login failed");
      console.error(err.response ? err.response.data : err); // Log the correct data
    }
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-300 to-purple-400">
        <div className="p-8 bg-white rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="p-6 w-96">
            <h2 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              Login
            </h2>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-5">
            <Link
              to={"/register"}
              className="text-indigo-700 font-semibold hover:text-indigo-900 transition duration-300 ease-in-out"
            >
              สมัครสมาชิก
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
