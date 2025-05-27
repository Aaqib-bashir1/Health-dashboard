import React from 'react';
import '../styles/ActivityFeed.css';

const activityData = [
  { day: 'Mon', height: 40 },
  { day: 'Tue', height: 70 },
  { day: 'Wed', height: 55 },
  { day: 'Thu', height: 80 },
  { day: 'Fri', height: 45 },
  { day: 'Sat', height: 60 },
  { day: 'Sun', height: 30 },
];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2>Activity</h2>
        <p>3 appointments this week</p>
      </div>
      <div className="activity-chart">
        {activityData.map((item, index) => (
          <div key={index} className="bar-container">
            <div
              className="bar"
              style={{ height: `${item.height}px` }}
              title={`${item.day}: ${item.height}px`}
            ></div>
            <span>{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
