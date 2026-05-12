import Instagram from "@icons/Instagram";
import RightUpArrow from "@icons/RightUpArrow";
import LinkedIn from "@icons/Linkedin";
import Whatsapp from "@icons/Whatsapp";
import '@layouts/Footer/Footer.scss'

export default function Footer({ companyName, tagLine, rightsReserved, copyRight, date }) {
    const now = new Date();
    const time = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo"
    }).format(now);

    return (
        <footer>
            <h2>{companyName} ⌘</h2>
            <h2 className="secundary">{tagLine}</h2>
            <div className="socialMedias">
                <h3>Redes Sociais</h3>
                <div className="socialWrap">
                    <div className="instagram">
                        <Instagram />
                        Instagram
                        <RightUpArrow w="30" h="30" />
                    </div>
                    <div className="linkedin">
                        <LinkedIn />
                        LinkedIn
                        <RightUpArrow />
                    </div>
                </div>
                <div className="whatsapp">
                    <Whatsapp />
                    Whatsapp
                    <RightUpArrow />
                </div>
            </div>
            <h4>© {new Date().getFullYear()} Todos os direitos reservados.</h4>
            <h5>Suporte de Domingo</h5>
            <p>São Paulo, Brasil – {time}</p>
        </footer>
    )
}