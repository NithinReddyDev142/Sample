import React from "react";
import "./Day2TimeTable.css"; 

const TimeTable = ({ data }) => {
  return (
    <div className="time-table">
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>9:00 AM - 10:00 AM</th>
            <th>10:00 AM - 11:00 AM</th>
            <th>11:00 AM - 12:00 PM</th>
            <th>1:00 PM - 2:00 PM</th>
            <th>2:00 PM - 3:00 PM</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.day}</td>
              {row.slots.map((slot, i) => (
                <td key={i}>{slot}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;

