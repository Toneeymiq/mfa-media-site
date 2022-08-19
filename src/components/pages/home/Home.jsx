import Design from "../design/Design";
import VideContent from "../video/Video";
import Photos from "../photos/Photos";
import Homeimg from "./Homeimg";
import Arts from "../../content/categories/Arts";
import Entertainment from "../../content/categories/Entertainment";
import Music, { MusicPage } from "../../content/categories/Music";

function Home() {
  return (
    <>
      <Homeimg />
      <Music />
      <Arts />
      <Photos />
    </>
  );
}

export default Home;
