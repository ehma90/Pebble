import {Navbar} from "./component/Navbar"
import {Hero } from "./component/Hero"
import './style/style.css'
import Programmes from "./component/Programmes"
import Group from "./component/Group"
import AOS from 'aos';

function App() {
  AOS.init()

  return (
    <>
      <Navbar/>
      <Hero/>
      <Programmes/>
      <Group/>
    </>
  )
}

export default App
