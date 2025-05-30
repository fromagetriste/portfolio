import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MyProjects from "./components/MyProjects/MyProjects";
import MyStack from "./components/MyStack";
import Navbar from "./components/Navbar";
import RadioDescription from "./components/RadioDescription";
import Title from "./components/Title";

import "./styles/index.scss";

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <HeroSection />
      <MyStack />
      <AboutMe />
      <RadioDescription />
      <MyProjects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
