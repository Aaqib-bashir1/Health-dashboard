import React from 'react';
import '../styles/AnatomySection.css';
import anatomyImage from '../assets/human.png'; // Use a placeholder if real image isn't available
import { indicators } from '../data/healthStatus';
// const indicators = [
//   { label: 'Healthy Heart', color: '#28a745', top: '15%', left: '50%' },
//   { label: 'Lungs', color: '#dc3545', top: '30%', left: '55%' },
//   { label: 'Teeth', color: '#ffc107', top: '5%', left: '48%' },
//   { label: 'Bone', color: '#17a2b8', top: '70%', left: '50%' },
// ];

const AnatomySection = () => {
  return (
    <div className="anatomy-container">
     
      <div className="anatomy-image-wrapper">
        
        <img src={anatomyImage} alt="Human Anatomy" className="anatomy-img" />
        {indicators.map((indicator, index) => (
          <div
            key={index}
            className="indicator"
            style={{ top: indicator.top, left: indicator.left, borderColor: indicator.color }}
          >
            <span style={{ color: indicator.color }}>{indicator.icon}{indicator.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
