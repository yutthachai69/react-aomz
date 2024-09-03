import React, { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users") 
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching data: ", error));
    }, []);

    const listUsers = users.map((u) => (
        <tr key={u.id}>
            <td className="px-5 py-5 text-sm">{u.id}</td>
            <td className="px-5 py-5 text-sm">{u.name}</td> {/* เปลี่ยน firstname เป็น name */}
            <td className="px-5 py-5 text-sm">{u.email}</td>
            <td className="px-5 py-5 text-sm">{u.address.street}</td> 
            <td className="px-5 py-5 text-sm">{u.address.city}</td> {/* เพิ่ม city */}
        </tr>
    ));

    return (  
        <>
            <h1 className="text-red-300 font-bold">แสดงชื่อผู้ใช้งาน</h1>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">ID</th> 
                        <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Name</th> 
                        <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Email</th> 
                        <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">Street</th>
                        <th className="px-5 py-3 bg-gray-200 text-gray-600 text-left">City</th> {/* เพิ่ม City */}
                    </tr>
                </thead>
                <tbody>{listUsers}</tbody>
            </table>
        </>
    );
}

export default Users;
