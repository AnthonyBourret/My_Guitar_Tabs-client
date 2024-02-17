import React, { useEffect, useState } from 'react';

// Import Fetch hook
import useFetch from "../../hooks/useFetch";

// Import Components
import Header from '../Header/Header';
import FilterDesktop from '../Filters/FilterDesktop';
import FilterMobile from "../Filters/FilterMobile";
import SongCard from '../CustomComponents/SongCard';
import AvatarDesktop from '../CustomComponents/AvatarDesktop';
import LoaderCardSong from "../Loaders/LoaderCardSong";
import NewUserMessage from "./NewUserMessage";

// Import Types
import { SongProps } from "../../types/types";



function HomePage({ userId }: { userId: number }) {

  // Fetch user's songs
  const { data, error, isLoading } = useFetch(`user/${userId}/songs`, 'GET');
  // State to set songs
  const [songs, setSongs] = useState([]);

  // When the data is fetched, set the songs
  useEffect(() => {
    if (data && userId) {
      setSongs(data);
    }
  }, [songs, data, isLoading]);

  // If there is an error, return null
  if (error) return null;

  return (
    <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen pb-8">
      <Header />
      <div className="flex flex-col w-full sm:flex-row sm:justify-center gap-8 px-6 sm:gap-12">
        <div className="flex flex-col gap-4">
          {/* If the user has at least one song, display the avatar and the filters */}
          {songs.length != 0 &&
            <>
              <AvatarDesktop />
              <FilterDesktop />
              <FilterMobile />
            </>
          }
        </div>
        <div className="w-full min-[820px]:w-1/2 flex flex-col gap-6">

          {/* Loader */}
          {isLoading && <LoaderCardSong />}

          {/* If the user has at least one song, display the songs list */}
          {songs.length != 0
            ? songs.map((song: SongProps) => (
              <SongCard
                key={song.id}
                id={song.id}
                title={song.title}
                artist={song.artist}
                Styles={song.Styles}
                status={song.status}
              />
            ))
            // If the user has no song, display a message to invite him to add one
            : <NewUserMessage />
          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;