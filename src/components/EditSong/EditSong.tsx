import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// Import Components
import Header from '../Header/Header';
import TextInput from "../CustomComponents/TextInput";
import SelectInput from "../CustomComponents/SelectInput";
import TextAreaInput from "../CustomComponents/TextAreaInput";
// Components to delete style => not used yet, for a V2
// import BadgeStyleEdit from "../CustomComponents/BadgeStyleEdit";

// Import Fetch hook
import useFetch from "../../hooks/useFetch";

// Import Types
import { SongPageProps } from "../../types/types";

// Import Utils
import capitalize from "../../utils/capitalizeFirstLetter";
import {
  difficultyOptions,
  progressionOptions,
  styleOptions,
  capoOptions,
  tuningOptions
} from "../../utils/inputValues";


function EditSong() {

  // The user's id is set with useParams
  const { id } = useParams();
  // Fetch the song
  const { data, error, isLoading } = useFetch(`song/${id}`, 'GET');
  // State to set the song
  const [song, setSong] = useState<SongPageProps | undefined>();

  // When the data is fetched, set the song
  useEffect(() => {
    if (data) {
      setSong(data);
    }
  }, [data]);

  // If there is an error, return null
  if (error) return null;

  return (
    <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen pb-8">
      <Header />
      {song && (
        <div className="flex flex-col gap-6 w-full p-5 bg-base-100 border border-primary rounded-box max-[820px]:w-[75%] min-[820px]:w-[55%]">

          {/* Edit song Header */}
          <div className="w-full">
            <h1 className="text-2xl font-semibold self-start">Edit song</h1>
            <div className="divider mb-0"></div>
          </div>

          {/* Song title & artist div */}
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8">
            <div className="flex flex-col gap-6 sm:w-[40%]">
              <TextInput
                label="Song Title"
                placeholder={capitalize(song.title)}
              />
              <TextInput label="Artist" placeholder={song.artist} />
            </div>

            {/* Style div */}
            <div className="flex flex-col gap-4 items-center sm:w-[40%]">
              <SelectInput
                label="First style"
                disabledText="Choose a style"
                options={styleOptions}
              />
              <SelectInput
                label="Second style (optionnal)"
                disabledText="Choose another style"
                options={styleOptions}
              />
            </div>
          </div>

          {/* Tuning & Capo div */}
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8">
            <div className="flex flex-col gap-6 sm:w-[40%] items-center">
              <SelectInput
                label="Tuning"
                disabledText={song.Tuning.strings}
                options={tuningOptions}
              />
              <SelectInput
                label="Capo"
                disabledText={song.capo}
                options={capoOptions}
              />
            </div>

            {/* Difficulty & Progression div */}
            <div className="flex flex-col gap-6 sm:w-[40%]">
              <SelectInput
                label="Difficulty"
                disabledText={song.difficulty}
                options={difficultyOptions}
              />
              <SelectInput
                label="Progression"
                disabledText={song.status}
                options={progressionOptions}
              />
            </div>
          </div>

          {/* Tab, Lyrics Link & Comments div */}
          <div className="flex flex-col gap-6">
            <TextInput label="Tab Link" placeholder={song.tab_link} />
            <TextInput label="Lyrics Link" placeholder={song.lyrics_link} />
            <TextAreaInput label="Comments" placeholder={song.comments} />
          </div>

          {/* Save changes button */}
          <button type="submit" className="btn btn-base w-fit my-4 m-auto btn-primary">Save changes</button>
        </div>
      )}
    </div>
  );
};

export default EditSong;