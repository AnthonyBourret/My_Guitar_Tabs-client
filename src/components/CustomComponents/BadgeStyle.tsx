import React from 'react';

function BadgeStyle({ style }: { style: string }) {
    return (
        <div className="badge badge-sm bg-neutral border border-primary font-semibold badge-outline p-3 min-[820px]:badge-sm min-[820px]:p-4">
            {style}
        </div>
    );
};

export default BadgeStyle;