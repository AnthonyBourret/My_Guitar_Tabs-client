import React from 'react'
import { Link } from 'react-router-dom'
import LogoHeader from './LogoHeader'

function NavBarMobile() {
    return (
        <div className="w-full flex flex-col items-start justify-between sm:hidden">
            <div className="dropdown p-4">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content m-0 p-0 z-[1] shadow bg-base-100 w-52 h-screen fixed top-0 left-0">
                    <LogoHeader widthValue={"100%"} color={"#292524"} />
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
    )
}

export default NavBarMobile