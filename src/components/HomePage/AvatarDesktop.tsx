import React from 'react'

function AvatarDesktop() {
    return (
        // The Avatar component is displayed in the HomePage when the width of the screen is greater than 640px
        // When it's not displayed, the Avatar appears in the Header component
        <div className="hidden sm:flex items-center w-full bg-base-100 rounded-box p-3 border border-primary">
            <div className="avatar">
                <div className="w-14 rounded-full border border-primary">
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