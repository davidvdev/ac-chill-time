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

    useEffect(() => {currentTime()},[])
    
    const loaded = () => {
        return (<>
            <h1>The time is: </h1>
                <h1>{props.currentTime[0]}:{props.currentTime[1]}:{props.currentTime[2]}</h1>
        </>)
    }

    const loading = () => {return <h1>loading...</h1>}

    return props.currentTime ? loaded() : loading() ;
}

export default Clock