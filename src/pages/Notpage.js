import { Link } from "react-router-dom";

function NotPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* เนื้อหาจะแสดงโดยไม่มีกรอบ */}
      <div className="text-center">
        {/* เปลี่ยนสีจาก indigo-600 เป็น red-600 */}
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        {/* เปลี่ยนสีจาก gray-800 เป็น red-800 */}
        <h2 className="text-2xl font-semibold text-red-800 mb-6">Not Found</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotPage;
