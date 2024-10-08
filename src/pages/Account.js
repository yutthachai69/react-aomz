import { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider"; // ตรวจสอบให้แน่ใจว่า import ถูกต้อง
import axios from "axios";

function Account() {
    const { user } = useAuth(); // ดึงข้อมูลผู้ใช้จาก AuthProvider
    const [account, setAccount] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editedName, setEditedName] = useState("");
    const [editedEmail, setEditedEmail] = useState("");
    const [editedPicture, setEditedPicture] = useState(null);

    const getAccount = () => {
        axios.get("http://localhost:4000/account", {
            headers: {
                Authorization: `Bearer ${user.token}`, // ตรวจสอบ token ว่ามีอยู่
            },
        })
        .then((res) => {
            setAccount(res.data);
            setEditedName(res.data.name || ""); // แก้ไขเพื่อเข้าถึงข้อมูลจาก object
            setEditedEmail(res.data.email || ""); // แก้ไขเพื่อเข้าถึงข้อมูลจาก object
            setEditedPicture(res.data.picture || "");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    useEffect(() => {
        if (user) { // ตรวจสอบว่าผู้ใช้ล็อกอินอยู่หรือไม่
            getAccount();
        }
    }, [user]);

    const name = account.name; // แก้ไขเพื่อเข้าถึงข้อมูลจาก object
    const email = account.email; // แก้ไขเพื่อเข้าถึงข้อมูลจาก object
    const picture = account.picture; // แก้ไขเพื่อเข้าถึงข้อมูลจาก object

    const handleSave = () => {
        const formData = new FormData();
        formData.append("name", editedName);
        formData.append("email", editedEmail);
        if (editedPicture) {
            formData.append("picture", editedPicture);
        }

        console.log("FormData for save:", {
            name: editedName,
            email: editedEmail,
            picture: editedPicture,
        });

        axios.put("http://localhost:4000/update-account", formData, {
            headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "multipart/form-data",
            },
        })
        .then(() => {
            getAccount();
            setShowModal(false);
        })
        .catch((err) => {
            console.log("Error during saving:", err);
        });
    };

    return (
        <>
            <h1>Account</h1>
            <div className="p-6 bg-blue-100 rounded-lg shadow-md max-w-md mx-auto">
                <h1 className="text-lg font-bold mb-2">ชื่อ: {name}</h1>
                <h1 className="text-lg font-bold mb-2">Email: {email}</h1>
                <h1 className="text-lg font-bold mb-2">
                    รูปโปรไฟล์: {picture ? (
                        <img
                            src={`http://localhost:4000/${picture}`}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                        />
                    ) : (
                        <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full mx-auto mb-4">
                            <span className="text-gray-500">N/A</span>
                        </div>
                    )}
                </h1>
                <div className="flex justify-center">
                    <button
                        onClick={() => setShowModal(true)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                    >
                        แก้ไขข้อมูล
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h2 className="text-lg font-bold mb-4">แก้ไขโปรไฟล์</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700">ชื่อ</label>
                            <input
                                type="text"
                                value={editedName}
                                onChange={(e) => setEditedName(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">อีเมล</label>
                            <input
                                type="email"
                                value={editedEmail}
                                onChange={(e) => setEditedEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">รูปโปรไฟล์</label>
                            <input
                                type="file"
                                onChange={(e) => setEditedPicture(e.target.files[0])}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 mr-2"
                            >
                                ยกเลิก
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
                            >
                                บันทึก
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Account;
