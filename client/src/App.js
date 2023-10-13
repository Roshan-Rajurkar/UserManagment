import React, { useState, useEffect } from 'react'
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./form/login/Login";
import Register from "./form/register/Register";
import { Routes, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </div>
  );
}

export default App;
