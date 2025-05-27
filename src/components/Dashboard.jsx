import React from 'react';
import HealthStatusCards from './HealthStatusCards';
import AnatomySection from './Anatomysection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import '../styles/Dashboard.css';


const Dashboard = () => {
  return (
   
    <div className="dashboard-main">
    
      <div className='dashboard-header'>
      
        <h2 className="topsection-title">Dashboard</h2>
      <div className="top-section">
         
        <AnatomySection />
        <HealthStatusCards />
      </div>
      <ActivityFeed />
      </div>
      <div className="bottom-section">
        <div className="calendar-section">
          <CalendarView />
          <UpcomingSchedule />
        </div>
       
      </div>
       
    </div>
    
    
  );
};

export default Dashboard;
