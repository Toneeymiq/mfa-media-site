import AdminCss from "../components/assets/css/adminCss/adminCss.module.css";
import AdminLinks from "./AdminLinks";

function Admin(props) {
  return (
    <>
      <div className={AdminCss.admin_container}>
        <h3 className={AdminCss.welcome_message}>
          Welcome to the Admin Page. What would you like to add ?
        </h3>
        <div className={AdminCss.links_container}>
          <h4>
            Add Video <hr />{" "}
          </h4>
          <ul className={AdminCss.video_links}>
            <AdminLinks
              linkTitle="Music"
              path="video/music"
              input={
                <input
                  type="checkbox"
                  id="add_music"
                  className={AdminCss.add_checkbox}
                />
              }
              category="music"
              categoryName="musicLinks.json"
            />
            <AdminLinks
              linkTitle="News & Events"
              path="video/news&events"
              input={
                <input
                  type="checkbox"
                  id="add_news_video"
                  className={AdminCss.add_checkbox}
                />
              }
              category="news_video"
              categoryName="videoNewsLinks.json"
            />
            <AdminLinks
              linkTitle="Clubs & Societies"
              path="video/clubs&societies"
              input={
                <input
                  type="checkbox"
                  id="add_clubs_video"
                  className={AdminCss.add_checkbox}
                />
              }
              category="clubs_video"
              categoryName="videoClubsLinks.json"
            />
            <AdminLinks
              linkTitle="Mini Documentaries"
              path="video/mini-documentaries"
              input={
                <input
                  type="checkbox"
                  id="add_mini-documentaries"
                  className={AdminCss.add_checkbox}
                />
              }
              category="mini-documentaries"
              categoryName="DocumentariesLinks.json"
            />
            <AdminLinks
              linkTitle="Adverts"
              path="video/adverts"
              input={
                <input
                  type="checkbox"
                  id="add_advert_video"
                  className={AdminCss.add_checkbox}
                />
              }
              category="advert_video"
              categoryName="videoAdvertLinks.json"
            />
            <AdminLinks
              linkTitle="Short Film"
              path="video/film"
              input={
                <input
                  type="checkbox"
                  id="add_film"
                  className={AdminCss.add_checkbox}
                />
              }
              category="film"
              categoryName="filmLinks.json"
            />
            <AdminLinks
              linkTitle="Arts"
              path="video/arts"
              input={
                <input
                  type="checkbox"
                  id="add_arts_video"
                  className={AdminCss.add_checkbox}
                />
              }
              category="arts_video"
              categoryName="videoArtsLinks.json"
            />
            <AdminLinks
              linkTitle="Educational"
              path="video/educational"
              input={
                <input
                  type="checkbox"
                  id="add_educational_video"
                  className={AdminCss.add_checkbox}
                />
              }
              category="educational_video"
              categoryName="videoEducationLinks.json"
            />
          </ul>
{/* photos */}
          <h4>
            Add Photo <hr />{" "}
          </h4>

          <ul className={AdminCss.photo_links}>
            <AdminLinks
              linkTitle="Arts"
              path="photos/arts"
              input={
                <input
                  type="checkbox"
                  id="add_arts_photo"
                  className={AdminCss.add_checkbox}
                />
              }
              category="arts_photo"
              categoryName="photoArtsLinks.json"
            />
            <AdminLinks
              linkTitle="News & Events"
              path="photos/news"
              input={
                <input
                  type="checkbox"
                  id="add_news_photo"
                  className={AdminCss.add_checkbox}
                />
              }
              category="news_photo"
              categoryName="photoNewsLinks.json"
            />
            <AdminLinks
              linkTitle="Sports"
              path="photos/sports"
              input={
                <input
                  type="checkbox"
                  id="add_sports_photo"
                  className={AdminCss.add_checkbox}
                />
              }
              category="sports_photo"
              categoryName="photoSportsLinks.json"
            />
            <AdminLinks
              linkTitle="Education"
              path="photos/education"
              input={
                <input
                  type="checkbox"
                  id="add_educational_photo"
                  className={AdminCss.add_checkbox}
                />
              }
              category="educational_photo"
              categoryName="photoEducationLinks.json"
            />
            <AdminLinks
              linkTitle="Clubs & Societies"
              path="photos/clubs&societies"
              input={
                <input
                  type="checkbox"
                  id="add_clubs_photo"
                  className={AdminCss.add_checkbox}
                />
              }
              category="clubs_photo"
              categoryName="photoClubsLinks.json"
            />
          </ul>

          <h4>Add BLog Content</h4>
          <ul className={AdminCss.photo_links}>
            <AdminLinks
              linkTitle="Arts blog"
              path="blog/arts"
              input={
                <input
                  type="checkbox"
                  id="add_arts_blog"
                  className={AdminCss.add_checkbox}
                />
              }
              category="arts_blog"
              categoryName="blogArtsLinks.json"
            />
            <AdminLinks
              linkTitle="News & Events blog"
              path="blog/news"
              input={
                <input
                  type="checkbox"
                  id="add_news_blog"
                  className={AdminCss.add_checkbox}
                />
              }
              category="news_blog"
              categoryName="blogNewsLinks.json"
            />
            <AdminLinks
              linkTitle="Clubs & Societies blog"
              path="blog/clubs&societies"
              input={
                <input
                  type="checkbox"
                  id="add_clubs_blog"
                  className={AdminCss.add_checkbox}
                />
              }
              category="clubs_blog"
              categoryName="blogClubsLinks.json"
            />
            <AdminLinks
              linkTitle="Sports blog"
              path="blog/sports"
              input={
                <input
                  type="checkbox"
                  id="add_sports_blog"
                  className={AdminCss.add_checkbox}
                />
              }
              category="sports_blog"
              categoryName="blogSportsLinks.json"
            />
            <AdminLinks
              linkTitle="Educational blog"
              path="blog/educational"
              input={
                <input
                  type="checkbox"
                  id="add_educational_blog"
                  className={AdminCss.add_checkbox}
                />
              }
              category="educational_blog"
              categoryName="blogEduacationalLinks.json"
            />
            <AdminLinks
              linkTitle="Innovation blog"
              path="blog/innovation"
              input={
                <input
                  type="checkbox"
                  id="add_innovation_blog"
                  className={AdminCss.add_checkbox}
                />
              }
              category="innovation_blog"
              categoryName="blogInnovationLinks.json"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Admin;
