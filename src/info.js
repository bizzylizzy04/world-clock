import React, { useState, useEffect } from 'react';
import './App.css';

export default function Info() {
    let date = new Date(Date.now());
    const [timeZone, setTimeZone] = useState();
    const [DayOfYear,setDayOfYear] = useState('0');
    const [DayOfWeek, setDayOfWeek] = useState('0');
    const [WeekNum, setWeekNum] = useState('0');
    // const [expandStyle, setExpandStyle] = useState("body-expand");
    // const [fontStyle, setfontStyle] = useState("fade-style");

    useEffect(() => {
        fetch('https://freegeoip.app/json/')
            .then((response) => response.json())
            .then((data) => {
                setTimeZone(data.time_zone)
                console.log(data)
            }).catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch("http://worldtimeapi.org/api/ip")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setWeekNum(data.week_number);
                setDayOfYear(data.day_of_year);
                setDayOfWeek(data.day_of_week);
            })
    }, [])

    return (
        <div className="content-wrap slide-up">
            <div className="content-info">
                <div className="left-panel">
                    <div className="timezone-wrap">
                        <h4>Current Timezone</h4>
                        <h2>{timeZone}</h2>
                    </div>
                    <div className="day-of-year">
                        <h4>Day of the Year</h4>
                        <h2>{DayOfYear}</h2>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='right-panel'>
                    <div className="day-of-week">
                        <h4>Day of the Week</h4>
                        <h2>{DayOfWeek}</h2>
                    </div>
                    <div className="week-number">
                        <h4>Week Number</h4>
                        <h2>{WeekNum}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}