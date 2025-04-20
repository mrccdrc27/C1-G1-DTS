// import { Routes, Route } from 'react-router-dom'
import { Routes, Route, useLocation } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import DateBanner from './components/DateBanner'

// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Ticket from './pages/Ticket'
import Track from './pages/Track'
import Archive from './pages/Archive'
import TicketDetail from './pages/TicketDetail'

// CSS

function App() {
  const location = useLocation();
  const hideHeader =location.pathname === '/';
  return(
    <>
    {/* old */}
    {/* <Nav />
    <DateBanner /> */}

    {/* new */}
    {!hideHeader && <Nav />}
    {!hideHeader && <DateBanner />}

    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/track" element={<Track />} />
      <Route path="/archive" element={<Archive />} />

      <Route path="/ticket/:id" element={<TicketDetail />} />
    </Routes>
    
    </>
  )
}

export default App;

