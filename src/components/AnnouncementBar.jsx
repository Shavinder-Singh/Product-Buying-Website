import React from "react";
import { useState, useEffect } from "react";

const AnnouncementBar = () => {
  const [time, settime] = useState(24 * 60 * 60);
  const [running, setRunning] = useState(true);
  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      settime((prevTime) => {
        if (prevTime <= 1) {
          setRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    (timer) => clearInterval(timer);
  }, [running]);
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="bg-brand-primary text-primary font-custom text-[12px] flex justify-center gap-2 px-[24px] py-[8px] overflow-hidden text-nowrap">
      <p className="truncate opacity-70">
        Limited OFFER: 30% OFF, Use RABBIT30 at Checkout.
      </p>
      <span className="font-normal">
        {hours} : {minutes} : {seconds}
      </span>
    </div>
  );
};

export default AnnouncementBar;
