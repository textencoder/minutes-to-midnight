import { useState, useEffect } from "react";

export default function Alert() {
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    const displayAlert = () => {
      setAnimate(true);
      setVisible(true);
      setTimeout(() => {
        setAnimate(false);
        setVisible(false);
      }, 5000);
    };

    displayAlert(); // Initial call to set the countdown immediately
    const intervalId = setInterval(displayAlert, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return <div id="alert" className={animate ? 'blinker' : ''} style={{ visibility: visible ? 'visible' : 'hidden' }}>-1 minute</div>;
}
