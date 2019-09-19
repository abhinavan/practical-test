import React from "react";

function TimeCalculator() {
  const date = new Date();
  const hrs = date.getHours();
  let timeOfDay;

  if (hrs >= 0 && hrs < 12) {
    timeOfDay = "Morning";
  } else if (hrs > 12 && hrs < 18) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Evening";
  }

  return (
    <h1>
      Good {timeOfDay} !!! Time of Day {date.getHours() % 12} o' clock
    </h1>
  );
}
export default TimeCalculator;
