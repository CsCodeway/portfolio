import { useEffect, useState } from 'react';

const ProgressBar = ({ progress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentProgress(progress);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-gray-200 rounded-full">
      <div
        className="h-1 bg-[#ff7a57] rounded-full"
        style={{ width: `${currentProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
