import React from 'react';
import { FaTachometerAlt, FaLayerGroup, FaEnvelope, FaCalendarAlt, FaLightbulb, FaWpforms, FaFile, FaTable, FaChartBar, FaMap, FaUserCircle } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="https://i.postimg.cc/7Ppsnm7H/power-bi-business-intelligence-microsoft-logo-png-favpng-epr-D5-E7cw-E6-Cd2vq-XZRfm-Vtz6-removebg-preview.png" alt="Power Icon" className="sidebar-logo" />
        <h2>Power Analytics</h2>
      </div>
      <ul>
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaLayerGroup /> Layouts</li>
        <li><FaEnvelope /> Mailbox</li>
        <li><FaCalendarAlt /> Calendar</li>
        <li><FaLightbulb /> UI Elements</li>
        <li><FaWpforms /> Forms</li>
        <li><FaFile /> Pages</li>
        <li><FaTable /> Tables</li>
        <li><FaChartBar /> Charts</li>
        <li><FaMap /> Maps</li>
        <li><FaUserCircle /> Profile</li>
      </ul>
    </div>
  );
};

export default Sidebar;
