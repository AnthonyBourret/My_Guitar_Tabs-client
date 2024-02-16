import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Header from '../Header/Header';
import BadgeStyle from "../CustomComponents/BadgeStyle";
import EditProgressionModal from "../Modals/EditProgressionModal";
import DeleteSongModal from "../Modals/DeleteSongModal";
import LoaderSongPage from "../Loaders/LoaderSongPage";
import { IconLink } from "../../svg";
import capitalize from "../../utils/capitalizeFirstLetter";
import { SongPageProps } from "../../types/types";

function SongPage() {
    const { id } = useParams();

    const { data, error, isLoading } = useFetch(`song/${id}`, 'GET');
    const [song, setSong] = useState<SongPageProps | undefined>();

    useEffect(() => {
        if (data) {
            setSong(data);
        }
    }, [data]);

    return (
        <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen pb-8 px-12">
            <Header />
            <div className="flex flex-col w-full bg-base-100 border border-primary rounded-box p-4 gap-10 lg:w-3/5">

                {isLoading && <LoaderSongPage />}

                {/* Header of the displayed song informations */}
                {song && (
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col justify-between sm:px-2 sm:flex-row">
                            <div className="flex flex-col items-center sm:w-1/2 sm:pl-2">
                                <h1 className="text-2xl font-semibold lg:text-3xl sm:self-start text-center sm:text-left">{capitalize(song.title)}</h1>
                                <h2 className="text-lg pt-2 lg:text-xl sm:self-start">by {song.artist}</h2>
                                <div className="flex gap-6 py-4 w-fit mt-4 sm:self-start">

                                    {/* Display the styles of the song */}
                                    {song.Styles.map((style, index) => (
                                        <BadgeStyle key={index} style={style.name} />))
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col w-1/2 sm:w-1/3 py-4 self-center lg:self-start items-center justify-center gap-4 bg-neutral rounded-box border border-primary">
                                <p className="text-lg font-semibold lg:text-xl">{song.status}</p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (document) {
                                            (document.getElementById("progression_modal") as HTMLDialogElement).showModal();
                                        }
                                    }}
                                    className="btn btn-sm w-fit btn-primary"
                                >
                                    Edit status
                                </button>
                            </div>
                        </div>

                        {/* Song informations */}
                        <div className="flex flex-col px-4 w-full gap-4">
                            <div className="flex flex-col gap-1 min-[820px]:flex-row min-[820px]:gap-2 items-baseline">
                                <h3 className="font-semibold sm:text-lg">Difficulty : </h3>
                                <p>{song.difficulty}</p>
                            </div>
                            <div className="flex flex-col gap-1 min-[820px]:flex-row min-[820px]:gap-2 items-baseline">
                                <h3 className="font-semibold sm:text-lg">Tuning : </h3>
                                <div className="flex flex-col min-[820px]:flex-row min-[820px]:gap-4">
                                    <p>{song.Tuning.name}</p>
                                    <span className="hidden min-[820px]:flex"> / </span>
                                    <p>{song.Tuning.strings}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-baseline">
                                <h3 className="font-semibold sm:text-lg">Capo : </h3>
                                <p>{song.capo}</p>
                            </div>
                        </div>

                        {/* Link and Comments sections */}
                        <div className="flex flex-col gap-2 px-4 w-full">
                            <p className="font-semibold sm:text-lg">Tab :</p>
                            <div className="flex gap-2 items-center">
                                <IconLink />
                                <Link to="/tabsLink" className="truncate" target="_blank" rel="noreferrer">{song.tab_link}</Link>
                            </div>
                            <p className="font-semibold sm:text-lg">Lyrics :</p>
                            <div className="flex gap-2 items-center">
                                <IconLink />
                                <Link to="/lyricsLink" className="truncate" target="_blank" rel="noreferrer">{song.lyrics_link}</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 px-4 w-full">
                            <h3 className="font-semibold sm:text-lg">Comments :</h3>
                            <p>{song.comments}</p>
                        </div>

                        {/* Edit and Delete buttons */}
                        <div className="flex w-full justify-center gap-4">
                            < Link to={`/edit-song/${id}`} className="btn btn-sm btn-primary border border-neutral">Edit song</Link>
                            <button
                                type="button"
                                className="btn btn-sm btn-primary border border-neutral"
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
                )}
            </div>

            {/* Modals */}
            <EditProgressionModal />
            <DeleteSongModal />
        </div>
    );
};

export default SongPage;