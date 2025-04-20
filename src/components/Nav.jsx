import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import img from '../assets/images/profile.jpg';
import '../styles/nav.css'; // Import nav-specific CSS

function Nav() {
  return (
    <nav className="navbar">
      <div className='logo'>
        <div className='logo-img'></div>
        <span>DTS</span>
      </div>
      <div className="nav-links">
        <NavLink 
            to="/dashboard" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Dashboard
          </NavLink>

          <NavLink 
            to="/ticket" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Ticket
          </NavLink>

          <NavLink 
            to="/track" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Track
          </NavLink>

          <NavLink 
            to="/archive" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Archive
          </NavLink>

      </div>

      <div className='user-area'>
        <span>User Name</span>
        <div className='notification-bell'>🔔</div>
        <div className='user-avatar'></div>
      </div>
      
    </nav>
  );
} 

export default Nav;
