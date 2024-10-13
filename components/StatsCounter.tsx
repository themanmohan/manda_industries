"use client"
import { useState, useEffect } from 'react';

const StatsCounter = ({ finalCount, label }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const time = 1000; // Time in milliseconds
    const interval = 3; // Interval time
    const step = Math.floor((finalCount * interval) / time);

    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= finalCount) {
          clearInterval(timer);
          return finalCount;
        }
        return prevCounter + step;
      });
    }, interval);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [finalCount]);

  return (
    <div>
      <p className="text-4xl font-white font-bold text-center">{counter}</p>
      <p className='leading-7 font-krona text-slate-gray'>{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
      <StatsCounter finalCount={400} label="Total Consumer" />
      <StatsCounter finalCount={940} label="Subscribers" />
      <StatsCounter finalCount={1102} label="Likes" />
    </div>
  );
};

export default Stats;
