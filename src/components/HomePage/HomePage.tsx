import React, { useEffect, useState } from 'react';
import useFetch from "../../hooks/useFetch";
import Header from '../Header/Header';
import FilterDesktop from '../Filters/FilterDesktop';
import FilterMobile from "../Filters/FilterMobile";
import SongCard from '../CustomComponents/SongCard';
import AvatarDesktop from '../CustomComponents/AvatarDesktop';
import LoaderCardSong from "../Loaders/LoaderCardSong";

function HomePage() {

  const [songs, setSongs] = useState([]);

  const { data, error, isLoading } = useFetch('user/1/songs', 'GET');

  useEffect(() => {
    if (data) {
      setSongs(data);
    }
  }, [songs, data, isLoading]);

  console.log(songs);
  if (error) return null;

  return (
    <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen pb-8">
      <Header />
      <div className="flex flex-col w-full sm:flex-row sm:justify-center gap-8 px-6 sm:gap-12">
        <div className="flex flex-col gap-4">
          <AvatarDesktop />
          <FilterDesktop />
          <FilterMobile />
        </div>
        <div className="w-full min-[820px]:w-1/2 flex flex-col gap-6">
          {/* Todo => .map on the fectched data to display the user's songs*/}
          {isLoading && <LoaderCardSong />}
          <SongCard />
          <SongCard />
          <SongCard />
          <SongCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;