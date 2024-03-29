import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useCookies } from "react-cookie";

// Import Components
import HomePage from './components/HomePage/HomePage';
import AddSong from './components/AddSong/AddSong';
import EditSong from './components/EditSong/EditSong';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import SongPage from "./components/SongPage/SongPage";
import Page404 from './components/Page404/Page404';
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import LegalMentions from "./components/LegalMentions/LegalMentions";

function App() {

  // Login with a cookie, temporary solution => useContext will be used later

  // Get the cookie to have the user's id
  const [cookies] = useCookies(['userInfo']);
  const userId = cookies.userInfo?.id;

  return (

    //If there is no cookie the user will be redirected to the login page
    //The cookie is set when the user logs in or creates an account
    <Routes>

      {/* Home (logged => HomePage, not logged => Login) */}
      <Route path="/" element={cookies.userInfo
        ? <HomePage userId={userId} />
        : <Login />} />

      {/* Signup page */}
      <Route path="/signup" element={cookies.userInfo
        ? <HomePage userId={userId} />
        : <Signup />} />

      {/* Song page */}
      <Route path="/song/:id" element={cookies.userInfo
        ? <SongPage />
        : <Login />} />

      {/* Add a song page */}
      <Route path="/add-a-song" element={cookies.userInfo
        ? <AddSong userId={userId} />
        : <Login />} />

      {/* Edit a song page */}
      <Route path="/edit-song/:id" element={cookies.userInfo
        ? <EditSong />
        : <Login />} />

      {/* Profile page */}
      <Route path="/profile" element={cookies.userInfo
        ? <Profile userId={userId} />
        : <Login />} />

      {/* 404 page */}
      <Route path="*" element={<Page404 />} />

      {/* Legal mentions & privacy policy pages */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/legal-mentions" element={<LegalMentions />} />

    </Routes>
  );
};

export default App;
