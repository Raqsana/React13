import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function Nav() {
  return (
    <header>
      <nav className="nav">
        <Link className="nav-link" to="/About">
          About
        </Link>
        <Link className="nav-link" to="/Contact">
         Contact
        </Link>
        <Link className="nav-link" to="/Projects">
          Projects
        </Link>
      </nav>
    </header>
  );
}

function Page() {
  return (
    <main>
      <Routes>
        <Route path="/About" element={<About />}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Projects" element={<Projects />}/>
      </Routes>
      
        
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Page />
    </BrowserRouter>
  );
}

export default App;