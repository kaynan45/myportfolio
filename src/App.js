import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/contactMe" />
        <Route path="/projects" />
      </Routes>
    </Router>
  );
}

export default App;
