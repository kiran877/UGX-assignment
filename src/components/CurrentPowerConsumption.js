import React from 'react';
import './CurrentPowerConsumption.css';

const CurrentPowerConsumption = () => {
  return (
    <div className="current-power-consumption">
      <h2>Current Power Consumption (kW/h)</h2>
      <div className="power-value">1635.00</div>
      <div className="power-bars">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="bar" style={{ height: `${Math.random() * 100 + 50}px` }}></div>
        ))}
      </div>
    </div>
  );
};

export default CurrentPowerConsumption;
