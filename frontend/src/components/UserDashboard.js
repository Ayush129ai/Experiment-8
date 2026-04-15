import React from "react";
import axios from "axios";

function UserDashboard() {
  const role = sessionStorage.getItem("role");
  const credentials = sessionStorage.getItem("credentials");

  if (!role) {
    window.location.href = "/";
    return null;
  }

  const fetchData = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/user/profile", {
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
      <h2>User Dashboard</h2>
      <button className="btn btn-success me-2" onClick={fetchData}>Get Profile</button>
      <button className="btn btn-secondary" onClick={logout}>Logout</button>
    </div>
  );
}

export default UserDashboard;
