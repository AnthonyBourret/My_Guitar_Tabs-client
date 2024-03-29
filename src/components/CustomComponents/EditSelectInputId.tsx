import React from 'react';

interface Props {
    label: string,
    inputName: string,
    value: number,
    defaultText: string,
    options: string[],
};

function EditSelectInputId({ label, inputName, value, defaultText, options }: Props) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
            </div>
            <select name={inputName} defaultValue={value} className="select select-sm select-bordered bg-neutral">
                <option value={value}>{defaultText}</option>
                {options.map((option: string, index: number) =>
                    <option value={index + 1} key={index}>
                        {option}
                    </option>)}
            </select>
        </label>
    );
};

export default EditSelectInputId;