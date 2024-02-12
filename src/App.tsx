import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AddSong from './components/AddSong/AddSong';
import EditSong from './components/EditSong/EditSong';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import SongPage from "./components/SongPage/SongPage";

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/song" element={<SongPage />} />
      <Route path="/add-a-song" element={<AddSong />} />
      <Route path="/edit-song" element={<EditSong />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
