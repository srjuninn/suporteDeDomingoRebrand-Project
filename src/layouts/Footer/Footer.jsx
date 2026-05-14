import Instagram from "@icons/Instagram";
import RightUpArrow from "@icons/RightUpArrow";
import LinkedIn from "@icons/Linkedin";
import Whatsapp from "@icons/Whatsapp";
import '@layouts/Footer/Footer.scss'
import { useTranslation } from "react-i18next";
import { openWhatsapp } from '@utils/openWhatsapp'

export default function Footer() {
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
            <div className="socialMedias">
                <h3>{t("footer.socials")}</h3>
                <div className="socialWrap">
                    <div className="instagram" onClick={openWhatsapp}>
                        <Instagram />
                        {t("footer.instagram")}
                        <RightUpArrow w="30" h="30" />
                    </div>
                    <div className="linkedin" onClick={openWhatsapp}>
                        <LinkedIn />
                        {t("footer.linkedin")}
                        <RightUpArrow />
                    </div>
                </div>
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
