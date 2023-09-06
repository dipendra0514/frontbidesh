import Navbar from "./components/NavBar/navbar";
import Intro from "./components/NavBar/Intro/intro";
import Skills from "./components/Skills/skills";
import Service from "./components/Service/Service";
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
