import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import NoPage from "./pages/no-page/NoPage";
import PrivateRoute from "./routes/PrivateRoute";
import './App.css';
import Movies from "./pages/Movies/Movies";
import Movie from "./pages/Movie/Movie";
import NewsList from "./pages/news-list/NewsList";
import NewsDetail from "./pages/news/NewsDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="profile" element={<PrivateRoute Component={Profile} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movie" element={<Movie />} />
          <Route path="news" element={<NewsList />} />
          <Route path="newsDetail" element={<NewsDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
