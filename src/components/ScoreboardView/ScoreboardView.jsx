
import { useEffect, useState } from 'react';
import './ScoreboardView.css'

function ScoreboardView({gameResults}) {

    const [data, setData] = useState([])

    const getRecords =async(currentGame)=>{
        try {
            const response = await fetch("https://findwaldobackend.onrender.com/" + gameResults)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
            const json = await response.json();
            setData(json.message)
        } catch (error) {
            console.error(error.message);
          }
        }

        console.log(data)
        useEffect(() => {
            const fetchData = async () => {
              await getRecords();
            };
            fetchData();
          }, []);




    return(
        <div className="scoreboardView">
            <h1>Scoreboard of Game {gameResults}</h1>
              <div className='table'>
                <div>Username</div>
                <div>Time</div>
                {data.length<1 && <div>Loading...</div>}
                {data.map((data, index) => (
                  <>
                    <div key={index}>{data.username}</div>
                    <div>{data.timeRecord}</div>
                  </>

                ))}
              </div>
            
        </div>
    )
}

export default ScoreboardView