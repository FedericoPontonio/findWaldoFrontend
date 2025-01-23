import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client';

import './gameView.css'
import ImageGameOne from '../../assets/findwaldoInfested.png'
import ImageGameTwo from '../../assets/cyberpunkCity.png'
import IconsDivPopupFail from '../IconsDiv/IconsDivPopupFail'
import IconsDivPopupSuccess from '../IconsDiv/IconsDivPopupSuccess'
import SuccessClickMessage from '../gameClickFeedbackMessages/SuccessClickMessage'
import FailClickMessage from '../gameClickFeedbackMessages/FailClickMessage'
import SaveUserPerformanceView from '../saveUserPerformanceView/SaveUserPerformanceView';

function GameView({handleCharacterFound, firstCharacterFound, secondCharacterFound, thirdCharacterFound,currentGame, gameOver, timerValues, stopStopwatch, scoreboardRoute}) {

  const [gameClickFeedback, setGameClickFeedback] = useState(null)


  const gameImage = ()=>{
    if (currentGame == 1) {
      return ImageGameOne
    }
    else if (currentGame == 2) {
      return ImageGameTwo
    }
  }
  function triggerSuccessMessage() {
    setGameClickFeedback('successClick');
  }
  function triggerFailMessage() {
    setGameClickFeedback('failClick')
  }

  useEffect(
    ()=>{
      if (gameClickFeedback == 'successClick' || gameClickFeedback == 'failClick') {
        setTimeout(()=>setGameClickFeedback(null), 2000)
      }
    }, [gameClickFeedback]
  )
  

    function handleGameClick(event, characterClicked) {
        const popupContainer = document.createElement('div');
        popupContainer.classList = 'popupContainer';
        const gameComponent = document.querySelector('.gameComponent');
        popupContainer.style.top = event.pageY -20  + 'px';
        popupContainer.style.left = event.pageX -20 + 'px';
        gameComponent.appendChild(popupContainer)
        const root = createRoot(popupContainer);
        popupContainer.addEventListener('mouseleave', ()=>gameComponent.removeChild(popupContainer))
        if (characterClicked != null) {
          root.render(
            <IconsDivPopupSuccess  currentGame={currentGame} charactersFound={{ firstCharacterFound, secondCharacterFound, thirdCharacterFound }} characterClicked = {characterClicked} handleCharacterFound = {handleCharacterFound} triggerSuccessMessage={triggerSuccessMessage} triggerFailMessage={triggerFailMessage} />
          );
          popupContainer.onclick=()=>{gameComponent.removeChild(popupContainer)}
        }
        else {
          root.render(
            <IconsDivPopupFail currentGame={currentGame} charactersFound={{ firstCharacterFound, secondCharacterFound, thirdCharacterFound }} />
          );
          popupContainer.onclick=()=>{setGameClickFeedback('failClick');gameComponent.removeChild(popupContainer)}
        }
    }
    return (
      <div className='gameComponent'>
        {gameClickFeedback == 'failClick' && <FailClickMessage /> }
        {gameClickFeedback == 'successClick' && <SuccessClickMessage /> }
        <img className='gameImage' src={gameImage()} alt="Game Image"
          //create always-failing character selector for gameImage
          onClick={handleGameClick} />

          {/* give iconsDiv appropriate class based on which game selected */}

          {currentGame == 1 && 
          <>
            <div onClick={()=>handleGameClick(event, 1)} className='firstCharacterGameOne' ></div>
            <div onClick={()=>handleGameClick(event, 2)} className='secondCharacterGameOne'></div>
            <div onClick={()=>handleGameClick(event, 3)} className='thirdCharacterGameOne'></div>
          </>
          }
          {currentGame == 2 && 
          <>
            <div onClick={()=>handleGameClick(event, 1)} className='firstCharacterGameTwo' ></div>
            <div onClick={()=>handleGameClick(event, 2)} className='secondCharacterGameTwo'></div>
            <div onClick={()=>handleGameClick(event, 3)} className='thirdCharacterGameTwo'></div>
          </>
          }

          {gameOver && <SaveUserPerformanceView currentGame = {currentGame} gameOver={gameOver} timerValues={timerValues} stopStopwatch={stopStopwatch} scoreboardRoute= {scoreboardRoute} />}
          {/* <SaveUserPerformanceView /> */}

      </div>
    )
}

export default GameView
