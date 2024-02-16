import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import axiosInstance from "../../utils/axiosInstance";

function EditUsernameModal() {
    const [cookies, setCookie, removeCookie] = useCookies(["userInfo"]);
    const id = cookies.userInfo.id;
    const pic = cookies.userInfo.picture;

    const [newUsername, setNewUsername] = useState<string>("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setNewUsername(e.target.value);
    };

    async function handleSubmit(id: number) {
        try {
            const response = await axiosInstance.patch(`/user/${id}`, {
                username: newUsername,
            });
            removeCookie("userInfo");
            setCookie("userInfo", {
                id: id,
                username: newUsername,
                picture: pic,
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        };
    };

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
                    onClick={() => handleSubmit(id)}
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
        </dialog>
    );
};

export default EditUsernameModal;