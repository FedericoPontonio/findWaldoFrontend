import CharacterIcon from '../CharacterIcon/CharacterIcon'
import { charactersForGame } from '../../utils/characterIconsProvider'

function IconsDiv({currentGame, charactersFound}) {

    if (currentGame != null) {
        var icons=charactersForGame[currentGame]
    }
    
    return (
        <div className='iconsDiv'>
            {currentGame != null && (
                <>
                    <div className='singleIconCell'>
                        <CharacterIcon iconPNG = {icons.firstCharacter.data} className={charactersFound.firstCharacterFound ? 'foundCharacter' : ''} />
                        {icons.firstCharacter.name}
                    </div>
                    <div className='singleIconCell'>
                        <CharacterIcon iconPNG = {icons.secondCharacter.data} className={charactersFound.secondCharacterFound ? 'foundCharacter' : ''} />
                        {icons.secondCharacter.name}
                    </div>
                    <div className='singleIconCell'>
                        <CharacterIcon iconPNG = {icons.thirdCharacter.data} className={charactersFound.thirdCharacterFound ? 'foundCharacter' : ''} />
                        {icons.thirdCharacter.name}
                    </div>
                </>
            )}
            
        </div>
    )
}

export default IconsDiv