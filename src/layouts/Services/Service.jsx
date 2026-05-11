import '@layouts/Services/Service.scss'
import LeftService from "@components/LeftService/LeftService";
import MiddleService from '@components/MiddleService/MiddleService';
import RightService from '@components/RightService/RightService';
import UxUi from '@images/UxUiHeroImage.png'
import visualIdentity from '@images/visualIdentityHeroImg.png'
import brading from '@images/bradingHeroImage.png'
import marketing from '@images/bradingHeroImage.png'
import desenvolvimento from '@images/desenvolvimentoHeroImage.png'
import consultoria from '@images/consultoriaHeroImage.png'

export default function Services({ title, description }){
    return(
        <section className="services">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="servicesWrapper">
                <LeftService number="#01" img={UxUi} desc="imagem ilustrativa do serviço design" name="Design UX & UI"/>
                <MiddleService number="#02" img={visualIdentity} desc="imagem ilustrativa do serviço de identidade visual" name="Identidade visual"/>
                <RightService number="#03" img={brading} desc="imagem ilustrativa do serviço de brading" name="Brading"/>

                <LeftService number="#04" img={marketing} desc="imagem ilustrativa do serviço de marketing digital" name="Marketing Digital"/>
                <MiddleService number="#05" img={desenvolvimento} desc="imagem ilustrativa do serviço de desenvolvimento de software" name="Desenvolvimento de Software"/>
                <RightService number="#06" img={consultoria} desc="imagem ilustrativa do serviço de consultoria" name="Consultoria"/>
            </div>
        </section>
    )
}