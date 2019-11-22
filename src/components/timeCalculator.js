import React from "react";

function TimeCalculator() {
  const date = new Date();
  const hrs = date.getHours();
  const styles = {
    fontSize: 100,
    fontFamily: "Georgia"
  };
  let timeOfDay;

  if (hrs >= 0 && hrs < 12) {
    timeOfDay = "Morning";
    styles.color = "#66ccff";
  } else if (hrs > 12 && hrs < 18) {
    timeOfDay = "Afternoon";
    styles.color = "#ff0000";
  } else {
    timeOfDay = "Evening";
    styles.color = "#66ff33";
  }

  return (
    <h1 style={styles}>
      Good {timeOfDay} !!! Time of Day {date.getHours() % 12} o' clock
    </h1>
  );
}
export default TimeCalculator;
