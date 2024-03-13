import React from 'react';
import { Link } from 'react-router-dom';
import { GithubIcon } from '../../svg';

function Footer() {
    return (
        <>
            <div className="divider w-[70%] mt-10 self-center" />
            <footer className="footer footer-center py-2 sm:py-4 px-10 bg-base-300 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <Link to="/legal-mentions" className="link font-semibold">Legal mentions</Link>
                    <Link to="/privacy-policy" className="link font-semibold">Privacy policy</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://github.com/AnthonyBourret" target="_blank">
                            <GithubIcon />
                        </Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;