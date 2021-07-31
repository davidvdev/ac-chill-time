import React, {useState} from 'react'

import './App.css';

import Logo from './components/Logo';
import Music from './components/Music'
import Clock from './components/Clock'

function App() {

  // const [time, setTime] = useState(null)
  const [timeArr, setTimeArr] = useState(null)

  const getTime = (timeStr, timeArr) => {
    // setTime(timeStr)
    setTimeArr(timeArr)
  }
  
  return (
    <div className="App">
      <Logo />
      <Clock getTime={getTime} currentTime={timeArr}/>
      <Music currentTime={timeArr}/>
    </div>
  );
}

export default App;
