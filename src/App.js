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
import Search from "./components/navbar/Search";
import Admin from "./databaseAdmin/Admin";

// Add Photos
import AddArtsPhoto from "./databaseAdmin/addPhoto/AddArtsPhoto";
import AddClubsPhoto from "./databaseAdmin/addPhoto/AddClubsPhoto";
import AddNewsPhoto from "./databaseAdmin/addPhoto/AddNewsPhoto";
import AddSportsPhoto from "./databaseAdmin/addPhoto/AddSportsPhoto";
import AddEducationPhoto from "./databaseAdmin/addPhoto/AddEducationPhoto";
import AddNaturePhoto from "./databaseAdmin/addPhoto/AddNaturePhoto";



//Add Videos
import AddArtsVideo from "./databaseAdmin/addVideo/AddArtsVideo";
import AddFilm from "./databaseAdmin/addVideo/AddFilm";
import AddMusicVideo from "./databaseAdmin/addVideo/AddMusicVideo";
import AddNewsVideo from "./databaseAdmin/addVideo/AddNewsVideo";
import AddClubsVideo from "./databaseAdmin/addVideo/AddClubsVideo";
import AddEducationVideo from "./databaseAdmin/addVideo/AddEducationVideo";
import AddDocumentariesVideo from "./databaseAdmin/addVideo/AddDocumentaryVideo";
import AddAdvertVideo from "./databaseAdmin/addVideo/AddAdvertVideo";

// BLog
import AddArtsBlog from "./databaseAdmin/addBlog/addArtsBlog";
import AddNewsBlog from "./databaseAdmin/addBlog/AddNewsBlog";
import AddClubsBlog from "./databaseAdmin/addBlog/AddClubsBlog";
import AddSportsBlog from "./databaseAdmin/addBlog/AddSportsBlog";
import AddEducationalBlog from "./databaseAdmin/addBlog/AddEducationalBlog";
import AddInnovationBlog from "./databaseAdmin/addBlog/AddInnovationBlog";

// Add Blogs
import { BlogArtsPage } from "./components/content/categories/blog-page/BlogArtsContent";
import { BlogClubsPage } from "./components/content/categories/blog-page/BlogClubsContent";
import { BlogNewsPage } from "./components/content/categories/blog-page/BlogNewsContent";
import { BlogSportsPage } from "./components/content/categories/blog-page/BlogSportsContent";
import { BlogInnovationPage } from "./components/content/categories/blog-page/BlogInnovationContent";
import { BlogEducationPage } from "./components/content/categories/blog-page/BlogEducationContent";

// Photo

import { PhotoArtPage } from "./components/content/categories/photos-page/Arts/PhotoArtsList";
import { PhotoClubsPage } from "./components/content/categories/photos-page/Clubs-and-societies/PhotosClubsList";
import { PhotoEducationPage } from "./components/content/categories/photos-page/Education/PhotoEducationList";
import { PhotoNaturePage } from "./components/content/categories/photos-page/Nature/PhotoNatureList";
import { PhotoNewsPage } from "./components/content/categories/photos-page/News-and-Events/PhotosNewsList.jsx";
import { PhotoSportsPage } from "./components/content/categories/photos-page/Sports/PhotosSportsList";

// Videos
import { DocumentariesPage } from "./components/content/categories/video-page/Documentaries/DocumentariesList";
import { MusicPage } from "./components/content/categories/video-page/Music/Music";
import { FilmPage } from "./components/content/categories/video-page/Film/Film";
import { VideoAdvertPage } from "./components/content/categories/video-page/Adverts/VideoAdvertPage";
import { VideoArtsPage } from "./components/content/categories/video-page/Arts/VideoArtsPage";
import { VideoClubsPage } from "./components/content/categories/video-page/Clubs-and-Societies/VideoClubsPage";
import { VideoEducationalPage } from "./components/content/categories/video-page/Educational/VideoEducationPage";
import { VideoNewsPage } from "./components/content/categories/video-page/News and Events/VideoNewsPage";
import { VideoSportsPage } from "./components/content/categories/video-page/Sports/VideoSportsList";
// import AddUser from "./databaseAdmin/addUser/AddUser";
// import { UserProfile } from "./components/content/categories/photos-page/userProfile";




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
        {/* <Route path="/mfa-media-site/admin/user" element={<UserProfile />} /> */}

        {/* Pages */}
        <Route path="/video" element={<Video />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Services />} />

        {/* Video Pages*/}
        <Route path="/video/music" element={<MusicPage />} />
        <Route path="/video/arts&lifestyle" element={<VideoArtsPage />} />
        <Route path="/video/film" element={<FilmPage />} />
        <Route path="/video/adverts" element={<VideoAdvertPage />} />
        <Route path="/video/educational" element={<VideoEducationalPage />} />
        <Route path="/video/mini-documentaries" element={<DocumentariesPage />} />
        <Route path="/video/news&events" element={<VideoNewsPage />} />
        <Route path="/video/clubs&societies" element={<VideoClubsPage />} />
        <Route path="/video/sports" element={<VideoSportsPage />} />
        
        {/* Photo Pages */}
        <Route path="/photos/arts" element={<PhotoArtPage />} />
        <Route path="/photos/news" element={<PhotoNewsPage />} />
        <Route path="/photos/sports" element={<PhotoSportsPage />} />
        <Route path="/photos/educational" element={<PhotoEducationPage />} />
        <Route path="/photos/clubs&societies" element={<PhotoClubsPage />} />
        <Route path="/photos/nature" element={<PhotoNaturePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Error />} />

        {/* Blogs Page */}
        <Route path="/blog/arts" element={<BlogArtsPage />} />
        <Route path="/blog/news" element={<BlogNewsPage />} />
        <Route path="/blog/clubs&societies" element={<BlogClubsPage />} />
        <Route path="/blog/sports" element={<BlogSportsPage />} />
        <Route path="/blog/innovation" element={<BlogInnovationPage/>} />
        <Route path="/blog/educational" element={<BlogEducationPage/>} />

      </Routes>

      <Routes></Routes>
    </>
  );
}

export default App;
