import React from 'react';
import { IconInProgress, IconLearned, IconToLearn } from '../../svg';

function SongCard() {
    return (
        <div className="flex flex-col gap-8 border border-primary bg-base-100 rounded-box w-full items-center p-4 min-[820px]:w-full">
            <div className="w-full flex flex-col gap-2">
                <div className="flex justify-between">
                    <h2 className="text-3xl self-start font-semibold min-[820px]:text-4xl">Song Title</h2>
                    <div className="relative">
                        <IconInProgress />
                    </div>
                </div>
                <h3 className="text-lg self-start ml-8 min-[820px]:ml-14 min-[820px]:text-2xl">By Artist Name</h3>
            </div>
            <div className="w-full flex flex-col gap-8 items-center min-[820px]:flex-row min-[820px]:justify-between">
                <div className="flex gap-4 justify-center">
                    <div className="badge badge-sm badge-outline p-3 min-[820px]:badge-md min-[820px]:p-4">Style 1</div>
                    <div className="badge badge-sm badge-outline p-3 min-[820px]:badge-md min-[820px]:p-4">Style 2</div>
                </div>
                <button className="btn btn-sm w-fit btn-primary min-[820px]:btn-md">See Tabs</button>
            </div>
        </div>
    );
};

export default SongCard;