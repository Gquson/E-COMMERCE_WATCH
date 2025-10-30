import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const now = new Date();
    const difference = tomorrow.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true,
      };
    }
    return {
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      expired: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="text-center">
      <p className="text-lg mb-4 font-light tracking-wider text-yellow-200">
        FLASH OFFER ENDS IN
      </p>
      <div className="flex justify-center space-x-4">
        {["Hours", "Minutes", "Seconds"].map((label, index) => (
          <div key={label} className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-20">
              <div className="text-3xl md:text-4xl font-bold font-mono text-yellow-300">
                {formatTime(timeLeft[["hours", "minutes", "seconds"][index]])}
              </div>
            </div>
            <div className="text-sm mt-2 text-yellow-200">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
