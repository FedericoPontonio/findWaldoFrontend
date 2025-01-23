
import { useEffect, useState } from 'react';
import './SaveUserPerformanceView.css'

function SaveUserPerformanceView({currentGame, gameOver, timerValues, stopStopwatch, scoreboardRoute}) {

    const [userWantsToSaveScore, setUserWantsToSaveScore] = useState(false)

      //triggers on game over, so the timer values are updated correctly
      useEffect(() => {
        if (gameOver) {
          const result = {
            'game played': currentGame,
            'your time': timerValues,
          };
          console.log('game over');
          console.log(result);
          stopStopwatch();
        }
      }, [gameOver, timerValues, currentGame]);

      const timerValuesToFloat = ()=>{
        const seconds =timerValues.seconds;
        const milliseconds = timerValues.milliseconds;
        const merge = seconds + '.' + milliseconds;
        return +merge
      }

    const saveRecord =async()=>{
      await fetch("https://findwaldobackend.onrender.com", {
        body : JSON.stringify({username: document.querySelector('#username').value, timeRecord: timerValuesToFloat(), gameSelected: +currentGame}),
        headers: {
          'Content-Type': "application/json"
        },
        method: "POST",
      })
    } 


    function evaluateStyle () {
      if (!userWantsToSaveScore) {
        return decorationForButtonStyleNo
      }
    }
    const decorationForButtonStyleNo = {
      transform: 'translateX(-100%)'
    }



    return(
        <div className="SaveUserPerformanceView">
            <div className='internalUIDiv'>
                <h3>Do you want to save your score?</h3>
                <div className='buttonSwitch' onClick={()=>(setUserWantsToSaveScore(!userWantsToSaveScore))}>
                  <div style={{color:'transparent'}}>{userWantsToSaveScore && 'Yes'}</div>
                  <div style={{color:'transparent'}}>{!userWantsToSaveScore && 'No'}</div>
                    
                    <div className='devorationForButton' style={evaluateStyle()}></div>
                </div>
                
                {userWantsToSaveScore &&
                    <>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name='username' id='username' />
                        <div>Your time: 
                            {timerValuesToFloat()}
                            </div>
                            
                        <button onClick={async ()=>{await saveRecord();scoreboardRoute(currentGame)}} >Submit and go to the scoreboard</button>
                    </>
                }
                {!userWantsToSaveScore && <button onClick={()=>scoreboardRoute(currentGame)}>Go to the scoreboard</button>}
                <button onClick={()=>window.location.reload()}>Ignore and play again</button>

            </div>
            
        </div>
    )
}

export default SaveUserPerformanceView