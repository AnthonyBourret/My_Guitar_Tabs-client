import React from 'react';

function LoaderProfile() {
    return (
        <div className="flex flex-col gap-8 w-full px-4">
            <div className="flex gap-4 items-center justify-between w-full">
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-8 w-28" />
                </div>
                <div className="skeleton w-16 h-16 rounded-full shrink-0" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="skeleton h-6 w-24" />
                <div className="skeleton h-6 w-52" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="skeleton h-6 w-24" />
                <div className="skeleton h-6 w-48" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="skeleton h-6 w-24" />
                <div className="skeleton h-6 w-40" />
            </div>
        </div>
    );
};

export default LoaderProfile;