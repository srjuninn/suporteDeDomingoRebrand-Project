import { useState } from 'react'
import '@components/SwitchLanguage/switchLanguage.scss'
import brazilFlag from '@images/brazilFlag.png'
import usaFlag from '@images/euaFlag.png'
import spainFlag from '@images/spainFlag.png'
import arrowDown from '@images/arrowDown.png'

const languages = {
    pt: { label: 'Português', flag: brazilFlag },
    en: { label: 'English', flag: usaFlag },
    es: { label: 'Español', flag: spainFlag }
}

export default function SwitchLanguage() {
    const [currentLang, setCurrentLang] = useState('pt')
    const [open, setOpen] = useState(false)

    const handleSelect = (lang) => {
        setCurrentLang(lang)
        setOpen(false)
        // aqui você pode chamar i18n.changeLanguage(lang) se estiver usando react-i18next
    }

    return (
        <div className={`switch ${currentLang !== 'pt' ? 'switch--noRight' : ''}`}>
            <div className="textWrap" onClick={() => setOpen(!open)}>
                <img src={languages[currentLang].flag} alt={languages[currentLang].label} />
                <p>{languages[currentLang].label}</p>
                <img
                    src={arrowDown}
                    alt="seta"
                    className={`arrow ${open ? 'arrow--up' : ''}`}
                />
            </div>

            {open && (
                <div className="dropdown">
                    {Object.keys(languages)
                        .filter((lang) => lang !== currentLang)
                        .map((lang) => (
                            <div key={lang} className="textWrap option" onClick={() => handleSelect(lang)}>
                                <img src={languages[lang].flag} alt={languages[lang].label} />
                                <p>{languages[lang].label}</p>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}
