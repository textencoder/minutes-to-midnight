import "./App.css";
import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  const [minutes, setMinutes] = useState({
    total: "",
    elapsed: ""
  });
  const [percentCompleted, setPercentCompleted] = useState("")
  //const [animate, setAnimate] = useState(false);

  console.log(minutes);

  useEffect(() => {
    const updateCountdown = () => {
      let currentDate = new Date();
      let firstOfYear = new Date("January 1, 2025");
      let twentySix = new Date("January 1, 2026");
      const totalMinutesInYear = Math.floor(
        (twentySix - firstOfYear) / 1000 / 60
      );
      const minutesElapsed =
        totalMinutesInYear - Math.floor((twentySix - currentDate) / 1000 / 60);
      //console.log("dateEquation: ", dateEquation)
      //let dateArray = dateEquation.toString().split("");
      //let minutesWithComma = dateArray.toSpliced(dateArray.length - 3, 0, ",").join("");
      setMinutes({
        total: totalMinutesInYear,
        elapsed: minutesElapsed
      });
      setPercentCompleted(((minutesElapsed / totalMinutesInYear) * 100).toFixed(1))
      //setAnimate(true);
      //setTimeout(() => setAnimate(false), 5000);
    };

    updateCountdown(); // Initial call to set the countdown immediately
    const intervalId = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="full-wrapper">
        <div className="statistics">
          <p className="percent-completed">{percentCompleted}%</p>
          <p className="minutes-counter">{minutes.elapsed}/{minutes.total}</p>
        </div>
        <ProgressBar progress={percentCompleted} />
      </div>
    </>
  );
}

export default App;
