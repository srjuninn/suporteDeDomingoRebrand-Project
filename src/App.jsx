import '@src/App.scss'
// import Header from '@layouts/Header/Header'
// import SuporteDeDomingoLogoType from '@icons/sddLogoType'
// import SwitchLanguage from '@components/SwitchLanguage/SwitchLanguage'
import Main from '@layouts/Main/Main'
import Portfolio from './layouts/Portfolio/Portfolio'
import Services from '@layouts/Services/Service'

function App() {


  return (
    <>

      <Main content='Empresas sólidas Precisam de 
                      Um sistema Escalável!'/>
      <Portfolio/>
      <Services/>
    </>
  )
}

export default App
