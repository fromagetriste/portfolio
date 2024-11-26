import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
import MyProjects from "./components/MyProjects";
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
    </>
  );
}

export default App;
