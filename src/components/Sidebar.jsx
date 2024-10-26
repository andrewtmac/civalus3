import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaHome, FaFileContract, FaBriefcase, FaCog } from 'react-icons/fa';

    function Sidebar() {
      return (
        <div className="sidebar">
          <h2>Civalus</h2>
          <ul>
            <li><Link to="/"><FaHome />Account Info</Link></li>
            <li><Link to="/available-contracts"><FaFileContract />Available Contracts</Link></li>
            <li><Link to="/working-contracts"><FaBriefcase />Working Contracts</Link></li>
            <li><Link to="/settings"><FaCog />Settings</Link></li>
          </ul>
        </div>
      );
    }

    export default Sidebar;
div>
      );
    }

    export default Sidebar;
