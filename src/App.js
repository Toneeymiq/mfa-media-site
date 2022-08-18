import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Video from "./components/pages/video/Video";
import Design from "./components/pages/design/Design";
import Photos from "./components/pages/photos/Photos";
import About from "./components/pages/aboutUs/About";
import Services from "./components/pages/services/Services";
import Error from "./components/pages/404error/Error";
import Arts from "./components/content/categories/Arts";
import "./App.css";
import "./index.css";
import Music from "./components/content/categories/Music";
// import Film from "./components/content/categories/entertainment/Film";
import Entertainment from "./components/content/categories/Entertainment";
import Film from "./components/content/categories/entertainment/Film";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/design" element={<Design />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/video/music" element={<Music />} />
        <Route path="/video/arts" element={<Arts />} />
        <Route path="/video/entertainment" element={<Entertainment />} />
        <Route path="/video/entertainment/film" element={<Film />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
