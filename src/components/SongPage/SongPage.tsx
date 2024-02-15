import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import BadgeStyle from "../CustomComponents/BadgeStyle";
import EditProgressionModal from "../Modals/EditProgressionModal";
import DeleteSongModal from "../Modals/DeleteSongModal";
import LoaderSongPage from "../Loaders/LoaderSongPage";
import { IconLink } from "../../svg";

function SongPage() {
    return (
        <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen pb-8 px-12">
            <Header />
            <div className="flex flex-col w-full bg-base-100 border border-primary rounded-box p-4 gap-10 sm:w-fit sm:mx-16 lg:w-5/8">

                {/* Loader */}
                {/* <LoaderSongPage /> */}

                {/* Header of the displayed song informations */}
                <div className="flex flex-col justify-between sm:px-2 sm:flex-row">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-semibold pr-6 lg:text-4xl">Song Title</h1>
                        <h2 className="text-lg pl-6 pt-1">by Artist Name</h2>
                        <div className="flex gap-6 p-4 w-fit m-auto">
                            <BadgeStyle style="Pop" />
                            <BadgeStyle style="Rock" />
                        </div>
                    </div>
                    <div className="flex flex-col w-fit px-12 py-4 self-center items-center justify-center gap-4 bg-neutral rounded-box border border-primary">
                        <p className="text-lg font-semibold lg:text-xl">In Progress</p>
                        <button
                            type="button"
                            onClick={() => {
                                if (document) {
                                    (document.getElementById("progression_modal") as HTMLDialogElement).showModal();
                                }
                            }}
                            className="btn btn-sm btn-primary"
                        >
                            Edit status
                        </button>
                    </div>
                </div>

                {/* Song informations */}
                <div className="flex flex-col px-4 w-full font-semibold gap-2 ">
                    <p>Beginner</p>
                    <p>EADGBE - Standard</p>
                    <p>Capo  1</p>
                </div>

                {/* Link and Comments sections */}
                <div className="flex flex-col gap-2 px-4 w-full">
                    <p className="font-semibold sm:text-lg">Tab :</p>
                    <div className="flex gap-2 items-center">
                        <IconLink />
                        <Link to="/tabsLink" className="truncate" target="_blank" rel="noreferrer">www.blablablablabla.com/zefzef</Link>
                    </div>
                    <p className="font-semibold sm:text-lg">Lyrics :</p>
                    <div className="flex gap-2 items-center">
                        <IconLink />
                        <Link to="/lyricsLink" className="truncate" target="_blank" rel="noreferrer">www.blablablablabla.com/zefzef/235zefrzefz34</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2 px-4 w-full">
                    <h3 className="font-semibold sm:text-lg">Comments :</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, pariatur.</p>
                </div>

                {/* Edit and Delete buttons */}
                <div className="flex w-full justify-center gap-4">
                    < Link to="/edit-song/:id" className="btn btn-sm btn-primary">Edit song</Link>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={() => {
                            if (document) {
                                (document.getElementById("delete_modal") as HTMLDialogElement).showModal();
                            }
                        }}
                    >
                        Delete song
                    </button>
                </div>
            </div>

            {/* Modals */}
            <EditProgressionModal />
            <DeleteSongModal />
        </div>
    );
};

export default SongPage;