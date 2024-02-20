import React from 'react';
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

//Import Components
import Toast from "./Toast";

// Import SVG
import { IconDelete } from "../../svg";

// Import Hooks
import useToastDisplay from "../../hooks/useToastDisplay";

interface Props {
    label: string,
    inputName: string,
    value: number,
    disabledText: string,
    options: string[],
};

function EditSelectStyleInput({ label, inputName, value, disabledText, options }: Props) {

    const { id } = useParams();

    // States
    const [isVisible, setIsVisible] = React.useState<boolean>(false);
    const [toastMessage, setToastMessage] = React.useState<string>("");

    // Function to delete a style
    async function handleStyleDelete() {
        const res = await axiosInstance.delete(`song/${id}/styles`, { data: { styleId: value } });
        if (res.status === 200) {
            setToastMessage("Style deleted");
            setIsVisible(true);
            setTimeout(() => {
                window.location.reload();
            }, 2500);
        } else {
            setToastMessage("An unexpected error occured");
            setIsVisible(true);
        };
    };

    // useEfect to display the toast
    useToastDisplay(isVisible, setIsVisible);

    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text text-base font-semibold">{label}</span>
                <button
                    type="button"
                    onClick={() => handleStyleDelete()}
                    className="btn btn-xs btn-circle"
                >
                    <IconDelete />
                </button>
            </div>
            <select name={inputName} defaultValue={value} className="select select-sm select-bordered bg-neutral">
                <option disabled>{disabledText}</option>
                {options.map((option: string, index: number) =>
                    <option value={index + 1} key={index}>
                        {option}
                    </option>)}
            </select>

            {/* Toast */}
            {isVisible && <Toast message={toastMessage} />}
        </label>
    );
};

export default EditSelectStyleInput;