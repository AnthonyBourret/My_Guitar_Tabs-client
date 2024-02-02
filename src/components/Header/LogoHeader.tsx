import React from 'react'
import Logo from '../../svg/Logo'

interface Props {
    widthValue: string
    color: string
}

function LogoHeader({ widthValue, color }: Props) {
    return (
        <div className="mt-4 flex justify-end">
            <Logo widthValue={widthValue} color={color} />
        </div>
    )
}

export default LogoHeader