import React from 'react';

function EditMailModal() {
    return (
        <dialog id="mail_modal" className="modal">
            <div className="modal-box flex flex-col gap-6 pb-0 border border-primary min-[440px]:w-3/5 sm:w-2/5 sm:px-10">
                <h3 className="font-semibold text-xl">New mail :</h3>
                <input type="text" className="input input-sm input-bordered bg-neutral" placeholder="New mail" />
                <button type="submit" className="btn btn-primary btn-md text-lg w-fit self-center">Save</button>

                {/* Close button */}
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
            </div>

            {/* Close when the outside of the modal is clicked */}
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default EditMailModal;