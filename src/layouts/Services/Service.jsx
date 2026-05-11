import '@layouts/Services/Service.scss'
import LeftService from "@components/LeftService/LeftService";
import MiddleService from '@components/MiddleService/MiddleService';
import RightService from '../../components/RightService/RightService';

export default function Services({ title, description }){
    return(
        <section className="services">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="servicesWrapper">
                <LeftService number="#01" desc="imagem ilustrativa do serviço design" name="Design UX & UI"/>
                <MiddleService number="#02" desc="imagem ilustrativa do serviço de identidade visual" name="Identidade visual"/>
                <RightService number="#03" desc="imagem ilustrativa do serviço de brading" name="Brading"/>
                
                <LeftService number="#04" desc="imagem ilustrativa do serviço de marketing digital" name="Marketing Digital"/>
                <MiddleService number="#05" desc="imagem ilustrativa do serviço de desenvolvimento de software" name="Desenvolvimento de Software"/>
                <RightService number="#06" desc="imagem ilustrativa do serviço de consultoria" name="Consultoria"/>
            </div>
        </section>
    )
}