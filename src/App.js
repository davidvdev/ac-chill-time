import React, {useState} from 'react'

import './App.css';

import Logo from './components/Logo';
import Music from './components/Music'
import Clock from './components/Clock'
import GameSelector from './components/GameSelector';

function App() {

  const [timeArr, setTimeArr] = useState(null)

  const getTime = (timeStr, timeArr) => {
    setTimeArr(timeArr)
  }
  
  return (
    <div className="App">
      <Logo />
      <Clock getTime={getTime} currentTime={timeArr}/>
      <Music currentTime={timeArr}/>
      <GameSelector />
    </div>
  );
}

export default App;
