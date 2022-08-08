import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Film from "./components/pages/film/Film";
import Design from "./components/pages/design/Design";
import Photography from "./components/pages/photography/Photography";
import About from "./components/pages/aboutUs/About";
import Services from "./components/pages/services/Services";
import Error from "./components/pages/404error/Error";
import "./App.css";

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/film" element={<Film />} />
        <Route path="/design" element={<Design />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;