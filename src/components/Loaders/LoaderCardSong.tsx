import React from 'react';

function LoaderCardSong() {
    return (
        <div className="flex flex-col gap-6">
            <div className="skeleton w-full h-40" />
            <div className="skeleton w-full h-40" />
            <div className="hidden skeleton w-full h-40 sm:block" />
        </div>
    );
};

export default LoaderCardSong;