import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import "./App.css"
function App() {
   return (
    <div className="app-container">
      <Sidebar />
      <div className="main-area">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App
