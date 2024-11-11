import React from 'react';

import TopNavBar from './TopNavBar';
import Card from './Card';
import Chart from './Chart';
import PowerConsumption from './PowerConsumption';
import CurrentPowerConsumption from './CurrentPowerConsumption';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
     
      <div className="main-content">
        <TopNavBar />
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div className="dashboard-content">
            <div className="card-grid">
              <Card title="Fans" count={27} consumption={270} icon="fan" />
              <Card title="Lights" count={65} consumption={876} icon="lightbulb" />
              <Card title="Refrigerator" count={4} consumption={0} icon="fridge" />
              <Card title="Air Condition" count={852} consumption={65} icon="ac" />
            </div>

            <div className="chart-section">
              <Chart />
            </div>

            <div className="cards-container">
              <div className="power-consumption">
                <PowerConsumption />
              </div>
              <div className="current-power-consumption">
                <CurrentPowerConsumption />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
