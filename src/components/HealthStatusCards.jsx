import React from 'react';
import '../styles/HealthStatusCards.css';
import { healthCards } from '../data/healthStatus';
// const healthCards = [
//   {
//     title: 'Lungs',
//     status: 'Issue Detected',
//     color: '#dc3545',
//     date: 'Checked on: Oct 20, 2021',
//   },
//   {
//     title: 'Teeth',
//     status: 'Healthy',
//     color: '#28a745',
//     date: 'Checked on: Oct 15, 2021',
//   },
//   {
//     title: 'Bone',
//     status: 'Needs Attention',
//     color: '#ffc107',
//     date: 'Checked on: Oct 10, 2021',
//   },
// ];

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
