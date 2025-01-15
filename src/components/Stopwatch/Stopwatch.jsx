import { useState } from 'react'
import './stopwatch.css'

function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState("00");
  
    setTimeout(()=>{
      if (+milliseconds == 99) {
        setSeconds(seconds+1);
        setMilliseconds("00");
      }
      else {
        if (+milliseconds < 9) {
          setMilliseconds("0" + (+milliseconds + 1))
        }
        else {
          setMilliseconds(+milliseconds+1)
        }
      }
    }, 10)
  
    return (
      <div className='stopwatchComponent'>
        {seconds + "." + milliseconds}
      </div>
    )
}

export default Stopwatch
