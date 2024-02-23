import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

// Import Components
import Header from '../Header/Header';
import EditTextInput from "../CustomComponents/EditTextInput";
import EditSelectInputValue from "../CustomComponents/EditSelectInputValue";
import EditSelectInputId from "../CustomComponents/EditSelectInputId";
import EditSelectStyleInput from "../CustomComponents/EditSelectStyleInput";
import SelectInputId from "../CustomComponents/SelectInputId";
import EditTextAreaInput from "../CustomComponents/EditTextAreaInput";
import Toast from "../CustomComponents/Toast";
import LoadingDots from "../Loaders/LoadingDots";
import Footer from "../Footer/Footer";

// Import Fetch hook
import useFetch from "../../hooks/useFetch";
import useToastDisplay from "../../hooks/useToastDisplay";

// Import Types
import { SongProps } from "../../types/types";

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

  // States
  const [song, setSong] = useState<SongProps | undefined>();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | React.JSX.Element>("");

  // When the data is fetched, set the song
  useEffect(() => {
    if (data) {
      setSong(data);
    }
  }, [data]);

  // If there is an error, return null
  if (error) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (data.firstStyle_id === data.secondStyle_id) {
      setToastMessage("Please choose two different styles");
      setIsVisible(true);
      return;
    };

    if (data.title === ""
      || data.artist === ""
      || data.tuning_id === ""
      || data.capo === ""
      || data.difficulty === ""
      || data.status === ""
      || data.firstStyle_id === ""
      || data.tab_link === ""
    ) {
      setToastMessage("Please fill all the required fields");
      setIsVisible(true);
      return;
    };

    //Request for the song update
    const resSong = await axiosInstance.patch(`/song/${id}`, {
      title: data.title,
      artist: data.artist,
      tab_link: data.tab_link,
      lyrics_link: data.lyrics_link,
      comments: data.comments,
      difficulty: data.difficulty,
      status: data.status,
      capo: data.capo,
      tuning_id: data.tuning_id
    })
    //Request for the style update
    const resStyle = await axiosInstance.put(`/song/${id}/styles`, {
      firstStyle_id: data.firstStyle_id,
      secondStyle_id: data.secondStyle_id
    });
    if (resSong.status === 200 && resStyle.status === 200) {
      setIsVisible(true);
      setToastMessage(<LoadingDots />);
      setTimeout(() => { setToastMessage("Song updated succesfully") }, 1500);
      setTimeout(() => {
        window.location.href = `/song/${id}`;
      }, 2500);
    };
    if (resSong.status !== 200 || resStyle.status !== 200) {
      setIsVisible(true);
      setToastMessage("An error occured, please try again later");
    };
  };

  // UseEffect to display the toast when the song is updated
  useToastDisplay(isVisible, setIsVisible);

  return (
    <div className="flex flex-col items-center w-full sm:w-[90%] bg-base-300 min-h-screen pb-8">
      <Header />
      <div className="flex flex-col gap-6 w-full p-5 bg-base-100 border border-primary rounded-box max-[820px]:w-[75%] min-[820px]:w-[55%]">

        {/* Add a song Header */}
        <div className="w-full">
          <h1 className="text-2xl font-semibold self-start">Edit song informations</h1>
          <div className="divider mb-0"></div>
          <div className="text-xs">All fields with * are required</div>
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
                  label="Song Title *"
                  inputName="title"
                  value={song.title}
                />
                <EditTextInput
                  label="Artist *"
                  inputName="artist"
                  value={song.artist}
                />
              </div>

              {/* Style div */}
              <div className="flex flex-col gap-6 items-center sm:w-[40%]">
                <EditSelectInputId
                  label="First style *"
                  inputName="firstStyle_id"
                  value={song.Styles[0].id}
                  defaultText={song.Styles[0].name}
                  options={styleOptions}
                />

                {/* If the song has a second style, the input displayed will have its original value.
                If the song has no second style, the input displayed will be a select input with no values,
                in order to avoid posting an empty value to the database if there is no style selected by the user .
                If a second style is chosen, it will be added to the song */}

                {song.Styles[1]
                  ? (
                    <EditSelectStyleInput
                      label="Second style"
                      inputName="secondStyle_id"
                      value={song.Styles[1].id}
                      disabledText={song.Styles[1].name}
                      options={styleOptions}
                    />)
                  : (
                    <SelectInputId
                      label="Second style"
                      inputName="secondStyle_id"
                      options={styleOptions}
                    />)
                }
              </div>
            </div>

            {/* Tuning & Capo div */}
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8">
              <div className="flex flex-col gap-6 sm:w-[40%] items-center">
                <EditSelectInputId
                  label="Tuning *"
                  inputName="tuning_id"
                  value={song.Tuning.id}
                  defaultText={song.Tuning.strings}
                  options={tuningOptions}
                />
                <EditSelectInputValue
                  label="Capo *"
                  inputName="capo"
                  value={song.capo}
                  disabledText={song.capo}
                  options={capoOptions}
                />
              </div>

              {/* Difficulty & Progression div */}
              <div className="flex flex-col gap-6 sm:w-[40%]">
                <EditSelectInputValue
                  label="Difficulty *"
                  inputName="difficulty"
                  value={song.difficulty}
                  disabledText={song.difficulty}
                  options={difficultyOptions}
                />
                <EditSelectInputValue
                  label="Progression *"
                  inputName="status"
                  value={song.status}
                  disabledText={song.status}
                  options={progressionOptions}
                />
              </div>
            </div>

            {/* Tab & Lyrics Link div */}
            <div className="flex flex-col gap-6">
              <EditTextInput
                label="Tab Link *"
                inputName="tab_link"
                value={song.tab_link}
              />
              <EditTextInput
                label="Lyrics Link"
                inputName="lyrics_link"
                value={song.lyrics_link}
              />
              <EditTextAreaInput
                label="Comments "
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

      {/* Toast */}
      {isVisible && <Toast message={toastMessage} />}

      <Footer />
    </div>
  );
};

export default EditSong;