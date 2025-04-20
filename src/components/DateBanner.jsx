import { useState, useEffect } from 'react';
import '../styles/datebanner.css'

function DateBanner1 () {
  return (
    <div className="date-banner">
      TUESDAY, APRIL 12 2025, 03:09:50 PM
    </div>
  )
}

function DateBanner() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the date every second

    // Cleanup the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Format the current date and time
  const formattedDate = currentDate.toLocaleString('en-US', {
    weekday: 'long', // e.g. "Tuesday"
    year: 'numeric', // e.g. "2025"
    month: 'long', // e.g. "April"
    day: 'numeric', // e.g. "12"
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true, // 12-hour format
  });

  return (
    <div className="date-banner">
      {formattedDate}
    </div>
  );
}

export default DateBanner;