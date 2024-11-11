import React from 'react';
import { FaFan, FaLightbulb, FaSnowflake, FaIceCream } from 'react-icons/fa';
import './Card.css';

const iconMapping = {
  fan: <FaFan className="icon-style" />,
  lightbulb: <FaLightbulb className="icon-style" />,
  fridge: <FaIceCream className="icon-style" />,
  ac: <FaSnowflake className="icon-style" />,
};

const Card = ({ title, count, consumption, icon }) => {
  return (
    <div className="card">
      
      <div className="card-info">
        <h3>{title}</h3>
        <h2>{count}</h2>
        <p>Power Consumption</p>
        <h4>{consumption} kW/h</h4>
      </div>
      <div className={`card-icon ${icon}`}>{iconMapping[icon]}</div>
    </div>
  );
};

export default Card;
