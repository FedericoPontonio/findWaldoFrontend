import CharacterIcon from '../CharacterIcon/CharacterIcon'
import { charactersForGame } from '../../utils/characterIconsProvider'

function IconsDiv({currentGame, charactersFound}) {

    if (currentGame != null) {
        var icons=charactersForGame[currentGame]
    }
    //the only difference from the other IconsDiv component is the absence of character names and the class to be added on finding. It could be implemented in the same component.
    return (
        <div className='iconsDiv'>
            {currentGame != null && (
                <>
                    <div className='singleIconCell'>
                        <CharacterIcon iconPNG = {icons.firstCharacter.data} className={charactersFound.firstCharacterFound ? 'foundCharacterPopup' : ''} />
                    </div>
                    <div className='singleIconCell'>
                        <CharacterIcon iconPNG = {icons.secondCharacter.data} className={charactersFound.secondCharacterFound ? 'foundCharacterPopup' : ''} />
                    </div>
                    <div className='singleIconCell'>
                        <CharacterIcon iconPNG = {icons.thirdCharacter.data} className={charactersFound.thirdCharacterFound ? 'foundCharacterPopup' : ''}  />
                    </div>
                </>
            )}
            
        </div>
    )
}

export default IconsDiv