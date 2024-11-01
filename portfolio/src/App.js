import "./App.css";
import Navi from "./Navigation/navigation";
import Hero from "./Hero Section/Hero";
import Aboutus from "./About me/About";
import Pro from "./Projects/Zora";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";
import Tools from "./Tools/Horizontal";
function App() {
  return (
    <>
      <Navi />
      <Hero />
      <Aboutus />
      <Pro />
      <Services />
      <Tools />
      <Footer />
    </>
  );
}

export default App;
