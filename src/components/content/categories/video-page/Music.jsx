import SliderSettings from "../SliderSettings";
import { useState, useEffect } from "react";
import MusicList from "./MusicList";

export function MusicPage(props) {
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

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return <MusicList MusicLinks={loadedMeetups} />;
}

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
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <>
      <SliderSettings
        mapping={loadedMeetups}
        category="Music Videos"
        path="/video/music"
      />
    </>
  );
}


