import React from 'react';
import Header from '../Header/Header';
import FilterDesktop from '../Filters/FilterDesktop';
import SongCard from '../SongCard/SongCard';
import AvatarDesktop from './AvatarDesktop';

function HomePage() {
  return (
    <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen">
      <Header />
      <div className="w-[90%] flex flex-col items-center sm:flex-row sm:justify-center sm:items-start sm:gap-12 sm:mt-4">
        <div className="flex flex-col gap-4">
          <AvatarDesktop />
          <FilterDesktop />
        </div>
        <SongCard />
      </div>
    </div>
  );
};

export default HomePage;