import { useState } from 'react'
import './gameOne.css'
import gameImage from '../../assets/findwaldoInfested.png'

function gameOne({handleCharacterFound}) {



  
    return (
      <div className='gameOneComponent'>
        <img className='gameOneImage' src={gameImage} alt="Game Image" />
        <div onClick={()=>handleCharacterFound(1)} className='firstCharacterGameOne'></div>
        <div onClick={()=>handleCharacterFound(2)} className='secondCharacterGameOne'></div>
        <div onClick={()=>handleCharacterFound(3)} className='thirdCharacterGameOne'></div>
      </div>
    )
}

export default gameOne
