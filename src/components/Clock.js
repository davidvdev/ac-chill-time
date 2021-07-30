import React, { useState, useEffect } from 'react'

const Clock =(props)=> {

    // set our states to hold the different formats of the current time
    // held in state so the clock rerenders in a timely fashion
    // timeArr is set to an empty array so the page doesn't throw an error on first load
    const [time, setTime] = useState(null)
    const [timeArr, setTimeArr] = useState(['0','0','0'])

    // this function controls how fast the clock runs
    // 1000 = 1000 milliseconds or 1 second
    // every 1 second, run the currentTime function
    const updateTime = () => {
        setTimeout(currentTime, 1000)
    }

    // pulls the current time from the browser and formats it for our purpose.
    // if other time/date formats are needed, remove .split and change accordingly
    // time is the current date split into an array returning the portion with the time sans date info
    // timeArr is the time string split into ['hour','minute','second']
    // important, both time and timeArr hold strings, not numbers. 
    // updateTime() calls that function to start the timer until the next update (1 second)
    const currentTime = () => {
        let time = Date().split(' ')[4]
        let timeArr = time.split(':')
        let timeArrNums = [parseInt(timeArr[0], 10), parseInt(timeArr[1], 10), parseInt(timeArr[2], 10) ]
        updateTime()
        // console.log(time)
        // console.log(timeArr)
        // console.log(timeArrNums)
        setTime(time)
        setTimeArr(timeArrNums)
    }

    const conditionalStyle = () => {
        if(timeArr[2]%2 === 0){
            return 'yellow'
        } else {
            return 'white'
        }
    }

    const hourlyMusic = () => {
        switch(timeArr[1]){
            case 49:
                return 'https://vgmsite.com/soundtracks/animal-crossing-gc-rip/ylidljqw/57%2012AM.mp3'
            case 50:
                return 'https://vgmsite.com/soundtracks/animal-crossing-gc-rip/lnudvooq/63%206AM.mp3'
        }
    }

    useEffect(() => {currentTime()},[])

    return (<>
    <audio src={hourlyMusic()} autoPlay controls/>
        <h1>The time is: </h1>
            <h1>{time}</h1>
            <h1>{timeArr[0]}</h1>
            <h1>{timeArr[1]}</h1>
            <h1 style={{backgroundColor: conditionalStyle()}}>{timeArr[2]}</h1>
    </>)
}

export default Clock