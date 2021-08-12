import React, {useState} from 'react'

import './App.css';

import Logo from './components/Logo';
import Music from './components/Music'
import Clock from './components/Clock'
import GameSelector from './components/GameSelector';

function App() {

  const [timeArr, setTimeArr] = useState(null)
  const [game, setGame] = useState("Animal Crossing")

  const getTime = (timeStr, timeArr) => {
    setTimeArr(timeArr)
  }

  const selectGame = (selected) => {
    setGame(selected)
  }
  
  return (
    <div className="App">
      <Logo />
      <Clock getTime={getTime} currentTime={timeArr}/>
      <Music currentTime={timeArr} game={game}/>
      <GameSelector selectGame={selectGame} />
    </div>
  );
}

export default App;
