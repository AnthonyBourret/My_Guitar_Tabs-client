import React from 'react';

interface Props {
    label: string;
    type: string;
    inputName: string;
};


function InputTextSignup({ label, type, inputName }: Props) {

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text font-semibold">{label}</span>
            </div>
            <input
                type={type}
                name={inputName}
                placeholder="Type here"
                className="input input-sm input-bordered w-full"
            />
        </label>
    );
};

export default InputTextSignup;