import React from 'react'

function AvatarDesktop() {
    return (
        <div className="hidden sm:flex items-center w-full bg-base-100 rounded-box p-3 border border-base-200">
            <div className="avatar">
                <div className="w-14 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="w-full flex justify-center">
                <h1 className="text-xl font-semibold">UserName</h1>
            </div>
        </div>
    )
}

export default AvatarDesktop