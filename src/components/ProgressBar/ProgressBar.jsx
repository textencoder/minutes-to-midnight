const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar">
        <p className="google-sans-code">{progress}%</p>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
