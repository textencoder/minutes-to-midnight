const ProgressBar = ({progress}) => {
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-bar">
        <div className="progress" style={{width: `${progress}%`}}>
          <p className="google-sans-code">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
