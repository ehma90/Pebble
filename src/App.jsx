import {Navbar} from "./component/Navbar"
import {Hero } from "./component/Hero"
import './style/style.css'
import Programmes from "./component/Programmes"
import Group from "./component/Group"
import Events from "./component/Events"
import Update from "./component/Update"
import AOS from 'aos';
import Partners from "./component/Partners"
import Footer from "./component/Footer"

function App() {
  AOS.init()

  return (
    <>
      <Navbar/>
      <Hero/>
      <Programmes/>
      <Group/>
      <Events/>
      <Update/>
      <Partners/>
      <Footer/>
    </>
  )
}

export default App
