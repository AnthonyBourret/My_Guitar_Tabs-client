import React from 'react';

function BadgeStyle({ style }: { style: string }) {

    return (
        <div className={"badge badge-md p-4 bg-neutral border-1 font-semibold badge-outline"}>
            {style}
        </div>
    );
};

export default BadgeStyle;