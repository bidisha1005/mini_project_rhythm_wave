// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import SignUp from './SignUp';
import Homepage from './Homepage1';
import MusicVideo from './MusicVideo';
import Library from './Library';
import ListeningHistory from './ListeningHistory';
import Recomm from './Recomm1';
import Playlist from './Playlist';
import MakePlaylist from './MakePlaylist';
import UserProfile from './UserProfile1';
import AboutUs from './AboutUs';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/homepage" element={<Homepage />} /> 
          <Route path="/musicvideo" element={<MusicVideo />} /> 
          <Route path="/library" element={<Library />} /> 
          <Route path="/listeninghistory" element={<ListeningHistory />} /> 
          <Route path="/recomm" element={<Recomm />} /> 
          <Route path="/playlist" element={<Playlist />} /> 
          <Route path="/mplaylist" element={<MakePlaylist />} /> 
          <Route path="/userprofile" element={<UserProfile />} /> 
          <Route path="/aboutus" element={<AboutUs />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
