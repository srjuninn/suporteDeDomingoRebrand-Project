import Instagram from "@icons/Instagram";
import RightUpArrow from "@icons/RightUpArrow";
import LinkedIn from "@icons/Linkedin";
import Whatsapp from "@icons/Whatsapp";
import '@layouts/Footer/Footer.scss'

export default function Footer({ companyName, tagLine, rightsReserved, copyRight, date }) {
    return (
        <footer>
            <h2>{companyName} ⌘</h2>
            <h2 className="secundary">{tagLine}</h2>
            <div className="socialMedias">
                <h3>Redes Sociais</h3>
                <div className="socialWrap">
                    <div className="instagram">
                        <Instagram/>
                        Instagram
                        <RightUpArrow/>
                    </div>
                    <div className="linkedin">
                        <LinkedIn/>
                        LinkedIn
                        <RightUpArrow/>
                    </div>
                    <div className="whatsapp">
                        <Whatsapp/>
                        Whatsapp
                        <RightUpArrow/>
                    </div>
                </div>
            </div>
            <h4>{rightsReserved}</h4>
            <h5>{copyRight}</h5>
            <p>{date}</p>
        </footer>
    )
}