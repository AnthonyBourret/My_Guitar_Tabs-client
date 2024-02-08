import React from 'react'

function LoaderSongPage() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="skeleton h-24 w-full" />
            <div className="skeleton h-24 w-full" />
            <div className="skeleton h-16 w-40" />
            <div className="skeleton h-8 w-full" />
            <div className="skeleton h-8 w-full" />
            <div className="skeleton h-28 w-full" />
        </div>
    )
}

export default LoaderSongPage