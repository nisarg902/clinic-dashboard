import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    { path: "/", icon: "bi-grid-1x2-fill", label: "Dashboard" },
    { path: "/register", icon: "bi-person-plus-fill", label: "Registration" },
    { path: "/add-test", icon: "bi-capsule", label: "Assign Test" },
    { path: "/records", icon: "bi-folder2-open", label: "Test Records" }
  ];

  return (
    <div className="bg-dark text-white min-vh-100 p-0 shadow-lg position-sticky top-0">
      <div className="p-4 text-center border-bottom border-secondary mb-3">
        <h4 className="fw-bold m-0 text-primary text-uppercase">Vynetic <span className="text-white">Labs</span></h4>
        <small className="opacity-50 text-uppercase tracking-wider">Clinical Systems</small>
      </div>
      
      <div className="nav flex-column px-3">
        {menuItems.map((item, index) => (
          <NavLink 
            key={index}
            to={item.path} 
            className={({ isActive }) => 
              `nav-link mb-2 rounded-3 p-3 d-flex align-items-center transition-all ${
                isActive ? 'bg-primary text-white shadow' : 'text-secondary'
              }`
            }
          >
            <i className={`bi ${item.icon} me-3 fs-5`}></i>
            <span className="fw-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;