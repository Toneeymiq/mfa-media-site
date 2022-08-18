import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import VideoLinks from "../pages/video/VideoLinks";
import PhotosLinks from "../pages/photos/PhotoLinks";
import ContentBox from "../content/Content-box";
import SearchBarCss from '../assets/css/navbarCss/searchBarCss.module.css'

function Search() {
  const [toggleSearch, setToggleSearch] = useState(false);

  const [filter, setfilter] = useState("");

  const searchText = (event) => {
    setfilter(event.target.value);
  };
  let videoDataSearch = VideoLinks.filter((items) => {
    return Object.keys(items).some((key) =>
      items[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLocaleLowerCase())
    );
  });

  let photoDataSearch = PhotosLinks.filter((items) => {
    return Object.keys(items).some((key) =>
      items[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLocaleLowerCase())
    );
  });

  document.addEventListener("click", () => setToggleSearch(false));

  return (
    <div className={SearchBarCss.search_bar}>
      <div className={SearchBarCss.search_iconfield}>
        {toggleSearch ? (
          <>
            <RiSearch2Line />
            <input
              type="text"
              placeholder="Search Mfa Media..."
              value={filter}
              onChange={searchText.bind(this)}
              onKeyDown={() => setToggleSearch(true)}
            />
          </>
        ) : (
          <>
            <RiSearch2Line />
            <input
              type="text"
              placeholder="Search Mfa Media..."
              value={filter}
              onChange={searchText.bind(this)}
              onKeyDown={() => setToggleSearch(true)}
            />
          </>
        )}
        {toggleSearch && (
          <div
            className={SearchBarCss.search_links}
            onClick={() => setToggleSearch(false)}
          >
            <div className={SearchBarCss.search_container}>
              {photoDataSearch.map((value, index) => {
                return (
                  <div className={SearchBarCss.search_content}>
                    <p>
                      {value.title + " "}
                      {value.Description}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className={SearchBarCss.search_container}>
              {videoDataSearch.map((value, index) => {
                return (
                  <div className={SearchBarCss.search_content}>
                    <p>
                      {value.title + " "}
                      {value.Description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
