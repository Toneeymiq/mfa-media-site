import SliderSettings from "../../SliderSettings";
import { useState, useEffect } from "react";

import { ColorRing } from "react-loader-spinner";
import "react-loader-spinner";


export function MusicSlider() {
  const [isLoading, setisLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/musicLinks.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setisLoading(false);
        setloadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={[
            "deepskyblue",
            "deepskyblue",
            "blue",
            "deepskyblue",
            "#849b87",
          ]}
        />
      </section>
    );
  }

  return (
    <>
      <SliderSettings
        mapping={loadedMeetups}
        category="Music"
        path="/video/music"
      />
    </>
  );
}
