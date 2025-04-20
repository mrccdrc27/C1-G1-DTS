import '../styles/ticket.css'

function Ticket() {
  return (
    <div className="ticket">
      <div className="parent"> 
        <div className="top">
          <div className="top-title">
            <h3>Tickets</h3>
          </div>
          <div className="top-filter-search">
            <div className="top-cat">
              <select className="drop-priority" name="priority">
                <option value="" disabled selected>Please select an option</option>
                <option value="Low">Low</option> {/* hardcoded */}
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              <select className="drop-status" name="status">
                <option value="" disabled selected>Please select an option</option>
                <option value="pending">Pending</option> {/* hardcoded */}
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="on-hold">On Hold</option>
              </select>
              
              <select className="drop-date" name="status">
                <option value="" disabled selected>Please select an option</option>
                <option value="newest">Newest</option> {/* hardcoded */}
                <option value="oldest">Oldest</option> 
              </select>

            </div> {/* categories */}
            <div className="top-search">
              <input type="text" id="search-id" name="search-ticket" placeholder="Seacrh by ticket ID or keywords..."/>
              <button className="search-button">Search</button>
            </div> {/* search bar with button */}
          </div>

        </div> {/* top content */}

        <div className="bot">
          <div className="table-container">
            <table className='ticket-table'>
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
              <tr>
                <td class="ticket-id">TK-100302</td>
                <td class="ticket-subject">Account Login Issue</td>
                <td>John Doe</td>
                <td class="priority-low">Low</td>
                <td class="open-status">Open</td>
                <td>April 6, 2025</td>
                <td>72 hours</td>
                <td><button class="view-button">View</button></td>
            </tr>
            <tr>
                <td class="ticket-id">TK-100302</td>
                <td class="ticket-subject">Payment Gateway Failure</td>
                <td>Alice Smith</td>
                <td class="priority-medium">Medium</td>
                <td class="progress-status">In Progress</td>
                <td>April 6, 2025</td>
                <td>24 hours</td>
                <td><button class="view-button">View</button></td>
            </tr>
            <tr>
                <td class="ticket-id">TK-100302</td>
                <td class="ticket-subject">Missing Order Confirmation</td>
                <td>Bob Johnson</td>
                <td class="priority-critical">Critical</td>
                <td class="open-status">Open</td>
                <td>April 6, 2025</td>
                <td>24 hours</td>
                <td><button class="view-button">View</button></td>
            </tr>
            <tr>
                <td class="ticket-id">TK-100302</td>
                <td class="ticket-subject">Product Return Request</td>
                <td>Carol White</td>
                <td class="priority-low">Low</td>
                <td class="open-status">Open</td>
                <td>April 6, 2025</td>
                <td>24 hours</td>
                <td><button class="view-button">View</button></td>
            </tr>
            <tr>
                <td class="ticket-id">TK-100302</td>
                <td class="ticket-subject">Server Down</td>
                <td>David Lee</td>
                <td class="priority-critical">Critical</td>
                <td class="progress-status">In Progress</td>
                <td>April 6, 2025</td>
                <td>72 hours</td>
                <td><button class="view-button">View</button></td>
            </tr>
            <tr>
                <td class="ticket-id">TK-100302</td>
                <td class="ticket-subject">Payment Gateway Failure</td>
                <td>Emily Davis</td>
                <td class="priority-medium">Medium</td>
                <td class="open-status">Open</td>
                <td>April 6, 2025</td>
                <td>72 hours</td>
                <td><button class="view-button">View</button></td>
            </tr>
            <tr>
                <td class="ticket-id">TK-100302</td>
                <td class="ticket-subject">Feature Request for Dashboard</td>
                <td>Michael Brown</td>
                <td class="priority-low">Low</td>
                <td class="open-status">Open</td>
                <td>April 6, 2025</td>
                <td>72 hours</td>
                <td><button class="view-button">View</button></td>
            </tr>
            <tr>
                <td class="ticket-id">TK-100302</td>
                <td class="ticket-subject">Payment Gateway Failure</td>
                <td>Sarah Williams</td>
                <td class="priority-low">Low</td>
                <td class="open-status">Open</td>
                <td>April 6, 2025</td>
                <td>24 hours</td>
                <td><button class="view-button">View</button></td>
            </tr>
              </tbody>
            </table>
          </div>

            <div class="timestamp">
              Apr 1, 2025 at 09:23 AM {/* hardcoded */}
            </div>
            <div class="pagination">
              <div class="page-item disabled">&lt;</div>  {/* hardcoded */}
              <div class="page-item active">1</div>
              <div class="page-item">2</div>
              <div class="page-item">3</div>
              <div class="page-item">&gt;</div>
            </div>
        </div> {/* bot content */}

      </div>
    </div>
  );
}

export default Ticket;
