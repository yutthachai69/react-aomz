import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ตรวจสอบว่าได้นำเข้า useNavigate

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null); // กำหนดค่า error ไว้เพื่อใช้

  const navigate = useNavigate(); // เรียกใช้ useNavigate ภายในฟังก์ชันคอมโพเนนต์

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // ส่งข้อมูลการสมัครสมาชิก (mock)
    // ถ้าสมัครสมาชิกสำเร็จ ให้ไปที่หน้าอื่น
    navigate('/dashboard'); // ใช้ navigate เพื่อย้ายหน้า
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* แสดง error ถ้ามี */}
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
