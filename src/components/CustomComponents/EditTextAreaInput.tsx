import React from 'react';

interface Props {
    label: string,
    inputName: string,
    value: string,
};

function EditTextAreaInput({ label, inputName, value }: Props) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
            </div>
            <textarea
                name={inputName}
                defaultValue={value}
                className="textarea textarea-bordered h-24 bg-neutral"
                placeholder={value}
            >
            </textarea>
        </label>
    );
};

export default EditTextAreaInput;