import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewReleases from './components/NewReleases';
import TopPlaylist from './components/TopPlaylist';
import TopArtists from './components/TopArtists';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/newreleases" element={<NewReleases />} />
            <Route exact path="/topplaylists" element={<TopPlaylist />} />
            <Route exact path="/topartists" element={<TopArtists />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
