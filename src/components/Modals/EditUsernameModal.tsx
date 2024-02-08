import React from 'react';

function EditUsernameModal() {
    return (
        <dialog id="username_modal" className="modal">
            <div className="modal-box flex flex-col gap-6 pb-0 border border-primary min-[440px]:w-3/5 sm:w-2/5 sm:px-10">
                <h3 className="font-semibold text-xl">New username :</h3>
                <input type="text" className="input input-sm input-bordered bg-neutral" placeholder="New username" />
                <button type="submit" className="btn btn-primary btn-md text-lg w-fit self-center">Save</button>
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

export default EditUsernameModal;