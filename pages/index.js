import {useEffect} from 'react'
import About from '../Components/About/About'
import Academy from '../Components/Academy/Academy'
import Contact from '../Components/ContactUs/Contact'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
import Navbar from '../Components/navbar/Navbar'
import Services from '../Components/Services/Services'
import Software from '../Components/Software/Software'
import Testmonial from '../Components/Testmonial/Testmonial'
export default function HomePage() {

  return (
    <>
      <Navbar page={"home"} />
      <Services setBg={"dark"} />
      <About />
      <Software />
      <Academy />
      <Testmonial />
      <Contact />
      <Footer />
    </>
  )
}
