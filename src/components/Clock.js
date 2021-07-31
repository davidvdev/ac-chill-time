import React, { useEffect } from 'react'

const Clock =(props)=> {

    const updateTime = () => {
        setTimeout(currentTime, 1000)
    }

    const currentTime = () => {
        let time = Date().split(' ')[4]
        let timeArr = time.split(':')
        let timeArrNums = [parseInt(timeArr[0], 10), parseInt(timeArr[1], 10), parseInt(timeArr[2], 10) ]
        updateTime()

        props.getTime(time, timeArrNums)
    }

    const runClock = (hand => {
        const hour = props.currentTime[0]
        const min = props.currentTime[1]
        const sec = props.currentTime[2]

        switch(hand){
            case 'h':
                const hourDegrees = ((hour / 12 ) * 360) + ((min / 60) * 30) + 90;
                return `rotate(${hourDegrees}deg)`
            case 'm':
                const minDegrees = ((min / 60) * 360) + ((sec / 60) * 6) + 90;
                return `rotate(${minDegrees}deg)`
            case 's':
                const secDegrees = ((sec / 60 ) * 360) + 90;
                return `rotate(${secDegrees}deg)`
            default:
                break;
        }

    })

    useEffect(() => {currentTime()},[])
    
    const loaded = () => {
        return (<>
            {/* <h1>The time is: </h1>
            <h1>{props.currentTime[0]}:{props.currentTime[1]}:{props.currentTime[2]}</h1> */}
            <div class="clock">
                <div class="clock-face">
                    <div style={{transform: runClock('h')}} className="hand hour-hand"></div>
                    <div style={{transform: runClock('m')}} className="hand min-hand"></div>
                    {/* <div style={{transform: runClock('s')}} className="hand second-hand"></div> */}
                </div>
            </div>
        </>)
    }

    const loading = () => {return <h1>loading...</h1>}

    return props.currentTime ? loaded() : loading() ;
}

export default Clock