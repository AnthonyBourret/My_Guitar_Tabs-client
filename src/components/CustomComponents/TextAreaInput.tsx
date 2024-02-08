import React from 'react';

function TextAreaInput({ label, placeholder }: { label: string, placeholder: string }) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
            </div>
            <textarea className="textarea textarea-bordered h-24 bg-neutral" placeholder={placeholder}></textarea>
        </label>
    );
};

export default TextAreaInput;