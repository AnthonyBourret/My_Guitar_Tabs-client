import React from 'react';

interface Props {
    label: string;
    setterFunction: React.Dispatch<React.SetStateAction<string>>;
}


function InputTextAuth({ label, setterFunction }: Props) {

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setterFunction(e.target.value);
    }

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text font-semibold">{label}</span>
            </div>
            <input
                type="text"
                placeholder="Type here"
                className="input input-sm input-bordered w-full"
                onChange={handleChange}
            />
        </label>
    );
};

export default InputTextAuth;