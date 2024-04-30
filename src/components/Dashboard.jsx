import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>CV Actions</h2>
        <ul>
          <li><Link to="">View CVs</Link></li>
          <li><Link to="">Create CV</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
