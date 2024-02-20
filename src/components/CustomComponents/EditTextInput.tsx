import React from 'react';

interface Props {
    label: string,
    inputName: string,
    value: string,
};

function EditTextInput({ label, inputName, value }: Props) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
            </div>
            <input
                type="text"
                name={inputName}
                defaultValue={value}
                placeholder={value}
                className="input input-sm input-bordered w-full bg-neutral"
            />
        </label>
    );
};

export default EditTextInput;