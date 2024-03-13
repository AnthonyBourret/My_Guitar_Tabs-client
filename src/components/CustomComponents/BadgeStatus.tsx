import React from 'react';

function BadgeStatus({ status }: { status: string }) {
    return (
        <div className="flex gap-4 items-center text-base font-semibold bg-base-200 p-2 px-4 rounded-box border border-primary whitespace-nowrap">
            {status}
        </div>
    );
};

export default BadgeStatus;