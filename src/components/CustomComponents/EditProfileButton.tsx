import React from 'react';
import { IconEdit } from "../../svg";

function EditProfileButton({ modalName }: { modalName: string }) {
    return (
        <button
            type="button"
            className="btn btn-circle btn-xs"
            onClick={() => {
                if (document) {
                    (document.getElementById(modalName) as HTMLDialogElement).showModal();
                }
            }}
        >
            <IconEdit />
        </button>
    );
};

export default EditProfileButton;