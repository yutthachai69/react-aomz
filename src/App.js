import "./App.css";
import Button from "./Button"; // Fixed import for Button
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import { Outlet } from "react-router-dom";
import NotPage from "./pages/Notpage";
import { AuthProvider, useAuth } from './AuthProvider'; // ตรวจสอบให้แน่ใจว่า import ถูกต้อง
import MyBlog from "./pages/MyBlog"; // ชื่อไฟล์ต้องตรงกัน (M ใหญ่ B ใหญ่)
import AddBlog from "./pages/AddBlog"; // ชื่อไฟล์ต้องตรงกัน (A ใหญ่ B ใหญ่)
import EditBlog from "./pages/EditBlog";



// ProtectedRoute to guard routes
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Fetch user from the Auth context
  const location = useLocation(); // For storing current location

  if (!user) {
    // If user is not authenticated, navigate to the login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // If authenticated, render children (the protected route content)
};

// Layout for Admin Pages
const LayoutAdmin = () => {
  return (
    <ProtectedRoute>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="m-6 p-10 bg-gray-50 min-h-screen rounded-lg">
            <Outlet /> {/* Outlet is where child routes will be rendered */}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

// Main App Component
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutAdmin />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/user" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/myblog" element={<MyBlog />} />
            <Route path="/new-post" element={<AddBlog />} />
            <Route path="/edit-post/:id" element={<EditBlog />} />
            
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* เส้นทางสำหรับหน้าที่ไม่พบ */}
          <Route path="*" element={<NotPage />} /> {/* Add this line */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App;
