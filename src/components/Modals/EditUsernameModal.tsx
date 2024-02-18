import React, { useState, useEffect } from 'react';
import axiosInstance from "../../utils/axiosInstance";

// Immport Components
import Toast from "../CustomComponents/Toast";

// Import utils
import useToastDisplay from "../../hooks/useToastDisplay";
import reloadPageTimeOut from "../../utils/reloadPageTimeOut";


function EditUsernameModal({ userId }: { userId: number }) {

    // States
    const [newUsername, setNewUsername] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState('');

    // Function to get the input value
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewUsername(e.target.value);
    };
    // Function to send the new username to the server
    async function handleSubmit(id: number) {
        // If the input is empty, display a Toast and return
        if (newUsername === "") {
            setToastMessage("Please enter a username");
            setIsVisible(true);
            return;
        }
        try {
            const response = await axiosInstance.patch(`/user/${id}`, {
                username: newUsername,
            });
            console.log(response.data);
            setToastMessage(response.data);
            setIsVisible(true);
            reloadPageTimeOut();
        } catch (error) {
            console.log(error);
            setToastMessage("An error occurred");
            setIsVisible(true);
        };
    };

    // UseEffect to remove the Toast after 4 seconds
    useToastDisplay(isVisible, setIsVisible);

    return (
        <dialog id="username_modal" className="modal">
            <div className="modal-box flex flex-col gap-6 pb-0 border border-primary min-[440px]:w-3/5 sm:w-2/5 sm:px-10">
                <h3 className="font-semibold text-xl">New username :</h3>
                <input
                    type="text"
                    className="input input-sm input-bordered bg-neutral"
                    placeholder="New username"
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-md text-lg w-fit self-center"
                    onClick={() => handleSubmit(userId)}
                >
                    Save
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

            {/* Toast */}
            {isVisible && <Toast message={toastMessage} />}
        </dialog>
    );
};

export default EditUsernameModal;