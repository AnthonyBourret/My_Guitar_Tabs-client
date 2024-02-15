import React from 'react';

function Toast({ message }: { message: string }) {
    return (
        <div className="toast toast-center sm:toast-end">
            <div className="alert bg-primary border border-base-100">
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Toast;