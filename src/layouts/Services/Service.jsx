import LeftService from "@components/LeftService/LeftService";

export default function Services({ title, description }){
    return(
        <section className="services">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="servicesWrapper">
                <LeftService number="#01" desc="" name="Design UX & UI"/>
            </div>
        </section>
    )
}