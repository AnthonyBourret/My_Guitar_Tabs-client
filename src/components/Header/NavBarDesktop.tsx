import React from 'react'
import { Link } from 'react-router-dom'
import LogoHeader from './LogoHeader'

function NavBarDesktop() {
    return (
        <div className="hidden sm:flex sm:flex-col items-center w-full">

            <LogoHeader widthValue={"100%"} color={"#1C1917"} />

            <div className="flex gap-12">
                <button className="btn btn-ghost">
                    <Link to="/" className="text-base-content text-base font-semibold">
                        My Songs
                    </Link>
                </button>
                <button className="btn btn-ghost">
                    <Link to="/add-a-song" className="text-base-content text-base font-semibold">
                        Add a Song
                    </Link>
                </button>
                <button className="btn btn-ghost">
                    <Link to="/profile" className="text-base-content text-base font-semibold">
                        My Profile
                    </Link>
                </button>
                <button className="btn btn-ghost">
                    <Link to="/" className="text-base-content text-base font-semibold">
                        Logout
                    </Link>
                </button>
            </div>
            <div className="divider px-20 mt-0"></div>
        </div>
    )
}

export default NavBarDesktop