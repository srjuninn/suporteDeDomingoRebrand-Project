import { useState } from 'react'
import '@layouts/Services/Service.scss'
import LeftService from "@components/LeftService/LeftService";
import MiddleService from '@components/MiddleService/MiddleService';
import RightService from '@components/RightService/RightService';
import UxUi from '@images/UxUiHeroImage.png'
import visualIdentity from '@images/visualIdentityHeroImg.png'
import brandingImg from '@images/bradingHeroImage.png'
import marketing from '@images/marketingHeroImage.png'
import desenvolvimento from '@images/desenvolvimentoHeroImage.png'
import consultoria from '@images/consultoriaHeroImage.png'
import { useTranslation } from 'react-i18next'

export default function Services() {
    const { t } = useTranslation()

    const services = [
        { id: 1, key: 'uxui', Component: LeftService, number: '#01', img: UxUi },
        { id: 2, key: 'visualIdentity', Component: MiddleService, number: '#02', img: visualIdentity },
        { id: 3, key: 'branding', Component: RightService, number: '#03', img: brandingImg },
        { id: 4, key: 'marketing', Component: LeftService, number: '#04', img: marketing },
        { id: 5, key: 'development', Component: MiddleService, number: '#05', img: desenvolvimento, buttonTop: '73%' },
        { id: 6, key: 'consulting', Component: RightService, number: '#06', img: consultoria },
    ]

    const defaultDescription = t('services.defaultDescription')
    const [selectedService, setSelectedService] = useState(services[0])

    const activeDescription = selectedService
        ? t(`services.items.${selectedService.key}.description`)
        : defaultDescription

    return (
        <section className="services">
            <h2>{t('services.title')}</h2>
            <p>{activeDescription}</p>
            <div className="servicesWrapper">
                {services.map(({ id, key, Component, number, img, buttonTop }) => (
                    <Component
                        key={id}
                        number={number}
                        img={img}
                        desc={t(`services.items.${key}.description`)}
                        name={t(`services.items.${key}.name`)}
                        buttonTop={buttonTop}
                        isSelected={selectedService?.id === id}
                        onClick={() => setSelectedService({ id, key })}
                    />
                ))}
            </div>
        </section>
    )
}
