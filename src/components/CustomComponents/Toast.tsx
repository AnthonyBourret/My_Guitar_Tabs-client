import React from 'react';

function Toast({ message }: { message: string | React.JSX.Element }) {
    return (
        <div className="toast toast-center sm:toast-end">
            <div className="alert flex items-center p-4 pb-3 bg-primary border border-base-100 font-semibold">
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Toast;