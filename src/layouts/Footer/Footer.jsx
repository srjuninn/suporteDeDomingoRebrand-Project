import Instagram from "@icons/Instagram";
import RightUpArrow from "@icons/RightUpArrow";
import LinkedIn from "@icons/Linkedin";
import Whatsapp from "@icons/Whatsapp";
import '@layouts/Footer/Footer.scss'
import { useTranslation } from "react-i18next";
import { openWhatsapp } from '@utils/openWhatsapp'

export default function Footer({ companyName, tagLine, rightsReserved, copyRight, date }) {
    const { t } = useTranslation();
    const now = new Date();
    const time = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo"
    }).format(now);

    return (
        <footer>
            <h2>{t("footer.companyName")} ⌘</h2>
            <h2 className="secundary">{t("footer.tagLine")}</h2>
            <div id="socials" className="socialMedias">
                <h3>{t("footer.socials")}</h3>
                <div className="socialWrap">
                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/suportededomingo?igsh=OWp1anhtY2Fra2Y4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                    >
                        <Instagram />
                        {t("footer.instagram")}
                        <RightUpArrow w="30" h="30" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/company/suporte-de-domingo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                    >
                        <LinkedIn />
                        {t("footer.linkedin")}
                        <RightUpArrow />
                    </a>
                </div>

                {/* WhatsApp */}
                <div className="whatsapp" onClick={openWhatsapp}>
                    <Whatsapp />
                    {t("footer.whatsapp")}
                    <RightUpArrow />
                </div>
            </div>

            <h4>© {new Date().getFullYear()} {t("footer.rightsReserved")}</h4>
            <h5>{t("footer.companyName")}</h5>
            <p>{t("footer.location")} – {time}</p>
        </footer>
    )
}
