import Content from "../../content/Content";
import Design from "../design/Design";
import FilmContent from "../film/Film";
import Photography from "../photography/Photography";

function Home() {
  return (
    <>
      <Content />
      <FilmContent />
      <Design />
      <Photography />
    </>
  );
}

export default Home;
