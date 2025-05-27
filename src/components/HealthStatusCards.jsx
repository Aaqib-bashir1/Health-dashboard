import React from 'react';
import '../styles/HealthStatusCards.css';
import { healthCards } from '../data/healthStatus';


const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthCards.map((card, index) => (
        <div key={index} className="health-card">
          <h3>{card.icon} {card.title} </h3>
          <p className="status" style={{ color: card.color }}>{card.status}</p>
          <p className="date">{card.date}</p>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
