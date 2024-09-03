import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... w-64 h-screen text-blod">
      <div className="p-4">
        <h2 className="text-xl font-bold">Aomx Dashboard</h2>
      </div>
      <nav className="mt-10">
        <Link to="/" className="block py-3 px-4 hover:bg-gray-700">
          Dashboard
        </Link>
        <Link to="/user" className="block py-3 px-4 hover:bg-gray-700">
          Users
        </Link>
        <Link to="/about" className="block py-3 px-4 hover:bg-gray-700">
          About
        </Link>
      </nav>
    </div>
  );
}
