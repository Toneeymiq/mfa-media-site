import { Link } from "react-router-dom";
import "../components/assets/css/adminCss/adminCss.css";
import { useState, useEffect } from "react";
import AdminCss from "../components/assets/css/adminCss/adminCss.module.css";
import { MdArrowDropDown } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";

function AdminLinks(props) {
  const [ToggleAdd, setToggleAdd] = useState(false);

  const [isLoading, setisLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    setisLoading(true);
    fetch(
      "https://mfa-media-site-database-default-rtdb.firebaseio.com/" +
        props.categoryName
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

  return (
    <>
      <div className="category_title">
        {props.input}
        <label htmlFor={"add_" + props.category}>
          <li> <MdArrowDropDown size={20}/> {props.linkTitle}</li><hr />
        </label>
        <div className="clicked_link">
          <Link to={props.path}> <p>  <BsPlusCircle className={AdminCss.add_icon} size={12}/>  Add {props.linkTitle}</p> <hr /></Link>
          {ToggleAdd ? (
            <div>
              <div onClick={() => setToggleAdd(false)}>
                {" "}
                <p> <MdArrowDropDown /> Available {props.linkTitle}{" "}</p><hr />
              </div>
              {loadedMeetups.map((value) => {
                return (
                  <>
                    <div className={AdminCss.available_container}>
                      <h5>
                        {value.title} {value.Description}<hr />
                      </h5>
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            <div onClick={() => setToggleAdd(true)}>
              {" "}
              <p> <MdArrowDropDown />  Available {props.linkTitle}{" "}</p><hr />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminLinks;
