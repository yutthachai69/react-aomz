import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน กรุณากรอกใหม่");
      return;
    } else {
      try {
        const response = await axios.post("http://localhost:4000/register", {
          email,
          password,
          name,
        });
        console.log("User registered:", response.data);
        // Redirect or clear form here after success
        alert("สมัครสมาชิก : " + response.data);
        setEmail("");
        setPassword("");
        setName("");
        navigate("/login");
      } catch (error) {
        setError(error.response.data);
        console.error("Registration error:", error.response.data);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
        <div className="max-w-md w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="px-6 py-10">
            <div className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
              Register
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-4 rounded-full bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition duration-300 ease-in-out shadow-sm"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full p-4 rounded-full bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition duration-300 ease-in-out shadow-sm"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full p-4 rounded-full bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition duration-300 ease-in-out shadow-sm"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full p-4 rounded-full bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition duration-300 ease-in-out shadow-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-4 mt-4 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-500 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
              >
                Register
              </button>
            </form>
            <p>
              <Link
                to="/login"
                className="mt-6 text-center block text-indigo-700 hover:underline"
              >
                เข้าสู่ระบบ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
