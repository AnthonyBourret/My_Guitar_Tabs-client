import React from 'react';

function DeleteAccountModal() {
    return (
        <dialog id="delete_modal" className="modal">
            <div className="modal-box flex flex-col gap-8 pb-0 pt-12 border border-primary min-[440px]:w-3/5 sm:w-2/5 sm:px-10">
                <p className="font-semibold text-base text-center">Are you sure you want to delete your account ?</p>
                <button type="submit" className="btn btn-primary btn-md text-lg w-fit self-center">Delete</button>
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

export default DeleteAccountModal;