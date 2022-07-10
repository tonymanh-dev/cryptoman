import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handleToast = (message) => {
    toast.success(`🦄 ${message}`, {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export const Toast = () => {
    return (
        <div>
            <ToastContainer />
        </div>
    );
};
