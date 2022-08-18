import SnowHouseModel from "../../assets/images/miqkniq/snow-house.jpg";
import RoomModel from "../../assets/images/miqkniq/room-model.jpg";
import CharacterModel from "../../assets/images/miqkniq/character-model.jpg";
import Einstein from "../../assets/images/miqkniq/einstein.jpg";
import CarModel from "../../assets/images/miqkniq/car-animation.jpg";

const ArtsLinks = [
    {
        link: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ot_c75rjNdo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        ),
        title: "Blender Car Animation",
        Description: "Blender Model by Miqkniq",
        image: CarModel,
        category: "arts",
      },

      {
        link: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Eh9DVNfoPlk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        ),
        title: "Blender Snow House Model",
        Description: "Blender Model by Miqkniq",
        image: SnowHouseModel,
        category: "arts",
      },
      
  {
    link: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/F1kCvmeuHSc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
      ></iframe>
    ),
    title: "Blender bed room Model",
    Description: "Blender Model by Miqkniq",
    image: RoomModel,
    category: "arts",
  },
  
  {
    link: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fgklFv98s2E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
      ></iframe>
    ),
    title: "Albert Einstein pencil drawing",
    Description: "By Miqkniq",
    image: Einstein,
    category: "arts",
  },
  
  {
    link: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/a9K82sf_0DI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="allowfullscreen"
      ></iframe>
    ),
    title: "Blender character Model",
    Description: "Blender Model by Miqkniq",
    image: CharacterModel,
    category: "arts",
  },
]

export default ArtsLinks;