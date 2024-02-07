import React from 'react'

function TextInput({ label, placeholder }: { label: string, placeholder: string }) {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
            </div>
            <input type="text" placeholder={placeholder} className="input input-sm input-bordered w-full bg-neutral" />
        </label>
    )
}

export default TextInput