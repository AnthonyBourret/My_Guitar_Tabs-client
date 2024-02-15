import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from "../../svg";

function NewUserMessage() {
    return (
        <div className="flex flex-col gap-6 border border-primary bg-base-100 rounded-box w-full items-center p-4 min-[820px]:w-full">
            <h2 className="font-semibold">
                Welcome on My Guitar Tabs !!
            </h2>
            <p className="text-justify px-4">
                You don't have any song yet, click on the button below to add your first song.
            </p>
            <ArrowDown />
            <Link to="/add-a-song" className="text-base-content text-base font-semibold">
                <button className="btn btn-primary" type="button">
                    Add a Song
                </button>
            </Link>
        </div>
    );
};

export default NewUserMessage;