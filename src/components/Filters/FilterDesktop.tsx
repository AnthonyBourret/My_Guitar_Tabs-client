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


function FilterDesktop({ setFilters }: FilterProps) {

    // Function to handle the changes in the filters
    function handleChanges(e: React.ChangeEvent<HTMLSelectElement>) {
        const { name, value } = e.target;
        setFilters((prevFilters: any) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    return (
        <div className="hidden min-[770px]:flex flex-col rounded-box w-64 gap-4 bg-base-100 p-4 border border-primary h-fit shadow-xl">
            <h2 className="font-semibold">Show songs by :</h2>
            <div className="flex flex-col w-full items-center gap-2">

                {/* Difficuly filter */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Difficulty</span>
                    </div>
                    <select
                        className="select select-sm select-bordered bg-neutral"
                        onChange={handleChanges}
                        name="difficulty"
                        defaultValue=""
                    >
                        <option value="">-</option>
                        {difficultyOptions.map((option: string, index: number) =>
                            <option key={index} value={option}>
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
                        onChange={handleChanges}
                        name="status"
                        defaultValue=""
                    >
                        <option value="">-</option>
                        {progressionOptions.map((option: string, index: number) =>
                            <option key={index} value={option}>
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
                        onChange={handleChanges}
                        name="Styles"
                        defaultValue=""
                    >
                        <option value="">-</option>
                        {styleOptions.map((option: string, index: number) =>
                            <option key={index} value={option}>
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
                        onChange={handleChanges}
                        name="Tuning"
                        defaultValue=""
                    >
                        <option value="">-</option>
                        {tuningOptions.map((option: string, index: number) =>
                            <option key={index} value={option}>
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
                        onChange={handleChanges}
                        name="capo"
                        defaultValue=""
                    >
                        <option value="">-</option>
                        {capoOptions.map((option: string, index: number) =>
                            <option key={index} value={option}>
                                {option}
                            </option>)}
                    </select>
                </label>

                {/* Reset filters button */}
                <button
                    type="button"
                    className="btn btn-primary w-fit my-4 border border-base-200"
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

export default FilterDesktop;