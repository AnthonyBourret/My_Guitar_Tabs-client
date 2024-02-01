import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function NavBarDesktop() {
    return (
        <div className="hidden sm:flex sm:flex-col fixed top-0 left-21 h-screen bg-base-200 w-48">
            <Logo />
            <ul tabIndex={0} className="bg-base-200 p-4">
                <li className="mb-4">
                    <div className="avatar my-3">
                        <div className="w-12 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </li>
                <li className="my-2">
                    <Link to="/" className="text-base-content text-lg font-semibold">
                        My Songs
                    </Link>
                </li>
                <li className="my-2">
                    <Link to="/add-a-song" className="text-base-content text-lg font-semibold">
                        Add a Song
                    </Link>
                </li>
                <li className="my-2">
                    <Link to="/profile" className="text-base-content text-lg font-semibold">
                        My Profile
                    </Link>
                </li>
                <li className="my-2">
                    <Link to="/" className="text-base-content text-lg font-semibold">
                        Log Out
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBarDesktop