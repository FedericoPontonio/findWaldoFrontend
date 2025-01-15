import { useState } from 'react'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import GameOne from '../src/components/GameOne/GameOne'
import gameOne from '../src/components/GameOne/GameOne';



function App() {
  const [mainBodyContent, setmainBodyContent] = useState(()=> <Homepage startStopwatch = {startStopwatch} startFirstGame = {startFirstGame} />);
  const [firstCharacterFound, setFirstCharacterFound] = useState(false);
  const [secondCharacterFound, setsecondCharacterFound] = useState(false);
  const [thirdCharacterFound, setthirdCharacterFound] = useState(false);

  function gameOver() {
    if(firstCharacterFound && secondCharacterFound && thirdCharacterFound) {
      console.log('game over')
    }
  }
  function characterFound(nthCharacter) {
    if (nthCharacter == 1) {
      setFirstCharacterFound(true)
    }
    else if (nthCharacter == 2) {
      setsecondCharacterFound(true)
    }
    else if (nthCharacter == 3) {
      setthirdCharacterFound(true)
    }
    console.log('here')
    gameOver()    //why doesn't this trigger???
  };
  
  function startStopwatch() {
    setStopwatchWorking(true)
  }
  function startFirstGame() {
    setmainBodyContent(()=> <GameOne handleCharacterFound = {characterFound} />)
  }
  const [stopwatchWorking, setStopwatchWorking] = useState(false);

  function homeRoute () {
    setmainBodyContent(()=> <Homepage startStopwatch = {startStopwatch} startFirstGame = {startFirstGame}  />)
    setStopwatchWorking(false)
  }

  



  return (
    <>
      <Header handleClick = {homeRoute} stopwatchWorking = {stopwatchWorking} charactersFound = {{
        firstCharacterFound,
        secondCharacterFound,
        thirdCharacterFound,
        }} />
      {mainBodyContent}
    </>
  )
}

export default App
