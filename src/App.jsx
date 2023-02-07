import { useState } from "react";
import { Navbar } from "./component/Navbar";
import { Hero } from "./component/Hero";
import Programmes from "./component/Programmes";
import Group from "./component/Group";
import Events from "./component/Events";
import Update from "./component/Update";
import AOS from "aos";
import Partners from "./component/Partners";
import Footer from "./component/Footer";
import Modal from "./component/Modal";
import "./style/style.css";

function App() {
  const [menu, setMenu] = useState(false);
  AOS.init();

  // Click to toggle menu bar
  const showMenu = () => {
    setMenu(!menu);
  };

  // remove menu bar
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      {menu && <Modal handleClick={closeMenu} />}
      <Navbar handleClick={showMenu}/>
      {/* <Hero /> */}
      {/* <Programmes /> */}
      {/* <Group /> */}
      {/* <Events /> */}
      {/* <Update /> */}
      {/* <Partners /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
