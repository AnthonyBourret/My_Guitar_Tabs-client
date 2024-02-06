import React from 'react';

function FilterMobile() {
    return (
        // To display the filters, the collapse component (checkbox type) has to be clicked on
        // It will be closed when the title is clicked on again otherwise it will keep the focus
        <div className="collapse collapse-arrow bg-base-100 border border-primary sm:hidden">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Filter songs by :
            </div>

            {/* On click the filters will be displayed */}
            <div className="collapse-content flex flex-col items-center gap-4">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Difficulty</span>
                    </div>
                    <select className="select select-sm select-bordered bg-neutral">
                        <option disabled defaultValue={"none"}>Pick one</option>
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
                        <option disabled defaultValue={"none"}>Pick one</option>
                        <option>To learn</option>
                        <option>In progress</option>
                        <option>Learned</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Style</span>
                    </div>
                    <select className="select select-sm select-bordered bg-neutral">
                        <option disabled defaultValue={"none"}>Pick one</option>
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
                        <option disabled defaultValue={"none"}>Pick one</option>
                        {/* Todo => .map on the fetched data to display the different tunings */}
                        <option>EADGBE - Standard</option>
                        <option>DADGBE - Drop D</option>
                    </select>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Capo</span>
                    </div>
                    <select className="select select-sm select-bordered bg-neutral">
                        <option disabled defaultValue={"none"}>Pick one</option>
                        <option>None</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </label>
                <button type="button" className="btn btn-sm btn-primary w-fit my-4">Reset filters</button>
            </div>
        </div>
    );
};

export default FilterMobile;