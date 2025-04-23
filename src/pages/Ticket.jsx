import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ticket.css';

function Ticket() {

  // select or dropdown
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [date_status, setDate_Status] = useState("");

  // NAVIGATE TO TICKET DETAILS
  const navigate = useNavigate();
  const handleView = (ticketId) => {
    navigate(`/ticket/${ticketId}`); // this should match the route name in app.jsx
  };
  
  // FETCH DATA FROM DUMMY API
  // Step 1: State for tickets -> gpt
  const [tickets, setTickets] = useState([]);

  // Step 2: Fetch data from JSON Server when the component mounts -> gpt
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:3000/tickets');
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []); // useEffect
 
  return (
    <div className="ticket">
      <div className="parent">
        <div className="top">
          <div className="top-title">
            <h3>Tickets</h3>
          </div>
          <div className="top-filter-search">
            <div className="top-cat">
             <select className="drop-priority" name="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="" disabled>Please select an option</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <select className="drop-status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="" disabled>Please select an option</option>
                {/* <option value="pending">Pending</option> */}
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="on-hold">On Hold</option>
              </select>
              <select className="drop-date" name="date_status" value={date_status} onChange={(e) => setDate_Status(e.target.value)}>
                <option value="" disabled>Please select an option</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div> {/*top-cat*/}
            <div className="top-search">
              <input type="text" id="search-id" name="search-ticket" placeholder="Search by ticket ID or keywords..." />
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>

        <div className="bot">
          <div className="table-container">
            <table className="ticket-table">
              <thead>
                <tr>
                  <th>Ticket ID</th>
                  <th>Subject</th>
                  <th>Customer</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Opened On</th>
                  <th>SLA</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Step 3: Dynamically render rows based on fetched tickets -> gpt */} 
                {tickets.map((ticket) => (
                  <tr key={ticket.id}>
                    <td className="ticket-id">{ticket.ticket_id}</td>
                    <td className="ticket-subject">{ticket.subject}</td>
                    <td className="ticket-customer">{ticket.customer}</td>
                    <td className={`priority-${ticket.priority.toLowerCase()}`}>
                      {ticket.priority}
                    </td>
                    <td className={`ticket-status-${ticket.status.replace(/\s+/g, '-').toLowerCase()}`}>
                      {ticket.status}
                    </td>
                    <td className="ticket-opened-on">{ticket.opened_on}</td>
                    <td className="ticket-sla">{ticket.sla}</td>
                    <td>
                      <button className="view-button" onClick={() => handleView(ticket.ticket_id)}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="timestamp">Apr 1, 2025 at 09:23 AM</div>
          <div className="pagination">
            <div className="page-item disabled">&lt;</div>
            <div className="page-item active">1</div>
            <div className="page-item">2</div>
            <div className="page-item">3</div>
            <div className="page-item">&gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
