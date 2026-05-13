import './i18n'
import { useTranslation } from 'react-i18next'
import Main from '@layouts/Main/Main'
import Portfolio from '@layouts/Portfolio/Portfolio'
import Services from '@layouts/Services/Service'
import Footer from '@layouts/Footer/Footer'

function App() {
  const { t } = useTranslation()

  return (
    <>
      <Main />
      <Portfolio />
      <Services title={t('nav.services')} />
      <Footer 
        companyName={t('footer.companyName')} 
        tagLine={t('footer.tagLine')} 
        rightsReserved={t('footer.rightsReserved')} 
        copyRight={t('footer.copyRight')} 
        date={t('footer.date')}
      />
    </>
  )
}

export default App
