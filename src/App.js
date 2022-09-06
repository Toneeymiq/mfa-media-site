import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Video from "./components/pages/video/Video";
import Photos from "./components/pages/photos/Photos";
import About from "./components/pages/aboutUs/About";
import Services from "./components/pages/services/Services";
import Error from "./components/pages/404error/Error";
import "./App.css";
import "./index.css";
import{ FilmPage } from "./components/content/categories/video-page/Film";
import { VideoArtsPage } from "./components/content/categories/video-page/VideoArtsPage";
import Search from "./components/navbar/Search";
import Admin from "./databaseAdmin/Admin";
import AddArtsPhoto from "./databaseAdmin/addPhoto/AddArtsPhoto";
import AddClubsPhoto from "./databaseAdmin/addPhoto/AddClubsPhoto";
import AddNewsPhoto from "./databaseAdmin/addPhoto/AddNewsPhoto";
import AddSportsPhoto from "./databaseAdmin/addPhoto/AddSportsPhoto";
import AddEducationPhoto from "./databaseAdmin/addPhoto/AddEducationPhoto";
import AddNaturePhoto from "./databaseAdmin/addPhoto/AddNaturePhoto";

// Photo
import { PhotoNewsPage } from "./components/content/categories/photos-page/News-and-Events/PhotosNewsPage";
import { PhotosEducationPage } from "./components/content/categories/photos-page/Education/PhotoEducationPage";
import { PhotoArtsPage } from "./components/content/categories/photos-page/Arts/PhotoArtsPage";
import { PhotoSportsPage } from "./components/content/categories/photos-page/Sports/PhotosSportsPage";
import { PhotosClubsPage } from "./components/content/categories/photos-page/Clubs-and-societies/PhotosClubsPage";
import { PhotosNaturePage } from "./components/content/categories/photos-page/Nature/PhotosNaturePage";


// Videos
import AddArtsVideo from "./databaseAdmin/addVideo/AddArtsVideo";
import AddFilm from "./databaseAdmin/addVideo/AddFilm";
import AddMusicVideo from "./databaseAdmin/addVideo/AddMusicVideo";
import { MusicPage } from "./components/content/categories/video-page/Music";
import AddNewsVideo from "./databaseAdmin/addVideo/AddNewsVideo";
import { VideoNewsPage } from "./components/content/categories/video-page/VideoNewsPage";
import AddClubsVideo from "./databaseAdmin/addVideo/AddClubsVideo";
import { VideoCLubsPage } from "./components/content/categories/video-page/VideoClubsPage";
import AddEducationVideo from "./databaseAdmin/addVideo/AddEducationVideo";
import { VideoEducationPage } from "./components/content/categories/video-page/VideoEducationPage";
import { DocumentariesPage } from "./components/content/categories/video-page/Documentaries";
import AddDocumentariesVideo from "./databaseAdmin/addVideo/AddDocumentaryVideo";
import { VideoAdvertPage } from "./components/content/categories/video-page/VideoAdvertPage";
import AddAdvertVideo from "./databaseAdmin/addVideo/AddAdvertVideo";

// BLog
import AddArtsBlog from "./databaseAdmin/addBlog/addArtsBlog";
import { BlogArtsPage } from "./components/content/categories/blog-page/BlogArtsPage";
import { BlogNewsPage } from "./components/content/categories/blog-page/BlogNewsPage";
import AddNewsBlog from "./databaseAdmin/addBlog/AddNewsBlog";
import AddClubsBlog from "./databaseAdmin/addBlog/AddClubsBlog";
import AddSportsBlog from "./databaseAdmin/addBlog/AddSportsBlog";
import AddEducationalBlog from "./databaseAdmin/addBlog/AddEducationalBlog";
import AddInnovationBlog from "./databaseAdmin/addBlog/AddInnovationBlog";
import { BlogClubsPage } from "./components/content/categories/blog-page/BlogClubsPage";
import { BlogSportsPage } from "./components/content/categories/blog-page/BlogSportsPage";
import { BlogInnovationPage } from "./components/content/categories/blog-page/BlogInnovationPage";




function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Admin */}
        <Route path="/mfa-media-site/admin" element={<Admin />} />

        {/* Admin Pages */}
        {/*Adding Videos */}
        <Route path="/mfa-media-site/admin/video/music" element={<AddMusicVideo />} />
        <Route path="/mfa-media-site/admin/video/arts" element={<AddArtsVideo />} />
        <Route path="/mfa-media-site/admin/video/film" element={<AddFilm />} />
        <Route path="/mfa-media-site/admin/video/adverts" element={<AddAdvertVideo />} />
        <Route path="/mfa-media-site/admin/video/educational" element={<AddEducationVideo />} />
        <Route path="/mfa-media-site/admin/video/mini-documentaries" element={<AddDocumentariesVideo />} />
        <Route path="/mfa-media-site/admin/video/news&events" element={<AddNewsVideo />} />
        <Route path="/mfa-media-site/admin/video/clubs&societies" element={<AddClubsVideo />} />

        {/*Adding Photos */}
        <Route path="/mfa-media-site/admin/photos/arts" element={<AddArtsPhoto />} />
        <Route path="/mfa-media-site/admin/photos/news" element={<AddNewsPhoto />} />
        <Route path="/mfa-media-site/admin/photos/sports" element={<AddSportsPhoto />} />
        <Route path="/mfa-media-site/admin/photos/education" element={<AddEducationPhoto />} />
        <Route path="/mfa-media-site/admin/photos/clubs&societies" element={<AddClubsPhoto />} />
        <Route path="/mfa-media-site/admin/photos/nature" element={<AddNaturePhoto />} />

        {/* Adding Blog */}
        <Route path="/mfa-media-site/admin/blog/arts" element={<AddArtsBlog />} />
        <Route path="/mfa-media-site/admin/blog/news" element={<AddNewsBlog />} />
        <Route path="/mfa-media-site/admin/blog/clubs&societies" element={<AddClubsBlog />} />
        <Route path="/mfa-media-site/admin/blog/sports" element={<AddSportsBlog/>} />
        <Route path="/mfa-media-site/admin/blog/educational" element={<AddEducationalBlog />} />
        <Route path="/mfa-media-site/admin/blog/innovation" element={<AddInnovationBlog />} />

        {/* Pages */}
        <Route path="/video" element={<Video />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Services />} />

        {/* Video Pages*/}
        <Route path="/video/music" element={<MusicPage />} />
        <Route path="/video/arts" element={<VideoArtsPage />} />
        <Route path="/video/film" element={<FilmPage />} />
        <Route path="/video/adverts" element={<VideoAdvertPage />} />
        <Route path="/video/educational" element={<VideoEducationPage />} />
        <Route path="/video/mini-documentaries" element={<DocumentariesPage />} />
        <Route path="/video/news&events" element={<VideoNewsPage />} />
        <Route path="/video/clubs&societies" element={<VideoCLubsPage />} />
        
        {/* Photo Pages */}
        <Route path="/photos/arts" element={<PhotoArtsPage />} />
        <Route path="/photos/news" element={<PhotoNewsPage />} />
        <Route path="/photos/sports" element={<PhotoSportsPage />} />
        <Route path="/photos/education" element={<PhotosEducationPage />} />
        <Route path="/photos/clubs&societies" element={<PhotosClubsPage />} />
        <Route path="/photos/nature" element={<PhotosNaturePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />

        {/* Blogs Page */}
        <Route path="/blog/arts" element={<BlogArtsPage />} />
        <Route path="/blog/news" element={<BlogNewsPage />} />
        <Route path="/blog/clubs&societies" element={<BlogClubsPage />} />
        <Route path="/blog/sports" element={<BlogSportsPage />} />
        <Route path="/blog/innovation" element={<BlogInnovationPage/>} />

      </Routes>

      <Routes></Routes>
    </>
  );
}

export default App;
