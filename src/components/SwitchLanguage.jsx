import  '@styles/switchLanguage.scss'
import brazilFlag from '@images/brazilFlag.png'
import arrowDown from '@images/arrowDown.png'

export default function SwitchLanguage({ language }){
    return (
        <div className="switch">
            <div className="textWrap">
                <img src={brazilFlag} alt="bandeira do Brasil" />
                <p>{language}</p>
            </div>
            <img src={arrowDown} alt="seta pra baixo" />
        </div>
    )
}