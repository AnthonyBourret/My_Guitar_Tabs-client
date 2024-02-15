import React from 'react';
import Header from '../Header/Header';
import TextInput from "../CustomComponents/TextInput";
import SelectInput from "../CustomComponents/SelectInput";
import TextAreaInput from "../CustomComponents/TextAreaInput";
import BadgeStyleEdit from "../CustomComponents/BadgeStyleEdit";
import {
  difficultyOptions,
  progressionOptions,
  styleOptions,
  capoOptions,
  tuningOptions
} from "../../utils/inputValues";


function EditSong() {
  return (
    <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen pb-8">
      <Header />
      <div className="flex flex-col gap-6 w-full p-5 bg-base-100 border border-primary rounded-box max-[820px]:w-[75%] min-[820px]:w-[55%]">

        {/* Edit song Header */}
        <div className="w-full">
          <h1 className="text-2xl font-semibold self-start">Edit song</h1>
          <div className="divider mb-0"></div>
        </div>

        {/* Song title & artist div */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8">
          <div className="flex flex-col gap-6 sm:w-[40%]">
            <TextInput label="Song Title" placeholder="Actual song title" />
            <TextInput label="Artist" placeholder="Actual artist name" />
          </div>

          {/* Style div */}
          <div className="flex flex-col gap-4 items-center sm:w-[40%]">
            <SelectInput label="Style" disabledText="Choose a style - 2 max" options={styleOptions} />
            <div className="flex gap-4">
              <BadgeStyleEdit style="Pop" />
              <BadgeStyleEdit style="Rock" />
            </div>
          </div>
        </div>

        {/* Tuning & Capo div */}
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:mb-8">
          <div className="flex flex-col gap-6 sm:w-[40%] items-center">
            <SelectInput label="Tuning" disabledText="Actual tuning" options={tuningOptions} />
            <SelectInput label="Capo" disabledText="Actual fret number" options={capoOptions} />
          </div>

          {/* Difficulty & Progression div */}
          <div className="flex flex-col gap-6 sm:w-[40%]">
            <SelectInput label="Difficulty" disabledText="Actual difficulty" options={difficultyOptions} />
            <SelectInput label="Progression" disabledText="Actual progression" options={progressionOptions} />
          </div>
        </div>

        {/* Tab, Lyrics Link & Comments div */}
        <div className="flex flex-col gap-6">
          <TextInput label="Tab Link" placeholder="Actual tab link" />
          <TextInput label="Lyrics Link" placeholder="Actual lyrics link" />
          <TextAreaInput label="Comments" placeholder="Actual comment" />
        </div>

        {/* Save changes button */}
        <button type="submit" className="btn btn-base w-fit my-4 m-auto btn-primary">Save changes</button>

      </div>
    </div>
  );
};

export default EditSong;