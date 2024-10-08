import React, { useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('กรุณาเลือกรูปภาพก่อน');
            return;
        }

        const formData = new FormData();
        formData.append('profilePicture', selectedFile);
        formData.append('userId', 'USER_ID_HERE'); // แทนที่ด้วย ID ของผู้ใช้

        try {
            const response = await axios.post('http://localhost:4000/updateProfilePicture', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('เกิดข้อผิดพลาดในการอัปโหลดรูปโปรไฟล์');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>อัปโหลดรูปโปรไฟล์</button>
        </div>
    );
};

export default Users;
