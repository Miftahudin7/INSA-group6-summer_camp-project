const ProgressBar = ({ percentage }) => {
  return (
    <div className="bg-gray-200 rounded-full">
      <div
        style={{ width: `${percentage}%` }}
        className="bg-green-500 h-2 rounded-full"
      ></div>
    </div>
  );
};

export default ProgressBar;
