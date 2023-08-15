// import React, { useState, useEffect } from "react";
// import GaugeChart from "react-gauge-chart";

// const Speedometer = () => {
//   const [speed, setSpeed] = useState(0);
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const randomSpeed = Math.random() * 100; // Simulate a random speed value
//       setSpeed(randomSpeed);

//       setTime((prevTime) => prevTime + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <GaugeChart
//         id="speedometer"
//         nrOfLevels={3}
//         percent={speed / 100}
//         arcsLength={[0.3, 0.5, 0.2]}
//         colors={["#ff0000", "#ffa500", "#00ff00"]}
//         textColor="#000"
//         needleColor="#333"
//         needleBaseColor="#333"
//         hideText
//       />
//       <div style={{ textAlign: "center", marginTop: "10px" }}>
//         <p className="text-dark">Time: {time} seconds</p>
//       </div>
//     </div>
//   );
// };

// export default Speedometer;
