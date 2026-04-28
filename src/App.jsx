import '@styles/app.scss'
import Header from '@layouts/Header'
import MainLayout from '@layouts/Main'
import SuporteDeDomingoLogoType from '@icons/sddLogoType'
import SwitchLanguage from '@components/SwitchLanguage'

function App() {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
    <SuporteDeDomingoLogoType/>
      <MainLayout />
      <Header links={navLinks} />
      <SwitchLanguage language="Portugese"/>
    </>
  )
}

export default App
