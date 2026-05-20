import '@layouts/Main/Main.scss'
import { useEffect, useState } from 'react'
import Button from '@components/Button/Button'
import mainHeroImg from '@images/mainHeroImg.png'
import Header from '@layouts/Header/Header'
import SuporteDeDomingoLogoType from '@icons/sddLogoType'
import SwitchLanguage from '@components/SwitchLanguage/SwitchLanguage'
import { useTranslation } from 'react-i18next'
import { openWhatsapp } from '@utils/openWhatsapp'

export default function Main() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#services', label: t('nav.services') },
    { href: '#contact', label: t('nav.contact') },
  ]

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const handleNavClick = (href) => {
    const targetId = href === '#contact' ? '#socials' : href
    const section = document.querySelector(targetId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }

    closeMenu()
  }

  return (
    <main>
      <button
        className={`hamburguer ${isMenuOpen ? 'active' : ''}`}
        type="button"
        onClick={() => setIsMenuOpen((state) => !state)}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <span className="hamburgerIcon" aria-hidden="true" />
      </button>

      <div className={`mobileMenu ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(event) => {
                    event.preventDefault()
                    handleNavClick(href)
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <SuporteDeDomingoLogoType />
      <Header links={navLinks} />
      <SwitchLanguage isMenuOpen={isMenuOpen} />
      <div className="mainContent">
        <h1>{t('main.title')}</h1>
        <img src={mainHeroImg} alt="imagem ilustrativa de um serviço de desenvolvimento de sistema" />
      </div>
      <Button onClick={openWhatsapp}>{t('main.button')}</Button>
    </main>
  )
}
