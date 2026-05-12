import '@src/App.scss'
// import Header from '@layouts/Header/Header'
// import SuporteDeDomingoLogoType from '@icons/sddLogoType'
// import SwitchLanguage from '@components/SwitchLanguage/SwitchLanguage'
import Main from '@layouts/Main/Main'
import Portfolio from '@layouts/Portfolio/Portfolio'
import Services from '@layouts/Services/Service'
import Footer from '@layouts/Footer/Footer'

function App() {


  return (
    <>
      <Main content='Empresas sólidas Precisam de 
                      Um sistema Escalável!'/>
      <Portfolio/>
      <Services title="Serviços"/>
      <Footer 
        companyName="SUPORTE DE DOMINGO" 
        tagLine="Quero ver meu negocio crescer!" 
        rightsReserved="Todos os direitos reservados" 
        copyRight="&copy2026" date="A data de hoje é a data de hoje"/>
    </>
  )
}

export default App
