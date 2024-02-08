import React from 'react';
import { Link } from "react-router-dom";
import BadgeStyle from "./BadgeStyle";
import { IconInProgress, IconLearned, IconToLearn } from '../../svg';

function SongCard() {
    return (
        <div className="flex flex-col gap-8 border border-primary bg-base-100 rounded-box w-full items-center p-4 min-[820px]:w-full">
            <div className="w-full flex flex-col gap-2">
                <div className="flex justify-between">
                    <h2 className="text-2xl self-start font-semibold min-[820px]:text-3xl">Song Title</h2>
                    <div className="relative">
                        <IconInProgress />
                    </div>
                </div>
                <h3 className="text-lg self-start ml-8 min-[820px]:ml-14 min-[820px]:text-xl">By Artist Name</h3>
            </div>
            <div className="w-full flex flex-col gap-8 items-center min-[820px]:flex-row min-[820px]:justify-between">
                <div className="flex gap-4 justify-center">
                    <BadgeStyle style="Rock" />
                    <BadgeStyle style="Pop" />
                </div>
                <Link
                    to="/song"
                    className="btn btn-sm w-fit btn-primary min-[820px]:btn-md"
                >
                    See Tabs
                </Link>
            </div>
        </div>
    );
};

export default SongCard;