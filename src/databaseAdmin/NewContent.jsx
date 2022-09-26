import React from "react";
import classes from "../components/assets/css/adminCss/NewContent.module.css";
import { useRef } from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

function NewContent(props) { 
  function NewContentForm() {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const linkInputRef = useRef();
    const descriptionInputRef = useRef();
    const categoryInputRef = useRef();
    const dateInputRef = useRef();
    const nameInputRef = useRef();

    function submitHandler(event) {
      event.preventDefault();

      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredLink = linkInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;
      const enteredCategory = categoryInputRef.current.value;
      const enteredDate = dateInputRef.current.value;
      const enteredName = nameInputRef.current.value;

      const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        link: enteredLink,
        Description: enteredDescription,
        Category: enteredCategory,
        date: enteredDate,
        Name: enteredName,
      };

      addMeetupHandler(meetupData);
    }
    return (
      <>
        <form className={classes.form} onSubmit={submitHandler}>
          <h2>Add new {props.category}</h2>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image Link</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="link">
              Reference Link (Iframe Link for YouTube Videos)
            </label>
            <input type="text" required id="link" ref={linkInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="category">Category</label>
            <input type="text" required id="category" ref={categoryInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Date</label>
            <input type="text" required id="date" ref={dateInputRef} />
          </div>
          {props.name}
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" required id="name" ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <Link to="/tdl-tv/admin">
              <div className={classes.back_btn}>
                {" "}
                <MdArrowBack /> Back
              </div>
            </Link>
            <button>Add {props.category}</button>
          </div>
        </form>
      </>
    );
  }

  function addMeetupHandler(meetupData) {
    fetch(props.firebaseLink, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      return (
        alert("Added" + (props.category))
      )
    });
  }

  return (
    <section className={classes.new_content_container}>
      <NewContentForm />
    </section>
  );
}

export default NewContent;
