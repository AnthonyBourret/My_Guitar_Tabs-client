import React from 'react';

function FilterMobile() {
    return (
        <div className="sm:flex flex-col rounded-box gap-4 bg-base-100 p-4 border border-primary">
            <h2 className="font-semibold">Show songs by :</h2>
            <div className="flex flex-col w-full items-center gap-2">
                <div className="flex">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Difficulty</span>
                        </div>
                        <select className="select select-sm select-bordered bg-neutral">
                            <option disabled selected>Pick one</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Confirmed</option>
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Progression</span>
                        </div>
                        <select className="select select-sm select-bordered bg-neutral">
                            <option disabled selected>Pick one</option>
                            <option>To learn</option>
                            <option>In progress</option>
                            <option>Learned</option>
                        </select>
                    </label>
                </div>
                <div className="flex">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Style</span>
                        </div>
                        <select className="select select-sm select-bordered bg-neutral">
                            <option disabled selected>Pick one</option>
                            {/* Todo => .map on the fetched data to display the different styles */}
                            <option>Rock</option>
                            <option>Folk</option>
                            <option>Alternative Rock</option>
                            <option>Blues</option>
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-semibold">Tuning</span>
                        </div>
                        <select className="select select-sm select-bordered bg-neutral">
                            <option disabled selected>Pick one</option>
                            {/* Todo => .map on the fetched data to display the different tunings */}
                            <option>EADGBE - Standard</option>
                            <option>DADGBE - Drop D</option>
                        </select>
                    </label>

                </div>
                <label className="form-control w-fit max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Capo</span>
                    </div>
                    <select className="select select-sm select-bordered bg-neutral">
                        <option disabled selected>Pick one</option>
                        <option>None</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </label>
                <button type="button" className="btn btn-primary w-fit my-4">Reset filters</button>
            </div>
        </div>
    );
};

export default FilterMobile;