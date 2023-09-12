import Home from "./components/Home"
import About from "./components/About"
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbarmenu from "./components/NavMenu"
import FooterComp from './components/FooterComp'

export default function App() {
  return (
    <>
    <div className="bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100">
      <Navbarmenu/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <FooterComp/>
    </div>
    </>
  )
}
