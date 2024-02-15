import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import capitalize from "../../utils/capitalizeFirstLetter";

function MenuAvatar() {

    const [cookies] = useCookies(['userInfo']);
    const userName = cookies.userInfo?.username;
    const userAvatar = cookies.userInfo?.picture;

    return (
        <div className="flex items-center justify-between bg-base-100 rounded-full p-2 m-1 border border-primary">
            <div className="avatar">
                <div className="w-10 rounded-full border border-primary">
                    <img src={userAvatar ? userAvatar : "/DefaultAvatar.png"} />
                </div>
            </div>
            <Link to="/profile">
                <div className="text-lg font-semibold px-4">{capitalize(userName)}</div>
            </Link>
        </div>
    );
};

export default MenuAvatar;