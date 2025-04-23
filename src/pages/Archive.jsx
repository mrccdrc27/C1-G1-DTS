import React, { useState, useEffect } from 'react';
import '../styles/archive.css';

function Archive() {

  const [archive_status, setArchiveStatus] = useState("")

  const [tickets, setTickets] = useState([])
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
    }, []);
  return (
    <div className="archive-page">
      <div className="top-archive">
        <div className="archive-title">
         <h3>Archive</h3>
        </div>
        <div className="archive-search">
          <div className="archive-search-cont">
            <input type="text" placeholder="Search by ticket ID or keywords..." />  
            <button className="archive-search-button">Filter</button>
          </div>
         <div className="archive-category">
            <select className="archive-drop-status" name="archive-status" value={archive_status} onChange={(e) => setStatus(e.target.value)}>
              <option value=""disabled>Please select an option</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
            <div className="archive-date">
              <input type="date" name="start-date"/>
              <input type="date" name="end-date"/>
              <button className="archive-date-button">Filter</button>
            </div>
         </div> {/* archive category */}
        </div> {/* archive search */}
      </div> {/* top */}

      <div className="bot-archive">
        <div className="table-container">
              <table className="ticket-table">
                <thead>
                  <tr>
                    <th>Ticket ID</th>
                    <th>Subject</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th>Opened On</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id}>
                      <td className="ticket-id">{ticket.ticket_id}</td>
                      <td className="ticket-subject">{ticket.subject}</td>
                      <td className="ticket-customer">{ticket.customer}</td>
                      <td className={`ticket-status-${ticket.status.replace(/\s+/g, '-').toLowerCase()}`}>
                        {ticket.status}
                      </td>
                      <td className="ticket-opened-on">{ticket.opened_on}</td>
                      <td className="ticket-sla">{ticket.sla}</td>
                      <td>
                        <button className="view-button">View</button>
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
  )
}

export default Archive;