import "./bottombar.css";

export default function BottomBar() {
  return (
    <div id="bottom">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="48px"
          fill="dodgerblue"
        >
          <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>
      </button>

      <div id="player">
        <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
        
          viewBox="0 -960 960 960"
          width="36px"
          fill="dodgerblue"
        >
          <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" />
        </svg>
        </button>

        <div id="waveform">

        </div>

        <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          
          viewBox="0 -960 960 960"
          width="36px"
          fill="dodgerblue"
        >
          <path d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z" />
        </svg>
        </button>
      </div>
      

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="48px"
          fill="dodgerblue"
        >
          <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" />
        </svg>
      </button>
    </div>
  );
}
