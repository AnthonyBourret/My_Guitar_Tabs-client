import React from 'react';

interface Props {
    label: string
};

function InputTextForm({ label }: Props) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text font-semibold">{label}</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full" />
        </label>
    );
};

export default InputTextForm;