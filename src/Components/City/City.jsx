import React, { useEffect, useState } from 'react';
import "./city.css";
import moment from 'moment';

const City = (props) => {
    const [momentTime, setMomentTime] = useState(moment().format('LT'));
    const [month, setMonth] = useState(moment().format('llll'))
    const [date, setDate] = useState(momentTime);
    useEffect(() => {
        let split = month.slice(0, 11)
        console.log(split)
        setMonth(split)
    }, [])

    useEffect(() => {

        const interval = setInterval(() => {
            const newTime = moment().format('LT'); // Get the latest time
            setMomentTime(newTime);
        }, 60000);
        setDate(momentTime);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let spliting = momentTime.slice(0, 5)
        setDate(spliting);
    }, [momentTime]);

    return (
        <div href="#" className="flex flex-col items-center justify-center w-full py-5 sm:max-w-sm sm:py-5 sm:px-20 sm:h-96 bg-[#444444] rounded-xl box-shadow text-center ">
            <h5 className="mb-2 text-[36px] font-extrabold tracking-tight ">{props.cities}</h5>
            <h5 className="mb-2 text-[96px] font-bold tracking-tight ">{props.Dates ||date}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{props.Months || month}</p>
        </div>
    );
};

export default City;
