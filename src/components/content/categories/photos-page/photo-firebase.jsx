import { ColorRing } from "react-loader-spinner";
import "react-loader-spinner";
import { useEffect, useState } from "react";
import PhotoContent from "./photo-content";

export function PhotoFirebase(props) {
  const [isLoading, setisLoading] = useState(true);
  const [loadedContent, setloadedContent] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(props.firebase_Link)
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
        setloadedContent(itemValue);
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
      <PhotoContent category={props.category} PhotosContent={loadedContent}/>
    </>
  );
}
