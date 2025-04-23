import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import img from '../assets/images/profile.jpg';
import '../styles/nav.css'; // Import nav-specific CSS

function AdminNav() {
  return (
    <nav className="navbar">
      <div className='logo'>
        <div className='logo-img'></div>
        <span>DTS</span>
      </div>
      <div className="nav-links">
        <NavLink 
            to="/admin" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Dashboard
          </NavLink>

          <NavLink 
            to="/admin/agents" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Agents
          </NavLink>
          
          <NavLink 
            to="/admin/workflow" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Workflow
          </NavLink>

          <NavLink 
            to="/admin/archive" 
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

export default AdminNav;
