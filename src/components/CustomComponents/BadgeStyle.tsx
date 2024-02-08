import React from 'react';

function BadgeStyle({ style }: { style: string }) {
    return (
        <div className="badge badge-sm badge-outline p-3 min-[820px]:badge-md min-[820px]:p-4">
            {style}
        </div>
    );
};

export default BadgeStyle;