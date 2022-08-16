import Design from "../design/Design";
import FilmContent from "../film/Film";
import Photography from "../photography/Photography";
import Homeimg from "./Homeimg";

function Home() {
  return (
    <>
      <Homeimg />
      <FilmContent />
      {/* <Design /> */}
      <Photography />
    </>
  );
}

export default Home;
