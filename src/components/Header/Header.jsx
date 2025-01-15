// import { useState } from 'react'
import './header.css'
import Stopwatch from '../Stopwatch/Stopwatch'
import { griffith, saitama, sonic } from '../../utils/characterIconsProvider'

function Header({handleClick, stopwatchWorking, charactersFound}) {

    


return (
    <div className='headerComponent'>
        <div onClick={handleClick} className='returnHome'>
            Character Finder
        </div>
        <div className='iconsDiv'>
            <img src={saitama} alt="saitama icon" className={charactersFound.firstCharacterFound ? 'foundCharacter' : ''} />
            <img src={griffith} alt="griffith icon" className={charactersFound.secondCharacterFound ? 'foundCharacter' : ''} />
            <img src={sonic} alt="sonic icon" className={charactersFound.thirdCharacterFound ? 'foundCharacter' : ''} />
        </div>
        {/* {stopwatchWorking && <Stopwatch />} */}
    </div>

)
}

export default Header
