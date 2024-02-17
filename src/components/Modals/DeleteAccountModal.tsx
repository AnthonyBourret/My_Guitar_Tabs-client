import React from 'react';
import { useCookies } from "react-cookie";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from 'react-router-dom';

function DeleteAccountModal({ userId }: { userId: number }) {
    const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);
    const navigate = useNavigate();

    async function deleteAccount(id: number) {
        try {
            const res = await axiosInstance.delete(`/user/${id}`);
            if (res.status === 200) {
                removeCookie('userInfo');
                navigate("/");
            }
        } catch (error) {
            console.error(error);
        };
    };
    return (
        <dialog id="delete_modal" className="modal">
            <div className="modal-box flex flex-col gap-8 pb-0 pt-12 border border-primary min-[440px]:w-3/5 sm:w-2/5 sm:px-10">
                <p className="font-semibold text-base text-center">Are you sure you want to delete your account ?</p>
                <button
                    onClick={() => deleteAccount(userId)}
                    type="submit"
                    className="btn btn-primary btn-md text-lg w-fit self-center"
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

export default DeleteAccountModal;