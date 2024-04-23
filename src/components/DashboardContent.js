// DashboardContent.js
import React from 'react';

function DashboardContent() {
  return (
    <div className="dashboard-content">
      <h2>Welcome to the Dashboard</h2>
      <p>This is where you can manage your data and settings.</p>
      <div className="stats">
        <div className="stat">
          <h3>Total Users</h3>
          <p>100</p>
        </div>
        <div className="stat">
          <h3>Total Orders</h3>
          <p>500</p>
        </div>
        <div className="stat">
          <h3>Total Revenue</h3>
          <p>$10,000</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardContent;
