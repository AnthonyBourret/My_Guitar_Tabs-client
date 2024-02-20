import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// Import Components
import Header from '../Header/Header';
import EditTextInput from "../CustomComponents/EditTextInput";
import SelectInputValue from "../CustomComponents/SelectInputValue";
import EditSelectInputId from "../CustomComponents/EditSelectInputId";
import SelectInputId from "../CustomComponents/SelectInputId";
import EditTextAreaInput from "../CustomComponents/EditTextAreaInput";
// Components to delete style => not used yet, for a V2
// import BadgeStyleEdit from "../CustomComponents/BadgeStyleEdit";

// Import Fetch hook
import useFetch from "../../hooks/useFetch";

// Import Types
import { SongPageProps } from "../../types/types";

// Import Utils
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
      console.log(data);

    }
  }, [data]);

  // If there is an error, return null
  if (error) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

  }

  return (
    <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen pb-8">
      <Header />
      <div className="flex flex-col gap-6 w-full p-5 bg-base-100 border border-primary rounded-box max-[820px]:w-[75%] min-[820px]:w-[55%]">

        {/* Add a song Header */}
        <div className="w-full">
          <h1 className="text-2xl font-semibold self-start">Edit song informations</h1>
          <div className="divider mb-0"></div>
        </div>

        {song && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8">

              {/* Song title & artist div */}
              <div className="flex flex-col gap-6 sm:w-[40%]">
                <EditTextInput
                  label="Song Title"
                  inputName="title"
                  value={song.title}
                />
                <EditTextInput
                  label="Artist"
                  inputName="artist"
                  value={song.artist}
                />
              </div>

              {/* Style div */}
              <div className="flex flex-col gap-4 items-center sm:w-[40%]">
                <EditSelectInputId
                  label="First style"
                  inputName="firstStyle_id"
                  value={song.Styles[0].id}
                  disabledText={song.Styles[0].name}
                  options={styleOptions}
                />

                {/* If the song has a second style, the input displayed will have its original value.
                If the song has no second style, the input displayed will be a select input with no values,
                in order to avoid posting an empty value to the database if there is no style selected by the user .
                If a second style is chosen, it will be added to the song */}

                {song.Styles[1]
                  ? (
                    <EditSelectInputId
                      label="Second style (optionnal)"
                      inputName="secondStyle_id"
                      value={song.Styles[1].id}
                      disabledText={song.Styles[1].name}
                      options={styleOptions}
                    />)
                  : (
                    <SelectInputId
                      label="Second style (optionnal)"
                      inputName="secondStyle_id"
                      options={styleOptions}
                      disabledText="No style selected yet"
                    />)
                }
              </div>
            </div>

            {/* Tuning & Capo div */}
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8">
              <div className="flex flex-col gap-6 sm:w-[40%] items-center">
                <EditSelectInputId
                  label="Tuning"
                  inputName="tuning_id"
                  value={song.Tuning.id}
                  disabledText={song.Tuning.strings}
                  options={tuningOptions}
                />
                <SelectInputValue
                  label="Capo"
                  inputName="capo"
                  disabledText={song.capo}
                  options={capoOptions}
                />
              </div>

              {/* Difficulty & Progression div */}
              <div className="flex flex-col gap-6 sm:w-[40%]">
                <SelectInputValue
                  label="Difficulty"
                  inputName="difficulty"
                  disabledText={song.difficulty}
                  options={difficultyOptions}
                />
                <SelectInputValue
                  label="Progression"
                  inputName="status"
                  disabledText={song.status}
                  options={progressionOptions}
                />
              </div>
            </div>

            {/* Tab & Lyrics Link div */}
            <div className="flex flex-col gap-6">
              <EditTextInput
                label="Tab Link"
                inputName="tab_link"
                value={song.tab_link}
              />
              <EditTextInput
                label="Lyrics Link"
                inputName="lyrics_link"
                value={song.lyrics_link}
              />
              <EditTextAreaInput
                label="Comments"
                inputName="comments"
                value={song.comments}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="btn btn-base w-fit mt-8 m-auto btn-primary"
            >
              Save changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditSong;