import '@layouts/Main/Main.scss'
import Button from '@components/Button/Button';
import mainHeroImg from '@images/mainHeroImg.png'
import Header from '@layouts/Header/Header'
import SuporteDeDomingoLogoType from '@icons/sddLogoType'
import SwitchLanguage from '@components/SwitchLanguage/SwitchLanguage'
import { useTranslation } from 'react-i18next'
import { openWhatsapp } from '@utils/openWhatsapp';

export default function Main() {
  const { t } = useTranslation()

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#services', label: t('nav.services') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <main>
      <SuporteDeDomingoLogoType />
      <Header links={navLinks} />
      <SwitchLanguage />
      <div className="mainContent">
        <h1>{t('main.title')}</h1>
        <img src={mainHeroImg} alt="imagem ilustrativa de um serviço de desenvolvimento de sistema" />
      </div>
      <Button onClick={openWhatsapp}  >{t('main.button')}</Button>
    </main>
  )
}
