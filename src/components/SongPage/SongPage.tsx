import React from 'react';
import Header from '../Header/Header';
import BadgeStyle from "../CustomComponents/BadgeStyle";
import { Link } from "react-router-dom";

function SongPage() {
    return (
        <div className="flex flex-col items-center w-full sm:w-[90%] bg-neutral min-h-screen pb-8 px-6">
            <Header />
            <div className="flex flex-col w-full bg-base-100 border border-primary rounded-box p-4 gap-10 sm:w-3/5 sm:p-8">
                <div className="flex flex-col justify-between items-center sm:flex-row">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-semibold pr-10">Song Title</h1>
                        <h2 className="text-xl pl-10">by Artist Name</h2>
                        <div className="flex justify-evenly w-full py-8">
                            <BadgeStyle style="Pop" />
                            <BadgeStyle style="Rock" />
                        </div>
                    </div>
                    <div className="flex flex-col w-fit px-12 py-4 items-center justify-center gap-4 bg-neutral rounded-box border border-primary">
                        <p className="text-lg font-semibold">In Progress</p>
                        <button type="button" className="btn btn-sm btn-primary">Edit status</button>
                    </div>
                </div>
                <div className="flex flex-col px-4 w-full font-semibold gap-2 sm:text-lg">
                    <p>Beginner</p>
                    <p>EADGBE - Standard</p>
                    <p>Capo  1</p>
                </div>
                <div className="flex flex-col gap-2 px-4 w-full">
                    <p className="font-semibold sm:text-lg">Tab :</p>
                    <Link to="/tabsLink" className="truncate" target="_blank" rel="noreferrer">www.blablablablabla.com/zefzef</Link>
                    <p className="font-semibold sm:text-lg">Lyrics :</p>
                    <Link to="/lyricsLink" className="truncate" target="_blank" rel="noreferrer">htttp://www.memememememe.com/popioppoihoih</Link>
                </div>
                <div className="flex flex-col gap-2 px-4 w-full">
                    <h3 className="font-semibold sm:text-lg">Comments :</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, pariatur.</p>
                </div>
                <div className="flex w-full justify-center gap-4">
                    <button type="button" className="btn btn-sm btn-primary">Edit song</button>
                    <button type="button" className="btn btn-sm btn-primary">Delete song</button>
                </div>
            </div>
        </div>
    );
};

export default SongPage;