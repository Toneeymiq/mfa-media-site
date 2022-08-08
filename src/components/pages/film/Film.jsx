import ContentBox from '../../content/Content-box';
import FilmLinks from './FIlmLinks';
import HomeCss from '../../assets/css/homeCss/home.module.css'

function FilmContent() {
  return (
    <div className={HomeCss.content}>
      <div className={HomeCss.film_title}><h1>Videography</h1></div>
      {FilmLinks.map((value) => {
        return (
          <ContentBox
            title={value.title}
            description={value.Description}
            link={value.link}
          ></ContentBox>
        );
      })}
    </div>
  );
}


export default FilmContent;