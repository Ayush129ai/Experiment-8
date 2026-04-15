import React from "react";
import axios from "axios";

function AdminDashboard() {
  const role = sessionStorage.getItem("role");
  const credentials = sessionStorage.getItem("credentials");

  if (role !== "ADMIN") {
    alert("Access Denied");
    window.location.href = "/";
    return null;
  }

  const fetchAdmin = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/admin/dashboard", {
            headers: { Authorization: "Basic " + credentials }
        });
        alert(res.data.message || JSON.stringify(res.data));
    } catch(err) {
        alert("Access Denied");
    }
  };
  
  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  }

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <button className="btn btn-danger me-2" onClick={fetchAdmin}>Admin Data</button>
      <button className="btn btn-secondary" onClick={logout}>Logout</button>
    </div>
  );
}

export default AdminDashboard;
