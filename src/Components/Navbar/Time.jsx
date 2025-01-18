import React, { useEffect } from 'react'
import { useState } from 'react'
import moment from 'moment'

const Time = () => {
    const [date, setdate] = useState(moment().format('LTS'))
useEffect(() => {
    setInterval(() => {
        setdate(moment().format('LTS'))
    }, 1000)
}, [])




    return (
        <>
            <div className="hidden md:inline-block md:w-48">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">

                    {date}
                </button>
            </div>
        </>

    )
}

export default Time
