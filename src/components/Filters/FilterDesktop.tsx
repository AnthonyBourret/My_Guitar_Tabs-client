import React from 'react';

function FilterDesktop() {
    return (
        <div className="hidden sm:flex flex-col rounded-box w-64 gap-4 bg-base-100 p-4 border border-primary">
            <h2>Show songs by :</h2>
            <div className="flex flex-col w-full gap-2">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Difficulty</span>
                    </div>
                    <select className="select select-sm select-bordered bg-neutral">
                        <option disabled selected>Pick one</option>
                        <option>Beginner</option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default FilterDesktop;