import '@layouts/Main/Main.scss'
import MainVetor from '@layouts/Main/MainVetor';
import Button from '@components/Button/Button';
import mainHeroImg from '@images/mainHeroImg.png'
import Header from '@layouts/Header/Header'
import SuporteDeDomingoLogoType from '@icons/sddLogoType'
import SwitchLanguage from '@components/SwitchLanguage/SwitchLanguage'

export default function Main({ content }) {
      const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]
    return (
        <>
            <main>
                <SuporteDeDomingoLogoType />
                <Header links={navLinks} />
                <SwitchLanguage language="Portugese" />
                <MainVetor className="background-svg" />
                <h1>{content}</h1>
                <img src={mainHeroImg} alt="imagem ilustrativa de um serviço de desenvolvimnto de sistema" />
            </main>
            <Button>Eu quero escalar!</Button>
        </>
    )
}