import { useEffect, useState } from "react";
import Logo from "./logo";
import "./topbar.css";

export default function TopBar() {
    const [currentTime, setCurrentTime] = useState('')

    useEffect(() => {
        const timeChange = () => {
            let time = new Date().toLocaleTimeString();
            setCurrentTime(time);
        }

        timeChange();
        const intervalId = setInterval(timeChange, 1000);

        return () => clearInterval(intervalId);
    }, [])

  return (
    <div>
      <a href="https://www.github.com/textencoder" target="_blank">
        <Logo className="logo" alt="minutesXM" />
      </a>

      <p>{currentTime}</p>
    </div>
  );
}
