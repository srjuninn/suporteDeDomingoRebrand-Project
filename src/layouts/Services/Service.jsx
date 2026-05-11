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
                <LeftService number="#01" desc="" name="Design UX & UI"/>
                <MiddleService number="#02" desc="" name="Identidade visual"/>
                <RightService number="#03" desc="" name="Brading"/>
            </div>
        </section>
    )
}