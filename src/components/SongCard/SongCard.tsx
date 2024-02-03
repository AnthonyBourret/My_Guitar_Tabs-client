import React from 'react'

function SongCard() {
    return (
        <div className="card w-full bg-base-100 shadow-xl pb-16 min-[820px]:pb-0">
            <div className="card-body items-center min-[820px]:items-start gap-4">
                <h2 className="card-title text-2xl">Song Title</h2>
                <h3 className="text-lg">By Artist Name</h3>
                <div className="flex gap-4 justify-center">
                    <div className="badge badge-outline p-3">Style 1</div>
                    <div className="badge badge-outline p-3">Style 2</div>
                </div>
            </div>
            <span className="absolute bottom-6 px-6 min-[820px]:self-end min-[820px]:top-6 min-[820px]:right-0">Logo Status</span>
            <div className="card-actions absolute bottom-4 right-4">
                <button className="btn btn-primary">See Tabs</button>
            </div>
        </div>
    )
}

export default SongCard