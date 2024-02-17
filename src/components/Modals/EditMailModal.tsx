import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import * as EmailValidator from 'email-validator';
import axiosInstance from "../../utils/axiosInstance";

function EditMailModal({ userId }: { userId: number }) {
    const [mail, setMail] = useState<string>("");

    async function updateMail() {
        if (mail === "") {
            console.error("Field is empty !");
            return;
        }
        if (!EmailValidator.validate(mail)) {
            console.error("Invalid mail !");
            return;
        }
        if (EmailValidator.validate(mail) && mail !== "") {
            try {
                await axiosInstance.patch(`/user/${userId}`, { mail: mail });
                console.log("Mail updated!");
                window.location.href = "/profile";
            } catch (error) {
                console.error(error);
            };
        }
    };

    return (
        <dialog id="mail_modal" className="modal">
            <div className="modal-box flex flex-col gap-6 pb-0 border border-primary min-[440px]:w-3/5 sm:w-2/5 sm:px-10">
                <h3 className="font-semibold text-xl">New mail :</h3>
                <input
                    onChange={(e) => setMail(e.target.value)}
                    type="text"
                    className="input input-sm input-bordered bg-neutral"
                    placeholder="New mail"
                />
                <button
                    onClick={() => { updateMail() }}
                    type="submit"
                    className="btn btn-primary btn-md text-lg w-fit self-center"
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

export default EditMailModal;