import React from 'react';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { FaStethoscope, FaEye, FaHeartbeat, FaBrain } from 'react-icons/fa';
import '../styles/UpcomingSchedule.css';

const upcomingData = [
  {
    day: 'On Thursday',
    appointments: [
      { title: 'Health Checkup Complete', time: '10:00 AM', icon: <FaStethoscope /> },
      { title: 'Ophthalmologist', time: '12:00 PM', icon: <FaEye /> },
    ],
  },
  {
    day: 'On Saturday',
    appointments: [
      { title: 'Cardiologist', time: '9:00 AM', icon: <FaHeartbeat /> },
      { title: 'Neurologist', time: '11:30 AM', icon: <FaBrain /> },
    ],
  },
];

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      {upcomingData.map((section, index) => (
        <div key={index} className="schedule-section">
          <h3>{section.day}</h3>
          {section.appointments.map((app, idx) => (
            <SimpleAppointmentCard
              key={idx}
              title={app.title}
              time={app.time}
              icon={app.icon}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
