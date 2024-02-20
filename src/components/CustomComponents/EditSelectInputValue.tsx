import React from 'react';

interface Props {
    label: string,
    inputName: string,
    value: string,
    disabledText: string,
    options: string[],
};

function EditSelectInputValue({ label, inputName, value, disabledText, options }: Props) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
            </div>
            <select name={inputName} defaultValue={value} className="select select-sm select-bordered bg-neutral">
                <option>{disabledText}</option>
                {options.filter((x) => x !== value).map((option: string, index: number) =>
                    <option value={option} key={index}>
                        {option}
                    </option>)}
            </select>
        </label>
    );
};

export default EditSelectInputValue;