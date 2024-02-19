import React, { useState } from 'react';
import axiosInstance from "../../utils/axiosInstance";
import { useParams, useNavigate } from "react-router-dom";

function DeleteSongModal() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Function to handle the Enter key
    async function handleKey(e: React.KeyboardEvent) {
        if (e.key === 'Enter') {
            await deleteSong();
        };
    };

    // Function to delete the song
    async function deleteSong() {
        try {
            const res = await axiosInstance.delete(`/song/${id}`);
            if (res.status === 200) {
                navigate("/");
            }
        } catch (error) {
            console.error(error);
        };
    }

    return (
        <dialog id="delete_modal" className="modal">
            <div className="modal-box flex flex-col gap-8 pb-0 pt-12 border border-primary min-[440px]:w-3/5 sm:w-2/5 sm:px-10">
                <p className="font-semibold text-base text-center">Are you sure you want to delete the song ?</p>
                <button
                    type="submit"
                    className="btn btn-primary btn-md text-lg w-fit self-center"
                    onClick={deleteSong}
                    onKeyDown={handleKey}
                >
                    Delete
                </button>

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

export default DeleteSongModal;