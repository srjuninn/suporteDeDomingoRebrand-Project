import { useState } from 'react'
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
    const services = [
        {   id: 1, 
            Component: 
                LeftService, 
                    number: '#01', 
                    img: UxUi, 
                    desc: 'Transformamos ideias em interfaces intuitivas, responsivas e com foco na experiência do usuário projetadas para escalar globalmente.', 
                    name: 'Design UX & UI' },
        {   id: 2, 
            Component: 
                MiddleService, 
                number: '#02', 
                img: visualIdentity, 
                desc: 'Criamos conteúdos para redes sociais, apresentações profissionais e materiais promocionais. Sempre com clareza, estética e consistência visual.', 
                name: 'Identidade visual' },
        {   id: 3, 
                Component: 
                    RightService, 
                    number: '#03', 
                    img: brading, 
                    desc: 'Construímos marcas com personalidade. Do logotipo à paleta de cores, criamos identidades que conectam, comunicam e fortalecem o seu posicionamento.',
                    name: 'Brading' },
        {   id: 4, 
                Component: 
                    LeftService, 
                    number: '#04', 
                    img: marketing, 
                    desc: 'Campanhas inteligentes e segmentadas com foco em resultados reais. Estratégia, criatividade e performance para seu negócio crescer com propósito.', 
                    name: 'Marketing Digital' },
        {   id: 5, 
                Component: 
                    MiddleService, 
                    number: '#05', 
                    img: desenvolvimento, 
                    desc: 'Aplicações web e mobile sob medida, com Clean Architecture, testes automatizados e escalabilidade integrada desde o início.', 
                    name: 'Desenvolvimento de Software' },
        {   id: 6,  
                Component: 
                    RightService, 
                    number: '#06', 
                    img: consultoria, 
                    desc: 'Diagnóstico de processos, automações e treinamentos práticos para sua equipe evoluir com estratégia e eficiência.', 
                    name: 'Consultoria' },
    ]

    const defaultDescription = description || 'Passe o mouse sobre um card para ver a descrição do serviço.'
    const [selectedService, setSelectedService] = useState(services[0])

    const activeDescription = selectedService?.desc ?? defaultDescription

    return(
        <section className="services">
            <h2>{title}</h2>
            <p>{activeDescription}</p>
            <div className="servicesWrapper">
                {services.map(({ id, Component, number, img, desc, name }) => (
                    <Component
                        key={id}
                        number={number}
                        img={img}
                        desc={desc}
                        name={name}
                        isSelected={selectedService?.id === id}
                        onMouseEnter={() => setSelectedService({ id, desc })}
                        onClick={() => setSelectedService({ id, desc })}
                    />
                ))}
            </div>
        </section>
    )
}