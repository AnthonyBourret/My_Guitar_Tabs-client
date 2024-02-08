import React from 'react';

function EditProgressionModal() {
    return (
        <dialog id="progression_modal" className="modal">
            <div className="modal-box flex flex-col w-[70%] gap-8 items-center pb-0 pt-14 border border-primary sm:w-fit sm:px-24">
                <h3 className="font-semibold text-2xl">New status :</h3>
                <select className="select select-bordered">
                    <option>To Learn</option>
                    <option>In Progress</option>
                    <option>Learned</option>
                </select>
                <button type="submit" className="btn btn-primary btn-md text-lg">Save</button>
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default EditProgressionModal;