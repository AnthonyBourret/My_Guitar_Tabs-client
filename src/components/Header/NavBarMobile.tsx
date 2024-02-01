import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function NavBarMobile() {
    return (
        <div className="bg-base-100 w-full flex items-center justify-between sm:hidden">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content p-0 z-[1] shadow bg-base-100 w-52 h-[40vh]">
                    <li className="bg-base-200 mb-4">
                        <div className="avatar my-3">
                            <div className="w-12 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/" className="text-base-content text-base font-semibold">
                            My Songs
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-a-song" className="text-base-content text-base font-semibold">
                            Add a Song
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="text-base-content text-base font-semibold">
                            My Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-base-content text-base font-semibold">
                            Log Out
                        </Link>
                    </li>
                </ul>
            </div>
            <Logo />
        </div>
    )
}

export default NavBarMobile