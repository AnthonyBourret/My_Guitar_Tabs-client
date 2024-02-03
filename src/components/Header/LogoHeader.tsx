import React from 'react';
import { Logo } from '../../svg';

interface Props {
    widthValue: string
    color: string
};

function LogoHeader({ widthValue, color }: Props) {
    return (
        <div className="mt-4 flex justify-start">
            <Logo widthValue={widthValue} color={color} />
        </div>
    );
};

export default LogoHeader;