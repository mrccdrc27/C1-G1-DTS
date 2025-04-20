import '../styles/dashboard.css';
import img_banner from '../assets/images/dts.jpg';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">Welcome, User Name</h1>
        </div>
      </div>
      
      <div className="parent">
        <div className="div1">
            <div className="container">
              <h2 className="dashboard-title">Dashboard</h2>
            </div>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">XX</div>
            <div className="stat-underline open-underline"></div>
            <div className="stat-label">Open</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">XX</div>
            <div className="stat-underline hold-underline"></div>
            <div className="stat-label">On Hold</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">XX</div>
            <div className="stat-underline approved-underline"></div>
            <div className="stat-label">Approved</div>

          </div><div className="stat-card">
            <div className="stat-number">XX</div>
            <div className="stat-underline rejected-underline"></div>
            <div className="stat-label">Rejected</div>
          </div>
        </div>  {/* cards section */}
        </div>
        
        <div className="div2">
          <div className="tickets-section">
          <h3 className="dashboard-title">Upcoming Tickets</h3>
          <table className="table-tickets">
            <tbody>
              <tr>
                <td>mm/dd/yy</td>
                <td>Tix-002-232-233</td>
                <td>
                  <span className="avatar"></span>
                  First Name, Last Name
                </td>
                <td>Status</td>
                <td className="due-date">6 days</td>
              </tr>
              
              <tr>
                <td>mm/dd/yy</td>
                <td>Tix-002-232-233</td>
                <td>
                  <span className="avatar"></span>
                  First Name, Last Name
                </td>
                <td>Status</td>
                <td className="due-date">6 days</td>
              </tr>

              <tr>
                <td>mm/dd/yy</td>
                <td>Tix-002-232-233</td>
                <td>
                  <span className="avatar"></span>
                  First Name, Last Name
                </td>
                <td>Status</td>
                <td className="due-date">6 days</td>
              </tr>

            </tbody>
            <tfoot>
              <tr>
                <td colSpan={5}>
                <div class="pagination">
                  <a href="#" class="page-button">&lt; Prev</a>
                  <div class="page-number">1</div>
                  <a href="#" class="page-button">Next &gt;</a>
                  <span class="page-count">page 1 of 10</span>
                </div>
                </td>
              </tr>
            </tfoot>
          </table>

          </div>  {/* tickets section */}
        </div>

        <div className="div3">
          <div className="updates-section">
            <h3 className="dashboard-title">Recent Updates</h3>
            <div className="updates-card">

              <div class="update-item">
                  <div class="update-info">
                      <div class="update-date">mm/dd/yy</div>
                      <div class="update-title">Laptop Request: to create...</div>
                      <div class="update-id">TIX-001-232-123</div>
                  </div>
                  <div class="status-indicator status-pending"></div>
              </div>
      
              <div class="update-item">
                  <div class="update-info">
                      <div class="update-date">mm/dd/yy</div>
                      <div class="update-title">Utilities Paid Month of January...</div>
                      <div class="update-id">TIX-093-343-234</div>
                  </div>
                  <div class="status-indicator status-open"></div>
              </div>
                    
              <div class="update-item">
                  <div class="update-info">
                      <div class="update-date">mm/dd/yy</div>
                      <div class="update-title">Quarterly Report 2019 - 2020...</div>
                      <div class="update-id">TIX-001-234-566</div>
                  </div>
                  <div class="status-indicator status-approved"></div>
              </div>
                  
              <div class="update-item">
                  <div class="update-info">
                      <div class="update-date">mm/dd/yy</div>
                      <div class="update-title">Budget Request: to create...</div>
                      <div class="update-id">TIX-002-334-123</div>
                  </div>
                  <div class="status-indicator status-deny"></div>
              </div>
                  
              <div class="update-item">
                  <div class="update-info">
                      <div class="update-date">mm/dd/yy</div>
                      <div class="update-title">Utilities Paid Month of January...</div>
                      <div class="update-id">TIX-093-343-234</div>
                  </div>
                  <div class="status-indicator status-open"></div>
              </div>
              
            </div>
          </div> {/* update section */}
        </div>
      </div>

    </div>
    // end of dashboard div
  );
} 

export default Dashboard;
