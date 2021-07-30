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
        switch(timeArr[0]){
            case 0: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/ylidljqw/57%2012AM.mp3` //12AM
            case 1: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/okeaglbw/58%201AM.mp3` //1AM
            case 2: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/cjenocyk/59%202AM.mp3` //2AM
            case 3: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/fuufxfdm/60%203AM.mp3` //3AM
            case 4: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/fgzmwhir/61%204AM.mp3` //4AM
            case 5: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/covridlr/62%205AM.mp3` //5AM
            case 6: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/lnudvooq/63%206AM.mp3` //6AM
            case 7: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/epeiucnl/64%207AM.mp3` //7AM
            case 8: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/oycoafpr/65%208AM.mp3` //8AM
            case 9: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/nnzvlwzu/66%209AM.mp3` //9AM
            case 10: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/wdkwshgl/67%2010AM.mp3` //10AM
            case 11: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/dxfktyaa/68%2011AM.mp3` //11AM
            case 12: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/erkgvhgi/69%2012PM.mp3` //12PM
            case 13: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/vkdqutcz/70%201PM.mp3` //1PM
            case 14: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/rhxneszf/71%202PM.mp3` //2PM
            case 15: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/lvamjoma/72%203PM.mp3` //3PM
            case 16: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/svaplsve/73%204PM.mp3` //4PM
            case 17: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/ganqlufi/74%205PM.mp3` //5PM
            case 18: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/jlpodkzo/75%206PM.mp3` //6PM
            case 19: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/azzmbawn/76%207PM.mp3` //7PM
            case 20: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/xszkmlbp/77%208PM.mp3` //8PM
            case 21: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/xjzxouqy/78%209PM.mp3` //9PM
            case 22: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/zhcddudp/79%2010PM.mp3` //10PM
            case 23: return `https://vgmsite.com/soundtracks/animal-crossing-gc-rip/nxlyyemi/80%2011PM.mp3` //11PM
        }
    }

    useEffect(() => {currentTime()},[])

    return (<>
    <audio src={hourlyMusic()} loop autoPlay controls/>
        <h1>The time is: </h1>
            <h1>{time}</h1>
            <h1>{timeArr[0]}</h1>
            <h1>{timeArr[1]}</h1>
            <h1 style={{backgroundColor: conditionalStyle()}}>{timeArr[2]}</h1>
    </>)
}

export default Clock