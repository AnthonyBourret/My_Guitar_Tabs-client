import React from 'react';
import {
    difficultyOptions,
    progressionOptions,
    styleOptions,
    capoOptions,
    tuningOptions
} from "../../utils/InputValues";

function FilterDesktop() {
    return (
        <div className="hidden sm:flex flex-col rounded-box w-64 gap-4 bg-base-100 p-4 border border-primary">
            <h2 className="font-semibold">Show songs by :</h2>
            <div className="flex flex-col w-full items-center gap-2">

                {/* Difficuly filter */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Difficulty</span>
                    </div>
                    <select className="select select-sm select-bordered bg-neutral" defaultValue="">
                        <option disabled value="">Pick One</option>
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
                    <select className="select select-sm select-bordered bg-neutral" defaultValue="">
                        <option disabled value="">Pick one</option>
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
                    <select className="select select-sm select-bordered bg-neutral" defaultValue="">
                        <option disabled value="">Pick one</option>
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
                    <select className="select select-sm select-bordered bg-neutral" defaultValue="">
                        <option disabled value="">Pick one</option>
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
                    <select className="select select-sm select-bordered bg-neutral" defaultValue="">
                        <option disabled value="">Fret number</option>
                        {capoOptions.map((option: string, index: number) =>
                            <option key={index} value={option}>
                                {option}
                            </option>)}
                    </select>
                </label>

                {/* Reset filters button */}
                <button type="button" className="btn btn-primary w-fit my-4">Reset filters</button>
            </div>
        </div>
    );
};

export default FilterDesktop;