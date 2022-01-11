// import logo from './logo.svg';
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link> |
      <Link to="/contact">Contact</Link> |
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About
        />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
