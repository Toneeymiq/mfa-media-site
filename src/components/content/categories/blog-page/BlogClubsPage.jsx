import { useState, useEffect } from "react";
import BlogClubsContent from "./BlogClubsContent";

export function BlogClubsPage(props) {
  const [isLoading, setisLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/blogClubsLinks.json"
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

  return <BlogClubsContent BlogsContent={loadedMeetups} path={"blog/clubs/" + props.title} />;
}

