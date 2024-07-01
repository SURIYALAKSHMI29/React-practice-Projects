import React, {useState, useEffect} from 'react';

function DigitalClock() {
    const [time,setTime] = useState(new Date());
    const day = time.getDay();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)} ${ampm}`;
    }

    function formatDay(){
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayName = daysOfWeek[time.getDay()];
        const day = time.getDate();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = months[time.getMonth()];

        return `${dayName}, ${padTime(day)} ${month}`;
    }

    function padTime(t){
        return( t<10? "0" : "")+t;
    }

    return(
        <div className='container'>
            <div className='clock'>{formatTime()}</div>
            <div className='date'>{formatDay()}</div>
        </div>
    );
}

export default DigitalClock
