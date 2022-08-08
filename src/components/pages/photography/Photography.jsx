import HomeCss from '../../assets/css/homeCss/home.module.css'
import ContentBox from '../../content/Content-box';
import PhotographyLinks from './PhotographyLinks';
import PhotographyCss from '../../assets/css/photographyCss/photographyCss.module.css'

function Photography() {
  return (
    <div className={PhotographyCss.photography_container}>
      <div className={HomeCss.film_title}><h1>Photography</h1></div>
      <div className={HomeCss.content}>
        {PhotographyLinks.map((value) => {
          return (
            <ContentBox
              title={value.title}
              description={value.Description}
              linking={value.link}
              img={value.image}
            >
            </ContentBox>
          );
        })}
      </div>
    </div>
  );
}

export default Photography;
