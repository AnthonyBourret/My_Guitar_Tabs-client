import React from 'react';

function MenuAvatar() {
    return (
        <div className="flex items-center justify-between bg-base-100 rounded-full p-2 m-1 absolute top-6 left-2 border border-primary">
            <div className="avatar">
                <div className="w-10 rounded-full border border-primary">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <h1 className="text-lg font-semibold px-4">UserName</h1>
        </div>
    );
};

export default MenuAvatar;