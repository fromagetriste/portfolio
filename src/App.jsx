import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import HeroSection from "./components/HeroSection";
import MyProjects from "./components/MyProjects/MyProjects";
import MyStack from "./components/MyStack";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

import "./styles/index.scss";

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <HeroSection />
      <AboutMe />
      <MyStack />
      <MyProjects />
      <ContactMe />
    </>
  );
}

export default App;
