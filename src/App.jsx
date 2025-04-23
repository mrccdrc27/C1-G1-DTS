// import { Routes, Route } from 'react-router-dom'
import { Routes, Route, useLocation } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import AdminNav from './components/AdminNav'
import DateBanner from './components/DateBanner'

// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Ticket from './pages/Ticket'
import Track from './pages/Track'
import Archive from './pages/Archive'
import TicketDetail from './pages/TicketDetail'


// Admin
import AdminDashboard from './admin/Dashboard'
import Agents from './admin/Agents'
import Workflow from './admin/Workflow'
import AdminArchive from './admin/Archive'
// CSS

function App() {
  const location = useLocation();
  const isadmin = 
    location.pathname === '/admin' || 
    location.pathname === '/admin/agents' || 
    location.pathname === '/admin/workflow' || 
    location.pathname === '/admin/archive';

  const isemployee = 
    location.pathname !== '/admin' && 
    location.pathname !== '/admin/agents' && 
    location.pathname !== '/admin/workflow' && 
    location.pathname !== '/admin/archive';
  return(
    <>
    {/* old */}
    {/* <Nav />
    <DateBanner /> */}

    {/* new */}
    {isadmin && <AdminNav/>}
    {isemployee && <Nav />}
    {<DateBanner />}

    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/track" element={<Track />} />
      <Route path="/archive" element={<Archive />} />
    
      <Route path="/ticket/:id" element={<TicketDetail />} />

      {/* admin */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/agents" element={<Agents />} />
      <Route path="/admin/workflow" element={<Workflow />} />
      <Route path="/admin/archive" element={<AdminArchive />} />
    </Routes>
    </>
  )
}

export default App;

