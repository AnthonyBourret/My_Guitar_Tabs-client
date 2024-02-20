import React from 'react';

interface Props {
    label: string,
    inputName: string,
    disabledText: string,
    options: string[],
};

function SelectInput({ label, inputName, disabledText, options }: Props) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
            </div>
            <select name={inputName} defaultValue={disabledText} className="select select-sm select-bordered bg-neutral">
                <option disabled>{disabledText}</option>
                {options.map((option: string, index: number) =>
                    <option value={option} key={index}>
                        {option}
                    </option>)}
            </select>
        </label>
    );
};

export default SelectInput;