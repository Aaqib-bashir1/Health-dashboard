
import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { FaTachometerAlt, FaCalendarAlt, FaUserMd, FaChartBar, FaComments, FaCog, FaHeartbeat, FaTooth, FaBone, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Dashboard', icon: <FaTachometerAlt /> },
  { label: 'History', icon: <FaChartBar /> },
  { label: 'Calendar', icon: <FaCalendarAlt /> },
  { label: 'Appointments', icon: <FaUserMd /> },
  { label: 'Statistics', icon: <FaChartBar /> },
  { label: 'Tests', icon: <FaHeartbeat /> },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="hamburger-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle sidebar"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
      <aside className={`sidebar${open ? ' open' : ''}`}>
        <h2 className="logo"><span>Health</span>care.</h2>
        <div className="sidebar-nav">
          <p className="nav-header">General</p>
          <ul>
            {navLinks.map((item, idx) => (
              <li key={idx} className="nav-item" onClick={() => setOpen(false)}>
                
                {item.icon}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          <p className="nav-header">Tools</p>
          <ul>
            <li className="nav-item"><FaComments /><span>Chat</span></li>
            <li className="nav-item"><FaCog /><span>Support</span></li>
          </ul>
          <div className="settings"><span>Setting</span></div>
        </div >
        
      </aside>
    </>
  );
};

export default Sidebar;