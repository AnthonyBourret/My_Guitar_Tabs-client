import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

// Import Components
import Header from '../Header/Header';
import TextInput from "../CustomComponents/TextInput";
import SelectInputValue from "../CustomComponents/SelectInputValue";
import SelectInputId from "../CustomComponents/SelectInputId";
import TextAreaInput from "../CustomComponents/TextAreaInput";
import Toast from "../CustomComponents/Toast";

// Import Hooks
import useToastDisplay from "../../hooks/useToastDisplay";

// Import options used in SelectInput
import {
  difficultyOptions,
  progressionOptions,
  styleOptions,
  capoOptions,
  tuningOptions
} from "../../utils/InputValues";

function AddSong({ userId }: { userId: number }) {
  const navigate = useNavigate();
  // States
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  // Function to submit the form
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // Check if all the required fields are filled
    if (data.title === '' || data.artist === '' || data.firstStyle_id === '' || data.tuning_id === '' || data.difficulty === '' || data.status === '') {
      setToastMessage('Please fill all the required fields');
      setIsVisible(true);
      return;
    };
    // Check if the two styles are different
    if (data.firstStyle_id === data.secondStyle_id) {
      setToastMessage('Please choose two different styles');
      setIsVisible(true);
      return;
    };

    const res = await axiosInstance.post(`/user/${userId}/add`, data);
    if (res.status === 200) {
      setToastMessage('res.data.message');
      setIsVisible(true);
      navigate(`/`);
    } else {
      setToastMessage('An error occured, please try again');
      setIsVisible(true);
      return;
    };
  };

  // useEffect to display the toast
  useToastDisplay(isVisible, setIsVisible);

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
        <form
          className="flex flex-col"
          onSubmit={(e) => handleSubmit(e)}
        >
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
        </form>
      </div>

      {/* Toast */}
      {isVisible && <Toast message={toastMessage} />}
    </div>
  );
};

export default AddSong;