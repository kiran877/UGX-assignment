import React from 'react';
import './PowerConsumption.css';

const PowerConsumption = () => {
  return (
    <div className="power-consumption">
      <h2>Power Consumption</h2>
      <div className="power-consumption-content">
 
        <div className="consumption-chart">
          <div className="chart-percentage">17% used</div>
          <div className="chart-decoration"></div>
        </div>
        <div className="consumption-details">
          <div className="item blue">
            <div className="item-label">Heater</div>
            <div className="item-value">2,095</div>
          </div>
          <div className="item red">
            <div className="item-label">Lights</div>
            <div className="item-value">2,360</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerConsumption;
