import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

export default function PeriodTracker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [periodDates, setPeriodDates] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const logPeriod = () => {
    setPeriodDates([...periodDates, selectedDate]);
  };

  // Get all months of the year (January to December)
  const months = Array.from({ length: 12 }, (_, index) => new Date(2025, index, 1)); // Starting from 2025

  return (
    <div className="container">
      <h1 className="header">Period Tracker</h1>
      <div className="calendar-container">
        <div className="calendar-grid">
          {months.map((month, index) => (
            <div key={index} className="month">
              <h2 className="month-name">{format(month, "MMMM yyyy")}</h2>
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                minDate={month}
                maxDate={new Date(month.getFullYear(), month.getMonth() + 1, 0)}
                tileClassName="month-tile"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="date-display">Selected Date: {format(selectedDate, "PPP")}</p>
      <button className="btn" onClick={logPeriod}>
        Log Period
      </button>
      <div className="logged-periods">
        <h2>Logged Periods:</h2>
        <ul>
          {periodDates.map((date, index) => (
            <li key={index}>{format(date, "PPP")}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

