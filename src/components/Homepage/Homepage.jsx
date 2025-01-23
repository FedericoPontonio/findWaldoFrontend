import { useState } from 'react'
import './homepage.css'



function Homepage({startStopwatch, startFirstGame, startSecondGame}) {

  
    return (
      <div className='homepageComponent'>
        <div className='caption'>
          Character Finder
        </div>
        <div>
          Chose your game:
        </div>
        <div className='gameBoxes'>
          <button onClick={()=>{startStopwatch(); startFirstGame()}}>Start First Game</button>
          <button onClick={()=>{startStopwatch(); startSecondGame()}}>Start Second Game</button>
          <button>Start Third Game</button>
        </div>
      </div>
    )
}

export default Homepage
