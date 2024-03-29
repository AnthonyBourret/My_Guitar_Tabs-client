import React from 'react';
import axiosInstance from "../utils/axiosInstance";

async function handleLogin(
    name: string,
    pswd: string,
    setCookie: (name: string, value: any, options?: any) => void,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
) {

    // Check if the fields are empty and setting the error message and the Toast to visible
    if (name === '' && pswd !== '') {
        setToastMessage("Please, enter a username.");
        setIsVisible(true);
        return;
    }
    if (pswd === '' && name !== '') {
        setToastMessage("Please, enter a password.");
        setIsVisible(true);
        return;
    }
    if (name === '' && pswd === '') {
        setToastMessage("Please, fill the login fields.");
        setIsVisible(true);
        return;
    }

    // Post the data to the server
    const res = await axiosInstance.post('/login', {
        username: name,
        password: pswd
    }, { withCredentials: true })
        // If the response is successful, set the cookie with the userId
        .then((res) => {
            if (res.status === 200) {
                setCookie('userInfo', res.data, { path: '/' });
                console.log('success');
            }
        })
        // If the response is an error, display an error message and set the Toast to visible
        .catch((error) => {
            setToastMessage("Invalid username or password.");
            setIsVisible(true);
            console.log(error);
        });
};
export default handleLogin;