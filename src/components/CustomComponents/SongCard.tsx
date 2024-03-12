import React from 'react';
import { Link } from "react-router-dom";
import { SongCardProps } from "../../types/types";
import BadgeStyle from "./BadgeStyle";
import capitalize from "../../utils/capitalizeFirstLetter";

function SongCard({
    id,
    title,
    artist,
    Styles,
    status }: SongCardProps) {
    return (
        <div className="flex flex-col gap-8 border border-primary bg-base-100 rounded-box w-full items-center p-4 min-[400px]:w-full shadow-xl">
            <div className="w-full flex flex-col items-center gap-4 min-[400px]:items-start min-[400px]:flex-row min-[400px]:justify-between">

                <div className="flex flex-col gap-1 items-center">
                    <h1 className="text-2xl font-semibold min-[400px]:text-2xl min-[400px]:mr-6 min-[400px]:self-start">{capitalize(title)}</h1>
                    <h2 className="text-lg min-[400px]:ml-14 min-[400px]:self-start min-[820px]:text-xl">By {artist}</h2>
                </div>
                <div className="m-2">
                    {status === "In progress" && <div className="text-base font-semibold">In progress</div>}
                    {status === "To learn" && <div className="text-base font-semibold">To learn</div>}
                    {status === "Learned" && <div className="text-base font-semibold">Learned</div>}
                </div>
            </div>

            <div className="w-full flex flex-col gap-8 items-center min-[400px]:flex-row min-[400px]:justify-between">
                <div className="flex gap-4 justify-center">
                    {Styles.map((style: { id: number, name: string }) => (
                        <BadgeStyle key={style.id} style={style.name} />
                    ))}
                </div>
                <Link
                    to={`/song/${id}`}

                    className="btn btn-md w-fit btn-primary min-[400px]:btn-md"
                >
                    See Tabs
                </Link>
            </div>
        </div>
    );
};

export default SongCard;