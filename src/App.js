import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About"
import Social from "./components/Social"
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black">
    <Navbar />
    <Hero />
    <Social />
    <Skills />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
