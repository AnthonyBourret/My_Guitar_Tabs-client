import React from 'react';
import { useNavigate } from "react-router-dom";
import { Logo } from "../../svg";

function Page404() {
    const navigate = useNavigate();
    return (
        <div className="w-full bg-neutral flex flex-col items-center">
            <div className="pt-10">
                <Logo widthValue="100%" color="#1c1917" />
            </div>
            <div className="flex flex-col items-center gap-4 text-center mt-12 bg-base-100 p-10 border border-primary rounded-box">
                <h1 className="text-5xl font-bold">404</h1>
                <p className="text-2xl font-semibold">Page not found !!</p>
                <button
                    onClick={() => navigate("/")}
                    className="btn btn-primary w-fit mt-10"
                >
                    Go back to homepage
                </button>
            </div>
        </div>
    );
};

export default Page404;