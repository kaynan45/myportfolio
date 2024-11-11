import "./App.css";
import Home from "./Components/Home";
import About from "./Components/Layout/About"
import Experiences from "./Components/Layout/Experiences"
import Projects from "./Components/Layout/Projects"
import Contact from "./Components/Layout/Contact"
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
