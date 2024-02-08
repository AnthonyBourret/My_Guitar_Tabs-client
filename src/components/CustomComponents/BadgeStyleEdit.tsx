import React from 'react';
import { IconDelete } from "../../svg";

function BadgeStyleEdit({ style }: { style: string }) {
    return (
        <div className="badge badge-sm badge-outline p-3 min-[820px]:badge-md min-[820px]:p-4 gap-2 cursor-pointer">
            {style}
            <IconDelete />
        </div>
    );
};

export default BadgeStyleEdit;