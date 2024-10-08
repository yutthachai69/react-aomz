import React from "react";
import { useAuth } from "../AuthProvider";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("ต้องการออกจากระบบ ?")) {
      logout();

      navigate("/login");
    }
  };

  return (
    <button
  onClick={handleLogout}
  className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 ease-in-out hover:shadow-lg active:bg-red-700"
>
  Logout
</button>


  );
};
export default LogoutButton;
