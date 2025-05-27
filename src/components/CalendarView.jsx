import React from 'react';
import '../styles/CalendarView.css';
import { days,appointments,appointmentDetails } from '../data/appointments';


const CalendarView = () => {
  return (
   <div className="calendar-view">
  <h2>October 2021</h2>
  <div className="calendar-grid">
    {days.map((day, idx) => (
      <div key={idx} className="calendar-day-name">{day}</div>
    ))}
    {[...Array(7)].map((_, idx) => {
      const date = 24 + idx; // Days 24 to 30
      const appointment = appointments.find(app => app.day === date);
      return (
        <div key={idx} className="calendar-date-cell">
          <span className="date-number">{date}</span>
          {appointment && (
            <div className="appointment-times">
              {appointment.times.map((time, i) => (
                <div key={i} className="time-slot">{time}</div>
              ))}
            </div>
          )}
        </div>
      );


        })}
      </div>
      <div className="calendar-appointment-cards">
        {appointmentDetails.map((app, index) => (
          <div className="appointment-card" key={index}>
            <h3>{app.title}</h3>
            <p>{app.time}</p>
            <p className="doctor">{app.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
