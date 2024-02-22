import React from 'react';
import {
    difficultyOptions,
    progressionOptions,
    styleOptions,
    capoOptions,
    tuningOptions
} from "../../utils/InputValues";

// Import Types
import { FilterProps } from "../../types/types";


function FilterMobile({ setFilters }: FilterProps) {

    // Function to handle the changes in the filters
    function handleChanges(e: React.ChangeEvent<HTMLSelectElement>) {
        const { name, value } = e.target;
        setFilters((prevFilters: any) => ({
            ...prevFilters,
            [name]: value
        }));
    };

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
                    <select
                        className="select select-sm select-bordered bg-neutral"
                        defaultValue=""
                        onChange={handleChanges}
                        name="difficulty"
                    >
                        <option value="">None</option>
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
                    <select
                        className="select select-sm select-bordered bg-neutral"
                        defaultValue=""
                        onChange={handleChanges}
                        name="status"
                    >
                        <option value="">None</option>
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
                    <select
                        className="select select-sm select-bordered bg-neutral"
                        defaultValue=""
                        onChange={handleChanges}
                        name="Styles"
                    >
                        <option value="">None</option>
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
                    <select
                        className="select select-sm select-bordered bg-neutral"
                        defaultValue=""
                        onChange={handleChanges}
                        name="Tuning"
                    >
                        <option value="">None</option>
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
                    <select
                        className="select select-sm select-bordered bg-neutral"
                        defaultValue=""
                        onChange={handleChanges}
                        name="capo"
                    >
                        <option value="">Not chosen</option>
                        {capoOptions.map((option, index) =>
                            <option key={index}>
                                {option}
                            </option>)}
                    </select>
                </label>

                {/* Reset filters button */}
                <button
                    type="button"
                    className="btn btn-sm btn-primary w-fit my-4"
                    onClick={() => setFilters({
                        difficulty: '',
                        status: '',
                        Styles: '',
                        Tuning: '',
                        capo: ''
                    })}
                >
                    Reset filters</button>
            </div>
        </div>
    );
};

export default FilterMobile;