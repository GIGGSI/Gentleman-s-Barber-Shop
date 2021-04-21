import React from 'react'
import './App.css';
import Home from './pages/Home'
import GlobalStyles from './components/globals/GlobalStyles'
import Navbar from './components/globals/Navbar/Navbar'
import Services from './components/home/Services';
import About from './components/home/About'
import ImageWrapper from './components/globals/Image Section/ImageWrapper'
import imgData from './image/barbar.jpg';
import barbar2 from './image/barbar2.jpg';
import contacts from './image/contacts.jpg';
import Dropdown from './components/globals/Navbar/Dropdown/Dropdown';
import ImgWrapper from './components/home/ImgWrapper';
import Mastars from './components/home/Mastars';
import Slider from './components/home/Slider/Slider';
import Footer from './components/globals/Footer/Footer';


function App() {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)

  }
  return <>
    <GlobalStyles />
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <section id="home">
      <Home />
    </section>
    <section>
      <ImageWrapper img={imgData}
        title="Първокачествено обслужване в уникална атмосфера"
        subTitle="Вече над 5 години ти помагаме да поддържаш брадата си и винаги да изглеждаш в най-добър вид. Ела в бръснарницата ни и опитай."
      />
    </section>
    <section id="about">
      <About />
    </section>
    <section>
      <ImageWrapper img={barbar2}
        title="Нашите майстори имат дългогодишен международен опит в бръснарството."
        subTitle="Това преживяване означава, че ние знаем как точно да ви накараме да изглеждате (и да се чувствате) изключително красив. Различните типове коса изискват различни техники за подстригване и подстригване. Наистина сте неописуеми и нашите бръснари ще препоръчат стила, който подхожда точно на вас."
      />
    </section>

    <section id="services">
      <Services />
    </section>
    <section>
      <ImgWrapper />
    </section>
    <section id="barbers">
      <Mastars />
    </section>
    <section>
      <Slider />
    </section>
    <section>
      <ImageWrapper img={contacts}
        title="Запази своя час сега!"
        subTitle="0876117890"
      />
    </section>
    <section>
      <Footer />
    </section>

  </>
}

export default App
