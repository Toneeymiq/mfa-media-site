import { useState } from "react";
import { RiCloseLine, RiExternalLinkLine, RiSearch2Line } from "react-icons/ri";
import ContentBox from "../content/Content-box";
import SearchBarCss from "../assets/css/navbarCss/searchBarCss.module.css";
import HomeCss from "../assets/css/homeCss/home.module.css";
import AnimationCss from "../assets/css/overallCss/animations.module.css";
import { BsArrowRight, BsPlayBtn } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import VideoCss from "../assets/css/VideoCss/VideoCss.module.css";
import { useEffect } from "react";

export function Search_icon(props) {
  return (
    <div className={SearchBarCss.search_container}>
      <RiSearch2Line onClick={props.onClick} color="var(--text-color" />
      <p1>Search Mfa Media Site</p1>
    </div>
  );
}

function Search() {
  const UnToggleSearch = useNavigate();

  const [toggleSearch, setToggleSearch] = useState(false);

  const [filter, setfilter] = useState("");

  const searchText = (event) => {
    setfilter(event.target.value);
  };

  const [isLoading, setisLoading] = useState(true);

  // Documentary Search
  const [loadedDocumentaries, setloadedMeetups] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/DocumentariesLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedMeetups(itemValue);
      });
  }, []);

  // FilmSearch
  const [loadedFilm, setloadedFilm] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/filmLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedFilm(itemValue);
      });
  }, []);

  // VideoNewsSearch
  const [loadedNewsVideo, setloadedNewsVideo] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoNewsLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedNewsVideo(itemValue);
      });
  }, []);

  // MusicSearch
  const [loadedMusicVideo, setloadedMusicVideo] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/musicLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedMusicVideo(itemValue);
      });
  }, []);

  // Clubs&SocietiesSearch
  const [loadedClubsVideo, setloadedClubsVideo] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoClubsLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedClubsVideo(itemValue);
      });
  }, []);

  // Education VideoSearch
  const [loadedEducationVideo, setloadedEducationVideo] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoEducationLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedEducationVideo(itemValue);
      });
  }, []);

  // videoArtsSearch
  const [loadedArtsVideo, setloadedArtsVideo] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoArtsLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedArtsVideo(itemValue);
      });
  }, []);

  // AdvertSearch
  const [loadedAdvertVideo, setloadedAdvertVideo] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/videoAdvertLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedAdvertVideo(itemValue);
      });
  }, []);

  // ArtsPhoto Search
  const [loadedArtsPhoto, setloadedArtsPhoto] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoArtsLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedArtsPhoto(itemValue);
      });
  }, []);

  // Clubs&Societies Search
  const [loadedClubsPhoto, setloadedClubsPhoto] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoClubsLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key], 
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedClubsPhoto(itemValue);
      });
  }, []);

  // SportsPhoto Search
  const [loadedSportsPhoto, setloadedSportsPhoto] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoSportsLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedSportsPhoto(itemValue);
      });
  }, []);

  // EducationPhoto Search
  const [loadedEducationPhoto, setloadedEducationPhoto] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch([
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/photoEducationLinks.json",
    ])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itemValue = [];

        for (const key in data) {
          const item = {
            id: key,
            ...data[key],
          };

          itemValue.push(item);
        }

        setisLoading(false);
        setloadedEducationPhoto(itemValue);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const videoSearching = [
    ...loadedDocumentaries,
    ...loadedFilm,
    ...loadedMusicVideo,
    ...loadedNewsVideo,
    ...loadedClubsVideo,
    ...loadedEducationVideo,
    ...loadedArtsVideo,
    ...loadedAdvertVideo,
  ];

  const photoSearching = [
    // Photos Search
    ...loadedArtsPhoto,
    ...loadedClubsPhoto,
    ...loadedSportsPhoto,
    ...loadedEducationPhoto,
  ];
  let videoDataSearch = videoSearching.filter((items) => {
    return Object.keys(items).some((key) =>
      items[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLocaleLowerCase())
    );
  });
  let photoDataSearch = photoSearching.filter((items) => {
    return Object.keys(items).some((key) =>
      items[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLocaleLowerCase())
    );
  });

  return (
    <div className={SearchBarCss.search_bar}>
      <div className={SearchBarCss.search_iconfield}>
        {toggleSearch ? (
          <>
            <input
              type="text"
              id="searchIcon"
              placeholder="Search Mfa Media..."
              value={filter}
              onChange={searchText.bind(this)}
              onKeyDown={() => setToggleSearch(true)}
            />
          </>
        ) : (
          <>
            <input
              id="searchIcon"
              type="text"
              placeholder="Search Mfa Media..."
              value={filter}
              onChange={searchText.bind(this)}
              onKeyDown={() => setToggleSearch(true)}
            />
          </>
        )}
        {toggleSearch && (
          <>
            {videoDataSearch.map((value, index) => {
              return (
                <>
                  <div
                    className={`${HomeCss.content} ${SearchBarCss.search_content} ${VideoCss.film_container}`}
                  >
                    <ContentBox
                      className={HomeCss.search_contentbox}
                      title={
                        <a href={value.link} target="_blank" rel="noreferrer">
                          {value.title} by {value.Name}<RiExternalLinkLine  />
                        </a>
                      }
                      image={
                        <div className={HomeCss.video_div}>
                          <div className={HomeCss.play_button}>
                            <BsPlayBtn color="red" size={22} />
                          </div>
                          <img src={value.image} alt="" />
                        </div>
                      }
                      link={
                        <div
                          className={`${VideoCss.iframe_container} ${AnimationCss.tracking_in_expand}`}
                        >
                          <iframe
                            width="560"
                            height="315"
                            src={value.link}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen"
                          ></iframe>
                        </div>
                      }
                    ></ContentBox>
                  </div>
                </>
              );
            })}
            {photoDataSearch.map((value, index) => {
              return (
                <>
                  <div
                    className={`${HomeCss.content} ${SearchBarCss.search_content} ${VideoCss.film_container}`}
                  >
                    <ContentBox
                      className={HomeCss.search_contentbox}
                      title={
                        <a href={value.link} target="_blank" rel="noreferrer">
                          {value.title} by {value.Name}<RiExternalLinkLine  />
                        </a>
                      }
                      image={
                        <div className={HomeCss.video_div}>
                          <img src={value.image} alt="" />
                        </div>
                      }
                      link={
                        <div
                          className={`${VideoCss.photo_container} ${AnimationCss.tracking_in_expand}`}
                        >
                          {<img src={value.image} alt={value.title} />}
                          <div className={VideoCss.Clickedimage_description}>
                            <div className={VideoCss.clickedimage_title}>
                              <p>{value.title}</p>
                              <div className={VideoCss.external_link}>
                                {" "}
                                <h3>{value.Name}</h3>{" "}
                                <a
                                  href={value.link}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {" "}
                                  <h2>
                                    Visit Site
                                    <RiExternalLinkLine
                                      size={25}
                                      className={VideoCss.arrow}
                                    />{" "}
                                  </h2>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    ></ContentBox>
                  </div>
                </>
              );
            })}

            <div className={SearchBarCss.close_searchbtn}>
              <RiCloseLine
                color="var(--text-color)"
                size={40}
                onClick={() => UnToggleSearch(-1)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
