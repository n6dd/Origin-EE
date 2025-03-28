import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaTag, FaChartBar, FaUsers, FaBars } from "react-icons/fa";
import "./SideNav.css";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidenav ${isOpen ? "open" : "closed"}`}>
      <button className="sidenav-toggle" onClick={toggleSidebar}>
        <FaBars className="sidenav-icon" />
      </button>
      
      <div className="sidenav-links">
        <Link to="/dashboard" className="sidenav-link">
          <FaHome className="sidenav-icon" />
          {isOpen && "Dashboard"}
        </Link>
        <Link to="/sales" className="sidenav-link">
          <FaShoppingCart className="sidenav-icon" />
          {isOpen && "Sales"}
        </Link>
        <Link to="/products" className="sidenav-link">
          <FaTag className="sidenav-icon" />
          {isOpen && "Products"}
        </Link>
        <Link to="/analytics" className="sidenav-link">
          <FaChartBar className="sidenav-icon" />
          {isOpen && "Analytics"}
        </Link>
        <Link to="/members" className="sidenav-link">
          <FaUsers className="sidenav-icon" />
          {isOpen && "Members"}
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
