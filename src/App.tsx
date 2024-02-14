import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useCookies } from "react-cookie";
import HomePage from './components/HomePage/HomePage';
import AddSong from './components/AddSong/AddSong';
import EditSong from './components/EditSong/EditSong';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import SongPage from "./components/SongPage/SongPage";

function App() {

  // Login with a cookie, temporary solution => useContext will be used later
  const [cookies] = useCookies(['userId']);

  return (

    <Routes>

      {/* Home (logged => HomePage, not logged => Login) */}
      <Route path="/" element={cookies.userId
        ? <HomePage />
        : <Login />} />

      {/* Signup page */}
      <Route path="/signup" element={cookies.userId
        ? <HomePage />
        : <Signup />} />

      {/* Song page */}
      <Route path="/song/:id" element={cookies.userId
        ? <SongPage />
        : <Login />} />

      {/* Add a song page */}
      <Route path="/add-a-song" element={cookies.userId
        ? <AddSong />
        : <Login />} />

      {/* Edit a song page */}
      <Route path="/edit-song/:id" element={cookies.userId
        ? <EditSong />
        : <Login />} />

      {/* Profile page */}
      <Route path="/profile" element={cookies.userId
        ? <Profile />
        : <Login />} />
    </Routes>
  );
};

export default App;
