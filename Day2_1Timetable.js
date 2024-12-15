
import React from "react";
import TimeTable from "./Day2TimeTable";

const Apps = () => {
  const tableData = [
    {
      day: "Monday",
      slots: ["Math", "Science", "History", "Art", "Sports"],
    },
    {
      day: "Tuesday",
      slots: ["Physics", "Chemistry", "Math", "Music", "Biology"],
    },
    {
      day: "Wednesday",
      slots: ["Geography", "English", "Math", "Art", "Sports"],
    },
    {
      day: "Thursday",
      slots: ["Science", "Biology", "Physics", "Music", "PE"],
    },
    {
      day: "Friday",
      slots: ["History", "Math", "Chemistry", "Sports", "Music"],
    },
  ];

  return (
    <div className="Apps">
      <h1>Weekly Time Table</h1>
      <TimeTable data={tableData} />
    </div>
  );
};

export default Apps;
