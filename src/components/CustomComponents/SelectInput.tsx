import React from 'react'

interface Props {
    label: string,
    disabledText: string,
    options: string[],
}

function SelectInput({ label, disabledText, options }: Props) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
            </div>
            <select className="select select-sm select-bordered">
                <option disabled selected>{disabledText}</option>
                {options.map((option: string, index: number) =>
                    <option key={index}>
                        {option}
                    </option>)}
            </select>
        </label>
    )
}

export default SelectInput