import "./App.css";
import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  const [minutes, setMinutes] = useState({
    total: "",
    elapsed: "",
  });
  const [percentCompleted, setPercentCompleted] = useState("");
  //const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      let currentDate = new Date();
      let firstOfCurrentYear = new Date(
        `January 1, ${currentDate.getFullYear()}`
      );
      let firstOfNextYear = new Date(
        `January 1, ${currentDate.getFullYear() + 1}`
      );
      const totalMinutesInYear = Math.floor(
        (firstOfNextYear - firstOfCurrentYear) / 1000 / 60
      );
      const minutesElapsed =
        totalMinutesInYear -
        Math.floor((firstOfNextYear - currentDate) / 1000 / 60);
      setMinutes({
        total: totalMinutesInYear,
        elapsed: minutesElapsed,
      });
      setPercentCompleted(
        ((minutesElapsed / totalMinutesInYear) * 100).toFixed(1)
      );
      //setAnimate(true);
      //setTimeout(() => setAnimate(false), 5000);
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="full-wrapper">
        <div className="statistics">
          <p className="percent-completed">{percentCompleted}%</p>
          <p className="minutes-counter">
            {minutes.elapsed.toString().length > 3
              ? minutes.elapsed
                  .toString()
                  .split("")
                  .toSpliced(minutes.elapsed.toString().length - 3, 0, ",")
                  .join("")
              : minutes.elapsed}
            /{minutes.total.toString().split("").toSpliced(3, 0, ",").join("")}
          </p>
        </div>
        <ProgressBar progress={percentCompleted} />
      </div>
    </>
  );
}

export default App;
