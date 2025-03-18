import TomNook from "../../../public/TomNookSentMe_106bpm.mp3";
import { useRef, useState, useEffect } from "react";

const AudioBars = () => {
  const barsRef = useRef([]);

  useEffect(() => {
    // Iterate over the bars (using the ref array)
    barsRef.current.forEach(bar => {
      // Generate random animation delay and duration
      const randomDelay = Math.random() * 2; // Delay between 0 and 2 seconds
      const randomDuration = Math.random() * 1 + 1; // Duration between 1 and 2 seconds

      // Apply random styles
      bar.style.animationDelay = `${randomDelay}s`;
      bar.style.animationDuration = `${randomDuration}s`;
    });
  }, []);

  return (
<svg className="audiogram col" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 200">
      <defs>
        <linearGradient id="audiogram-background" x1="0.5" y1="0" x2="0.5" y2="1" gradientTransform="rotate(-25)">
          <stop offset="0%" stopColor="deepskyblue" />
          <stop offset="100%" stopColor="dodgerblue" />
        </linearGradient>
      </defs>
      {[...Array(50)].map((_, index) => {
        const x = (index + 1) * 40;
        const height = Math.random() * 100 + 150; // Random height between 50 and 150

        const y = (200 / 2) - (height / 2);
        
        return (
          <rect
            key={index}
            className="audio-bar"
            fill="url(#audiogram-background)"
            height={height}
            x={x}
            y={y} // Adjust the y position to fit within the viewBox
            rx="5"
            ry="5"
            ref={(el) => barsRef.current[index] = el} // Assign the ref to each rect element
          />
        );
      })}
    </svg>
  );
};

export default function Player() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div id="player">
      <button title="Play/Pause" onClick={togglePlayPause}>
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            
          >
            <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            
          
          >
            <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
          </svg>
        )}
      </button>

      <div id="waveform">
        <audio ref={audioRef} loop>
          <source src={TomNook} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

      {
        isPlaying && <AudioBars />
      }
        
      </div>

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="30px"
        >
          <defs>
        <linearGradient id="MyGradient" x1="0.5" y1="0" x2="0.5" y2="1" gradientTransform="rotate(-25)">
          <stop offset="0%" stopColor="deepskyblue" />
          <stop offset="100%" stopColor="dodgerblue" />
        </linearGradient>
      </defs>
          <path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z" />
        </svg>
      </button>
    </div>
  );
}
