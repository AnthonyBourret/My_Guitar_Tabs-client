import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import useFetch from "../../hooks/useFetch";
import { SongProps } from "../../types/types";
import Header from '../Header/Header';
import FilterDesktop from '../Filters/FilterDesktop';
import FilterMobile from "../Filters/FilterMobile";
import SongCard from '../CustomComponents/SongCard';
import AvatarDesktop from '../CustomComponents/AvatarDesktop';
import LoaderCardSong from "../Loaders/LoaderCardSong";
import NewUserMessage from "./NewUserMessage";

function HomePage() {

  const [songs, setSongs] = useState([]);
  const [cookies] = useCookies(['userInfo']);
  const userId = cookies.userInfo?.id;

  const { data, error, isLoading } = useFetch(`user/${userId}/songs`, 'GET');

  useEffect(() => {
    if (data && userId) {
      setSongs(data);
    }
  }, [songs, data, isLoading]);

  if (error) return null;

  return (
    <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen pb-8">
      <Header />
      <div className="flex flex-col w-full sm:flex-row sm:justify-center gap-8 px-6 sm:gap-12">
        <div className="flex flex-col gap-4">
          {songs.length != 0 &&
            <>
              <AvatarDesktop />
              <FilterDesktop />
              <FilterMobile />
            </>
          }
        </div>
        <div className="w-full min-[820px]:w-1/2 flex flex-col gap-6">
          {isLoading && <LoaderCardSong />}
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
            : <NewUserMessage />
          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;