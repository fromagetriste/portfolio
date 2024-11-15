import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";
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
    </>
  );
}

export default App;
