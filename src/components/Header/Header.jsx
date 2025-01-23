import './header.css'
import Stopwatch from '../Stopwatch/Stopwatch'
import  IconsDiv  from '../IconsDiv/IconsDivHeader'

function Header({handleClick, stopwatchWorking, charactersFound, currentGame, updateTimerValues, gameOver}) {

return (
    <div className='headerComponent'>
        <div onClick={handleClick} className='returnHome'>
            Character Finder
        </div>
        {/* I can add a class to iconsdiv so that when it has both charactersFound and [scope] classes:
            if (it's the one in the header) {it gives it the background color}
            else if (it's the one in the gameComponent) {it gives it display none} */}
        <IconsDiv currentGame = {currentGame} charactersFound = {charactersFound} />
        {stopwatchWorking && <Stopwatch updateTimerValues = {updateTimerValues} gameOver = {gameOver} />}
    </div>

)
}

export default Header
