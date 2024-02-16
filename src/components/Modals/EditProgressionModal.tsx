import React, { useEffect, useState } from 'react';
import axiosInstance from "../../utils/axiosInstance";
import { useParams } from "react-router-dom";

function EditProgressionModal() {
    const { id } = useParams();
    const [status, setStatus] = useState<string>("");
    const [currentStatus, setCurrentStatus] = useState<string>("");

    async function editProgression(status: string, id: string | undefined) {
        if (id) {
            const res = await axiosInstance.patch(`/song/${id}`, {
                status: status
            })
                .then((res) => {
                    console.log(res.data);
                    window.location.href = `/song/${id}`;
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        if (id) {
            axiosInstance.get(`song/${id}`)
                .then((res) => {
                    setCurrentStatus(res.data.status);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [status]);

    return (
        <dialog id="progression_modal" className="modal">
            <div className="modal-box flex flex-col gap-6 pb-0 border border-primary min-[440px]:w-3/5 sm:w-2/5 sm:px-10">
                <h3 className="font-semibold text-2xl">New status :</h3>
                <select
                    onChange={(e) => setStatus(e.target.value)}
                    className="select select-bordered bg-neutral select-sm"
                >
                    <option value={"To learn"} disabled={currentStatus === "To learn"}>To Learn</option>
                    <option value={"In progress"} disabled={currentStatus === "In progress"}>In progress</option>
                    <option value={"Learned"} disabled={currentStatus === "Learned"}>Learned</option>
                </select>
                <button
                    onClick={() => editProgression(status, id)}
                    type="submit"
                    className="btn btn-primary btn-md text-lg w-fit self-center"
                >Save</button>

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

export default EditProgressionModal;