import React from 'react';

// Import Components
import Header from '../Header/Header';
import TextInput from "../CustomComponents/TextInput";
import SelectInput from "../CustomComponents/SelectInput";
import TextAreaInput from "../CustomComponents/TextAreaInput";
import BadgeStyle from "../CustomComponents/BadgeStyle";

// Import options used in SelectInput
import {
  difficultyOptions,
  progressionOptions,
  styleOptions,
  capoOptions,
  tuningOptions
} from "../../utils/inputValues";


function AddSong() {
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
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8">
          <div className="flex flex-col gap-6 sm:w-[40%]">
            <TextInput label="Song Title" placeholder="Type the song title here" />
            <TextInput label="Artist" placeholder="Artist/Band name" />
          </div>

          {/* Style div */}
          <div className="flex flex-col gap-4 items-center sm:w-[40%]">
            <SelectInput label="Style" disabledText="Chose a style - 2 max" options={styleOptions} />
            <div className="flex gap-4">
              <BadgeStyle style="Pop" />
              <BadgeStyle style="Rock" />
            </div>
          </div>
        </div>

        {/* Tuning & Capo div */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8">
          <div className="flex flex-col gap-6 sm:w-[40%] items-center">
            <SelectInput label="Tuning" disabledText="Pick a Tuning" options={tuningOptions} />
            <SelectInput label="Capo" disabledText="Select a fret number" options={capoOptions} />
          </div>

          {/* Difficulty & Progression div */}
          <div className="flex flex-col gap-6 sm:w-[40%]">
            <SelectInput label="Difficulty" disabledText="Chose a difficulty" options={difficultyOptions} />
            <SelectInput label="Progression" disabledText="Pick one" options={progressionOptions} />
          </div>
        </div>

        {/* Tab & Lyrics Link div */}
        <div className="flex flex-col gap-6">
          <TextInput label="Tab Link" placeholder="Copy/Paste the link to your tab" />
          <TextInput label="Lyrics Link" placeholder="Copy/Paste the link to lyrics (optional)" />
          <TextAreaInput label="Comments" placeholder="Add any comments (optional)" />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-base w-fit my-4 m-auto btn-primary">Add song to my tabs</button>
      </div>
    </div>
  );
};

export default AddSong;