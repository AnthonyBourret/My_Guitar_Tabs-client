import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// Import Components
import Header from '../Header/Header';
import TextInput from "../CustomComponents/TextInput";
import SelectInputValue from "../CustomComponents/SelectInputValue";
import SelectInputId from "../CustomComponents/SelectInputId";
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
} from "../../utils/InputValues";


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
      <div className="flex flex-col gap-6 w-full p-5 bg-base-100 border border-primary rounded-box max-[820px]:w-[75%] min-[820px]:w-[55%]">

        {/* Add a song Header */}
        <div className="w-full">
          <h1 className="text-2xl font-semibold self-start">Add a new song</h1>
          <div className="divider mb-0"></div>
        </div>

        {/* Song title & artist div */}
        {/* <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col"> */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8">
          <div className="flex flex-col gap-6 sm:w-[40%]">
            <TextInput
              label="Song Title"
              inputName="title"
              placeholder="Type the song title here"
            />
            <TextInput
              label="Artist"
              inputName="artist"
              placeholder="Artist/Band name"
            />
          </div>

          {/* Style div */}
          <div className="flex flex-col gap-4 items-center sm:w-[40%]">
            <SelectInputId
              label="First style"
              inputName="firstStyle_id"
              disabledText="Choose a style"
              options={styleOptions}
            />
            <SelectInputId
              label="Second style (optionnal)"
              inputName="secondStyle_id"
              disabledText="Choose another style"
              options={styleOptions}
            />
          </div>
        </div>

        {/* Tuning & Capo div */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8">
          <div className="flex flex-col gap-6 sm:w-[40%] items-center">
            <SelectInputId
              label="Tuning"
              inputName="tuning_id"
              disabledText="Pick a Tuning"
              options={tuningOptions}
            />
            <SelectInputValue
              label="Capo"
              inputName="capo"
              disabledText="Select a fret number"
              options={capoOptions}
            />
          </div>

          {/* Difficulty & Progression div */}
          <div className="flex flex-col gap-6 sm:w-[40%]">
            <SelectInputValue
              label="Difficulty"
              inputName="difficulty"
              disabledText="Chose a difficulty"
              options={difficultyOptions}
            />
            <SelectInputValue
              label="Progression"
              inputName="status"
              disabledText="Pick one"
              options={progressionOptions}
            />
          </div>
        </div>

        {/* Tab & Lyrics Link div */}
        <div className="flex flex-col gap-6">
          <TextInput
            label="Tab Link"
            inputName="tab_link"
            placeholder="Copy/Paste the link to your tab"
          />
          <TextInput
            label="Lyrics Link"
            inputName="lyrics_link"
            placeholder="Copy/Paste the link to lyrics (optional)"
          />
          <TextAreaInput
            label="Comments"
            inputName="comments"
            placeholder="Add any comments (optional)"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="btn btn-base w-fit mt-8 m-auto btn-primary"
        >
          Add song to my tabs
        </button>

        {/* </form> */}

      </div>
    </div>
  );
};

export default EditSong;