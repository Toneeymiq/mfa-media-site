import Design from "../design/Design";
import VideContent from "../video/Video";
import Photos from "../photos/Photos";
import Homeimg from "./Homeimg";
import Music from "../../content/categories/Music";
import Film from "../../content/categories/entertainment/Film";
import Arts from "../../content/categories/Arts";
import Entertainment from "../../content/categories/Entertainment";

function Home() {
  return (
    <>
      <Homeimg />
    <Entertainment />
      <Arts />
      <Photos />
    </>
  );
}

export default Home;
