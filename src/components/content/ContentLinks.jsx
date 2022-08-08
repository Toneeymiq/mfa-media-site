import Iframe from "./Iframe";

const ContentLinks = [
  {
    link: <Iframe linking="https://www.youtube.com/embed/7cP5mghcO8U" />,
    title: (
      <a href="https://youtu.be/7cP5mghcO8U" target="_blank" rel="noreferrer">
        Out of time
      </a>
    ),
    Description: "By Maxwell Peter",
  },

  {
    title: (
      <a href="https://unsplash.com/@sparckey" target="_blank" rel="noreferrer">
        Nikon Camera
      </a>
    ),
    Description: "By Stephen Omondi",
    image: (
      <img
        src="https://images.unsplash.com/photo-1658232082258-01579e8077af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
    ),
  },

  {
    link: <Iframe linking="https://www.youtube.com/embed/d3EQQR6xRYQ" />,
    title: (
      <a href="https://youtu.be/d3EQQR6xRYQ" target="_blank" rel="noreferrer">
        Lift me up
      </a>
    ),
    Description: "By Jelly Dollar ft Zennah",
  },

  {
    // linking: <a href="https://unsplash.com/@sparckey"></a>,
    title: (
      <a href="https://unsplash.com/@sparckey" target="_blank" rel="noreferrer">
        Books on a Desktop
      </a>
    ),
    Description: "By Stephen Omondi",
    image: (
      <img
        src="https://images.unsplash.com/photo-1657958573270-b718e658bfc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
    ),
  },
  {
    link: <Iframe linking="https://www.youtube.com/embed/ot_c75rjNdo" />,
    title: (
      <a href="https://unsplash.com/@sparckey" target="_blank" rel="noreferrer">
        Blender car Animation
      </a>
    ),
    Description: "By Antony Mwangi",
  },
];
export default ContentLinks;
