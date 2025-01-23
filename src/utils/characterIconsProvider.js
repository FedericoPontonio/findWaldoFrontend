import saitama from '../assets/saitama.png'
import griffith from '../assets/griffith.png'
import sonic from '../assets/sonic.png'
import jakeTheDog from '../assets/jakeTheDog.png'
import ninaTucker from '../assets/ninaTucker.png'
import solidSnake from '../assets/solidSnake.png'

const charactersForGame = {
    1:{
        firstCharacter: {
            name : 'Saitama',
            data: saitama,
        },
        secondCharacter: {
            name: 'Griffith',
            data: griffith,
        },
        thirdCharacter: {
            name: 'Sonic',
            data: sonic,
        },
    },
    2:{
        firstCharacter: {
            name: 'JakeTheDog',
            data: jakeTheDog,
        },
        secondCharacter: {
            name: 'NinaTucker',
            data: ninaTucker,
        },
        thirdCharacter: {
            name: 'SolidSnake',
            data: solidSnake,
        },
    },
}


export {charactersForGame}