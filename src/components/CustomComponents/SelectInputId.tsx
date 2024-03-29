import React from 'react';

interface Props {
    label: string,
    inputName: string,
    options: string[],
};

function SelectInputId({ label, inputName, options }: Props) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
            </div>
            <select name={inputName} defaultValue={""} className="select select-sm select-bordered bg-neutral">
                <option disabled value="">Not selected yet</option>
                {options.map((option: string, index: number) =>
                    <option value={index + 1} key={index}>
                        {option}
                    </option>)}
            </select>
        </label>
    );
};

export default SelectInputId;