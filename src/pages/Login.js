import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="p-8 bg-white mt-6 rounded-md shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Login
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-indigo-400 focus:border-indigo-400 bg-gray-50 text-gray-700 placeholder-gray-400"
                required
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:ring-indigo-400 focus:border-indigo-400 bg-gray-50 text-gray-700 placeholder-gray-400"
                required
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-md font-medium hover:bg-indigo-600 transition duration-300 ease-in-out shadow-sm"
            >
              Login
            </button>
          </form>

          <p className="mt-5 text-center text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
