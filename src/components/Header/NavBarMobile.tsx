import React from 'react';
import { Link } from 'react-router-dom';
import LogoHeader from './LogoHeader';
import MenuAvatar from './MenuAvatar';

function NavBarMobile() {
    return (
        <div className="w-full flex sm:hidden mb-32">

            {/* Avatar Component */}
            <MenuAvatar />

            {/* Burger Menu => On click, the dropdown appears */}
            <div className="dropdown absolute top-6 right-6">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content m-0 z-[1] shadow bg-base-100 w-52 h-screen fixed -top-6 -right-6 border-l border-primary">

                    {/* Logo */}
                    <LogoHeader widthValue={"100%"} color={"#292524"} />

                    {/* Navogation Menu */}
                    <li className="pt-6">
                        <Link to="/" className="text-base-content text-base font-semibold">
                            My Songs
                        </Link>
                    </li>
                    <li className="pt-2">
                        <Link to="/add-a-song" className="text-base-content text-base font-semibold">
                            Add a Song
                        </Link>
                    </li>
                    <li className="pt-2">
                        <Link to="/profile" className="text-base-content text-base font-semibold">
                            My Profile
                        </Link>
                    </li>
                    <li className="pt-2">
                        <Link to="/" className="text-base-content text-base font-semibold">
                            Log Out
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBarMobile;