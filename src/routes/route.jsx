import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Ticket from '../pages/Ticket';
import Track from '../pages/Track';
import Archive from '../pages/Archive';
import TicketDetail from '../pages/TicketDetail';


// Optional for auth
// import ProtectedRoute from './routes/ProtectedRoute';

const routes = [
  {path: '/', element: <Login />,},
  {path: '/dashboard', element: <Dashboard />,},
  {path: '/ticket', element: <Ticket />,},
  {path: '/track', element: <Track />,},
  {path: '/archive', element: <Archive />,},

  {path: '/ticket/:id', element: <TicketDetail />,},
]

const router = createBrowserRouter(routes);

export default router;