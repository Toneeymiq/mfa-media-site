import { useEffect, useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";
import { ColorRing } from "react-loader-spinner";
import { MusicSlider } from "../../content/categories/video-page/Music/MusicList";
import Homeimg from "../home/Homeimg";

import React from "react";
import HomeCss from "../../assets/css/homeCss/home.module.css";

import ContentBox from "../../content/Content-box";
import VideoCss from "../../assets/css/VideoCss/VideoCss.module.css";
import AnimationCss from "../../assets/css/overallCss/animations.module.css";
import { BsPlayBtn } from "react-icons/bs";
import PhotoContent from "../../content/categories/photos-page/photo-content";
import Photos from "../photos/Photos";
import VideoContent from "../../content/categories/video-page/video-firebase/video-content";
// import PhotosClubsSlider from "../../content/categories/photos-page/PhotosClubsPage";

function Home(props) {

  // const [isLoading, setisLoading] = useState(false)
  // const [loadedContent, setloadedContent] = useState([]);
  // const firebase_Link = [ "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoArtsLinks.json" ]
  // Documentary Search
  // const [loadedDocumentaries, setloadedMeetups] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/DocumentariesLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key],
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedMeetups(itemValue);
  //     });
  // }, []);

  // // FilmSearch
  // const [loadedFilm, setloadedFilm] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/filmLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key],
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedFilm(itemValue);
  //     });
  // }, []);

  // // VideoNewsSearch
  // const [loadedNewsVideo, setloadedNewsVideo] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoNewsLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key],
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedNewsVideo(itemValue);
  //     });
  // }, []);

  // // MusicSearch
  // const [loadedMusicVideo, setloadedMusicVideo] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/musicLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key],
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedMusicVideo(itemValue);
  //     });
  // }, []);

  // // Clubs&SocietiesSearch
  // const [loadedClubsVideo, setloadedClubsVideo] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoClubsLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key],
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedClubsVideo(itemValue);
  //     });
  // }, []);

  // // Education VideoSearch
  // const [loadedEducationVideo, setloadedEducationVideo] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoEducationLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key],
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedEducationVideo(itemValue);
  //     });
  // }, []);

  // // videoArtsSearch
  // const [loadedArtsVideo, setloadedArtsVideo] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoArtsLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key],
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedArtsVideo(itemValue);
  //     });
  // }, []);

  // // AdvertSearch
  // const [loadedAdvertVideo, setloadedAdvertVideo] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoAdvertLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key],
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedAdvertVideo(itemValue);
  //     });
  // }, []);

  // // ArtsPhoto Search
  // const [loadedArtsPhoto, setloadedArtsPhoto] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoArtsLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key],
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedArtsPhoto(itemValue);
  //     });
  // }, []);

  // // Clubs&Societies Search
  // const [loadedClubsPhoto, setloadedClubsPhoto] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoClubsLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key], 
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedClubsPhoto(itemValue);
  //     });
  // }, []);

  // // SportsPhoto Search
  // const [loadedSportsPhoto, setloadedSportsPhoto] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoSportsLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key],
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedSportsPhoto(itemValue);
  //     });
  // }, []);

  // // EducationPhoto Search
  // const [loadedEducationPhoto, setloadedEducationPhoto] = useState([]);

  // useEffect(() => {
  //   setisLoading(true);
  //   fetch([
  //     "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoEducationLinks.json",
  //   ])
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const itemValue = [];

  //       for (const key in data) {
  //         const item = {
  //           id: key,
  //           ...data[key],
  //         };

  //         itemValue.push(item);
  //       }

  //       setisLoading(false);
  //       setloadedEducationPhoto(itemValue);
  //     });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>Loading...</p>
  //     </section>
  //   );
  // }

  // const videoSearching = [
  //   ...loadedDocumentaries,
  //   ...loadedFilm,
  //   ...loadedMusicVideo,
  //   ...loadedNewsVideo,
  //   ...loadedClubsVideo,
  //   ...loadedEducationVideo,
  //   ...loadedArtsVideo,
  //   ...loadedAdvertVideo,
  // ];

  // const photoSearching = [
  //   // Photos Search
  //   ...loadedArtsPhoto,
  //   ...loadedClubsPhoto,
  //   ...loadedSportsPhoto,
  //   ...loadedEducationPhoto,
  // ];

  // if (isLoading) {
  //   return (
  //     <section>
  //       <ColorRing
  //         visible={true}
  //         height="80"
  //         width="80"
  //         ariaLabel="blocks-loading"
  //         wrapperStyle={{}}
  //         wrapperClass="blocks-wrapper"
  //         colors={[
  //           "deepskyblue",
  //           "deepskyblue",
  //           "blue",
  //           "deepskyblue",
  //           "#849b87",
  //         ]}
  //       />
  //     </section>
  //   );
  // }



  return (
    <>
      <Homeimg />
      <MusicSlider />
      

      <>
      <div className={VideoCss.category_title}>{props.category}</div>
      <div className={`${HomeCss.content} ${VideoCss.film_container}`}>

        <Photos />
        {/* <VideoContent /> */}
      </div>
    </>
      
      {/* <Photos />  */}
    </>
  );
}

export default Home;
