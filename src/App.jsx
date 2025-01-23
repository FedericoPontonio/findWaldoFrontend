import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import GameView from './components/GameView/GameView'
import ScoreboardView from './components/ScoreboardView/ScoreboardView'



function App() {
  const [currentView, setcurrentView] = useState('homepage');
  const [firstCharacterFound, setFirstCharacterFound] = useState(false);
  const [secondCharacterFound, setSecondCharacterFound] = useState(false);
  const [thirdCharacterFound, setThirdCharacterFound] = useState(false);
  const [currentGame, setCurrentGame] = useState(null)
  const [timerValues, setTimerValues] = useState({seconds: 0, milliseconds: 0});
  const [gameOver, setGameOver] = useState(false)
  const [gameResults, setGameResults] = useState()

  function characterFoundSetter(nthCharacter) {
    if (nthCharacter == 1) {
      setFirstCharacterFound(true)
    }
    else if (nthCharacter == 2) {
      setSecondCharacterFound(true)
    }
    else if (nthCharacter == 3) {
      setThirdCharacterFound(true)
    }
  };

  //transfer timer from stopwatch to App
  const updateTimerValues = (seconds, milliseconds) => {
    setTimerValues({seconds, milliseconds})
  };

  function stopStopwatch (){
    setStopwatchWorking(false)
  }

  
//trigger game over
  useEffect(() => {
    if (firstCharacterFound && secondCharacterFound && thirdCharacterFound) {
      setGameOver(true);
    }
  }, [firstCharacterFound, secondCharacterFound, thirdCharacterFound]);

  const [stopwatchWorking, setStopwatchWorking] = useState(false);

  function homeRoute () {
    setcurrentView('homepage')
    setFirstCharacterFound(false);
    setSecondCharacterFound(false);
    setThirdCharacterFound(false);
    setStopwatchWorking(false);
    setCurrentGame(null);
    setGameOver(false);
  }

  function scoreboardRoute (currentGame) {
    setcurrentView('scoreboard');
    setFirstCharacterFound(false);
    setSecondCharacterFound(false);
    setThirdCharacterFound(false);
    setStopwatchWorking(false);
    setCurrentGame(null);
    setGameOver(false);
    setGameResults(currentGame)
  }
  

  return (
    <>
      <Header
      handleClick = {homeRoute}
      stopwatchWorking = {stopwatchWorking}
      updateTimerValues = {updateTimerValues}
      gameOver = {gameOver}
      charactersFound = {{
        firstCharacterFound,
        secondCharacterFound,
        thirdCharacterFound,
        }}
        currentGame = {currentGame}
      />
      {currentView == 'homepage' && <Homepage startStopwatch = {()=> setStopwatchWorking(true)} startFirstGame = {()=>{setcurrentView('gameView');setCurrentGame(1)}} startSecondGame = {()=>{setcurrentView('gameView');setCurrentGame(2)}} />}
      {currentView == 'gameView' && <GameView
        handleCharacterFound={characterFoundSetter}
        firstCharacterFound={firstCharacterFound}
        secondCharacterFound={secondCharacterFound}
        thirdCharacterFound={thirdCharacterFound}
        currentGame = {currentGame}
        gameOver = {gameOver}
        timerValues = {timerValues}
        stopStopwatch = {stopStopwatch}
        scoreboardRoute={scoreboardRoute}
      />}
      {currentView == 'scoreboard' && <ScoreboardView gameResults={gameResults} />}
    </>
  )
}

export default App