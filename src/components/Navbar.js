import React, { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useActivePage } from '../contexts/ActivePageProvider';
import { FaCar } from 'react-icons/fa';
import './Navbar.css'; // Import the custom CSS file for Navbar styles

function Navbar() {
  const { activePage, setActivePage } = useActivePage();

  const ref = useRef(null);

  const handleClick = (e) => {
    setActivePage(e.target.id);
  }

  const myFunction = () => {
    const nav = ref.current;
    if (nav.className === "sidebar") {
      nav.classList.add("responsive");
    } else {
      nav.className = "sidebar";
    }
  }

  return (
    <div className="sidebar" id="mySidebar" ref={ref}>
      <div className="sidebar-brand">
        <FaCar />
      </div>
      <div className="sidebar-items">
        <Link id='home' onClick={handleClick} className={`${activePage === 'home' && 'active'}`} to="/">Home</Link>
        <Link id='addscenario' onClick={handleClick} className={`${activePage === 'addscenario' && 'active'}`} to="/addscenario">Add Scenarios</Link>
        <Link id='allscenarios' onClick={handleClick} className={`${activePage === 'allscenarios' && 'active'}`} to="/allscenarios">All Scenarios</Link>
        <Link id='addvehiclesform' onClick={handleClick} className={`${activePage === 'addvehiclesform' && 'active'}`} to="/addvehiclesform">Add Vehicles</Link>
      </div>
      <span className="icon" onClick={myFunction}>
        <FaBars color='white' />
      </span>
    </div>
  );
}

export default Navbar;
