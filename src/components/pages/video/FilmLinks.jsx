
import OutOfTime from "../../assets/images/maxwell/out-of-time.jpg";
import OutOfTimeTrailor from "../../assets/images/maxwell/out-of-time-trailor.jpg";

const FilmLinks = [
  {
    link: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UmKzXxkz2Fs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
      ></iframe>
    ),
    title: "Out of time Trailor",
    Description: "Short film by Maxwell Peter",
    image: OutOfTimeTrailor,
    category: "film",
    path: "#/video/film"
  },
  {
    link: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7cP5mghcO8U"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
      ></iframe>
    ),
    title: "Out of time",
    Description: "Short film By Maxwell Peter",
    image: OutOfTime,
    category: "film",
    path: "#/video/film"
    }
]
export default FilmLinks;