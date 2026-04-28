import Header from '@layouts/Header'
import '@styles/app.scss'

function App() {
  const navLinks = [
    {href: '#home', label:'Home'},
    {href: '#projects', label:'Projects'},
    {href: '#services', label:'Services'},
    {href: '#contact', label:'Contact'},
  ]

  return (
   <Header links={navLinks} />
  )
}

export default App
