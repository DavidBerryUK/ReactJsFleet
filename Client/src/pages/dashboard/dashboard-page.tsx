import { Link }                       from 'react-router-dom';
import React                          from 'react';
import RouteConstants                 from '../../routing/RouteConstants';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <nav>
        <Link to={RouteConstants.Login}>Login</Link>
        <Link to={RouteConstants.FleetList}>Fleet List</Link>
      </nav>
    </div>
  );
};

export default DashboardPage;
