import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AddSong from './components/AddSong/AddSong';
import EditSong from './components/EditSong/EditSong';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-a-song" element={<AddSong />} />
      <Route path="/edit-song" element={<EditSong />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
