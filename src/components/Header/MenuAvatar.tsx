import React from 'react'

function MenuAvatar() {
    return (
        <div className="flex items-center justify-between bg-base-100 rounded-full p-1 m-2 absolute top-6 left-2 border border-base-200">
            <div className="avatar">
                <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <h1 className="text-lg font-semibold px-4">UserName</h1>
        </div>
    )
}

export default MenuAvatar