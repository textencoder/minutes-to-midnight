import "./App.css";
import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  const [minutes, setMinutes] = useState({
    total: "",
    elapsed: "",
    remaining: "",
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
        remaining: totalMinutesInYear - minutesElapsed,
      });
      setPercentCompleted(
        ((minutesElapsed / totalMinutesInYear) * 100).toFixed(0)
      );
      //setAnimate(true);
      //setTimeout(() => setAnimate(false), 5000);
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero">
      <nav>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            width="30"
          >
            <path d="M11 8H12V7H11M9 10H10V9H11V8H10V7H9V6H10V7H11V6H12V7H13V8H14V7H15V5H16V4H6V5H7V6H8V8H9M10 11H11V10H10M11 12H12V11H11M19 20H3V17H4V16H5V14H6V12H7V10H6V8H5V6H4V5H3V2H19V5H18V6H17V8H16V10H15V12H16V14H17V16H18V17H19M13 10V8H12V9H11V10M16 18V17H15V15H14V13H13V12H12V14H13V16H14V17H8V16H9V14H10V13H11V12H9V13H8V15H7V17H6V18Z" />
          </svg>
          {/* <p className="google-sans-code">progressbar.fyi</p> */}
        </span>

        <div className="google-sans-code minutes-counter">
          <span>
            {minutes.elapsed.toString().length > 3
              ? minutes.elapsed
                  .toString()
                  .split("")
                  .toSpliced(minutes.elapsed.toString().length - 3, 0, ",")
                  .join("")
              : minutes.elapsed}
          </span>
          
          <span>
            {minutes.total.toString().split("").toSpliced(3, 0, ",").join("")}
          </span>
        </div>
      </nav>
      <div className="full-wrapper">
        <ProgressBar progress={percentCompleted} />
      </div>
    </div>
  );
}

export default App;
