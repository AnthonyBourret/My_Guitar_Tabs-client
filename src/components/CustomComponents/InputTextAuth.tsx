import React from 'react';

interface Props {
    label: string;
    type: string;
    setterFunction: React.Dispatch<React.SetStateAction<string>>;
}


function InputTextAuth({ label, type, setterFunction }: Props) {

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setterFunction(e.target.value);
    }

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text font-semibold">{label}</span>
            </div>
            <input
                type={type}
                placeholder="Type here"
                className="input input-sm input-bordered w-full"
                onChange={handleChange}
            />
        </label>
    );
};

export default InputTextAuth;