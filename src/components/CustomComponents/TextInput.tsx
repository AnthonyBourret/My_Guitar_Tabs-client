import React from 'react';

interface Props {
    label: string,
    inputName: string,
    placeholder: string,
};

function TextInput({ label, inputName, placeholder }: Props) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
            </div>
            <input type="text" name={inputName} placeholder={placeholder} className="input input-sm input-bordered w-full bg-neutral" />
        </label>
    );
};

export default TextInput;