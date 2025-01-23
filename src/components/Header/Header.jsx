import './header.css'
import Stopwatch from '../Stopwatch/Stopwatch'
import  IconsDiv  from '../IconsDiv/IconsDivHeader'

function Header({handleClick, stopwatchWorking, charactersFound, currentGame, updateTimerValues, gameOver}) {

return (
    <div className='headerComponent'>
        <div onClick={handleClick} className='returnHome'>
        <svg fill="#000000" width="35px" height="35px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <title>return</title> <path d="M0 21.984q0.032-0.8 0.608-1.376l4-4q0.448-0.48 1.056-0.576t1.12 0.128 0.864 0.736 0.352 1.12v1.984h18.016q0.8 0 1.408-0.576t0.576-1.408v-8q0-0.832-0.576-1.408t-1.408-0.608h-16q-0.736 0-1.248-0.416t-0.64-0.992 0-1.152 0.64-1.024 1.248-0.416h16q2.464 0 4.224 1.76t1.76 4.256v8q0 2.496-1.76 4.224t-4.224 1.76h-18.016v2.016q0 0.64-0.352 1.152t-0.896 0.704-1.12 0.096-1.024-0.544l-4-4q-0.64-0.608-0.608-1.44z"></path> </g></svg>
            Character Finder
        </div>
        {/* I can add a class to iconsdiv so that when it has both charactersFound and [scope] classes:
            if (it's the one in the header) {it gives it the background color}
            else if (it's the one in the gameComponent) {it gives it display none} */}
        <IconsDiv currentGame = {currentGame} charactersFound = {charactersFound} />
        {stopwatchWorking && <Stopwatch updateTimerValues = {updateTimerValues} gameOver = {gameOver} />}
        {/* <div className='decorationHeader'></div> */}
    </div>

)
}

export default Header
