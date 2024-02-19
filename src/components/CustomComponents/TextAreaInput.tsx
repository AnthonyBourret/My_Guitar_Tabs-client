import React from 'react';

interface Props {
    label: string,
    inputName: string,
    placeholder: string,
};

function TextAreaInput({ label, inputName, placeholder }: Props) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
            </div>
            <textarea
                name={inputName}
                defaultValue=""
                className="textarea textarea-bordered h-24 bg-neutral"
                placeholder={placeholder}
            >
            </textarea>
        </label>
    );
};

export default TextAreaInput;