import React from 'react';
import { Link } from "react-router-dom";
import { SongCardProps } from "../../types/types";
import BadgeStyle from "./BadgeStyle";
import { IconInProgress, IconLearned, IconToLearn } from '../../svg';
import capitalize from "../../utils/capitalizeFirstLetter";

function SongCard({
    id,
    title,
    artist,
    Styles,
    status }: SongCardProps) {
    return (
        <div className="flex flex-col gap-8 border border-primary bg-base-100 rounded-box w-full items-center p-4 min-[820px]:w-full shadow-xl">
            <div className="w-full flex flex-col gap-2">

                <div className="flex justify-between">
                    <h1 className="text-xl self-start font-semibold min-[820px]:text-2xl mr-4 min-[820px]:mr-6">{capitalize(title)}</h1>
                    <div className="relative">
                        {status === "In progress" && <IconInProgress />}
                        {status === "To learn" && <IconToLearn />}
                        {status === "Learned" && <IconLearned />}
                    </div>
                </div>
                <h2 className="text-lg self-start ml-8 min-[820px]:ml-14 min-[820px]:text-lg">By {artist}</h2>
            </div>

            <div className="w-full flex flex-col gap-8 items-center min-[820px]:flex-row min-[820px]:justify-between">
                <div className="flex gap-4 justify-center">
                    {Styles.map((style: { id: number, name: string }) => (
                        <BadgeStyle key={style.id} style={style.name} />
                    ))}
                </div>
                <Link
                    to={`/song/${id}`}

                    className="btn btn-sm w-fit btn-primary min-[820px]:btn-md"
                >
                    See Tabs
                </Link>
            </div>
        </div>
    );
};

export default SongCard;