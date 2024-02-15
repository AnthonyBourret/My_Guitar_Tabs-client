import React from 'react';
import {
    difficultyOptions,
    progressionOptions,
    styleOptions,
    capoOptions,
    tuningOptions
} from "../../utils/inputValues";
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

                {/* Difficulty filter */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Difficulty</span>
                    </div>
                    <select className="select select-sm select-bordered bg-neutral">
                        <option disabled selected defaultValue={"none"}>Pick one</option>
                        {difficultyOptions.map((option, index) =>
                            <option key={index}>
                                {option}
                            </option>)}
                    </select>
                </label>

                {/* Progression filter */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Progression</span>
                    </div>
                    <select className="select select-sm select-bordered bg-neutral">
                        <option disabled selected defaultValue={"none"}>Pick one</option>
                        {progressionOptions.map((option, index) =>
                            <option key={index}>
                                {option}
                            </option>)}
                    </select>
                </label>

                {/* Style filter */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Style</span>
                    </div>
                    <select className="select select-sm select-bordered bg-neutral">
                        <option disabled selected defaultValue={"none"}>Pick one</option>
                        {/* Todo => .map on the fetched data to display the different styles */}
                        {styleOptions.map((option, index) =>
                            <option key={index}>
                                {option}
                            </option>)}
                    </select>
                </label>

                {/* Tuning filter */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Tuning</span>
                    </div>
                    <select className="select select-sm select-bordered bg-neutral">
                        <option disabled selected defaultValue={"none"}>Pick one</option>
                        {/* Todo => .map on the fetched data to display the different tunings */}
                        {tuningOptions.map((option, index) =>
                            <option key={index}>
                                {option}
                            </option>)}
                    </select>
                </label>

                {/* Capo filter */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Capo</span>
                    </div>
                    <select className="select select-sm select-bordered bg-neutral">
                        <option disabled selected defaultValue={"none"}>Pick one</option>
                        {capoOptions.map((option, index) =>
                            <option key={index}>
                                {option}
                            </option>)}
                    </select>
                </label>

                {/* Reset filters button */}
                <button type="button" className="btn btn-sm btn-primary w-fit my-4">Reset filters</button>
            </div>
        </div>
    );
};

export default FilterMobile;