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
  // Problem: when the account is delete from the database, the cookie is not deleted correctly

  const [cookies] = useCookies(['userInfo']);
  const userId = cookies.userInfo?.id;

  return (

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
        ? <AddSong />
        : <Login />} />

      {/* Edit a song page */}
      <Route path="/edit-song/:id" element={cookies.userInfo
        ? <EditSong />
        : <Login />} />

      {/* Profile page */}
      <Route path="/profile" element={cookies.userInfo
        ? <Profile userId={userId} />
        : <Login />} />
    </Routes>
  );
};

export default App;
