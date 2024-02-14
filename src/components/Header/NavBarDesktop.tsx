import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import LogoHeader from './LogoHeader';

function NavBarDesktop() {
    const [cookies, setCookie, removeCookie] = useCookies(['userId']);

    function handleLogout() {
        removeCookie('userId', { path: '/' });
    }

    return (
        <div className="hidden sm:flex sm:flex-col items-center w-full pr-2">

            {/* Logo */}
            <LogoHeader widthValue={"100%"} color={"#1C1917"} />

            <div className="flex gap-12">

                {/* NavBar Menu */}
                <Link to="/" className="text-base-content text-base font-semibold">
                    <button className="btn btn-ghost" type="button">
                        My Songs
                    </button>
                </Link>
                <Link to="/add-a-song" className="text-base-content text-base font-semibold">
                    <button className="btn btn-ghost" type="button">
                        Add a Song
                    </button>
                </Link>
                <Link to="/profile" className="text-base-content text-base font-semibold">
                    <button className="btn btn-ghost" type="button">
                        My Profile
                    </button>
                </Link>
                <Link to="/" className="text-base-content text-base font-semibold">
                    <button
                        className="btn btn-ghost"
                        type="button"
                        onClick={() => handleLogout()}
                    >
                        Logout
                    </button>
                </Link>
            </div>
            <div className="divider w-[77%] mt-0 self-center"></div>
        </div>
    );
};

export default NavBarDesktop;