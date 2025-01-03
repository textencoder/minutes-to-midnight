import React, { useState, useEffect } from 'react';

const Minutes = () => {
  const [minutesWithComma, setMinutesWithComma] = useState('');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      let currentDate = new Date();
      let twentySix = new Date("January 1, 2026");
      let dateEquation = Math.floor(((twentySix - currentDate) / 1000) / 60);
      let dateArray = dateEquation.toString().split('');
      let minutesWithComma = dateArray.slice(0, 3).join('') + "," + dateArray.slice(3, 6).join('');
      setMinutesWithComma(minutesWithComma);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 5000);
    };

    updateCountdown(); // Initial call to set the countdown immediately
    const intervalId = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div id="time-container" className={animate ? 'backToBlue' : ''}>
      <h1>{minutesWithComma}</h1>
    </div>
  );
};

export default Minutes;