import React from 'react';
import * as EmailValidator from 'email-validator';
import axiosInstance from "../utils/axiosInstance";

async function handleSignup(
    username: string,
    email: string,
    password: string,
    confirmedPassword: string,
    isCGUAccepted: boolean,
    setCookie: (name: string, value: any, options?: any) => void,
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
) {
    // Check if the fields are filled & if the email is valid
    if (username === '') {
        setErrorMessage("Please, enter a username.");
        setIsVisible(true);
        return;
    };
    if (email === '') {
        setErrorMessage("Please, enter an email.");
        setIsVisible(true);
        return;
    };
    if (!EmailValidator.validate(email)) {
        setErrorMessage("Please, enter a valid email.");
        setIsVisible(true);
        return;
    };
    if (password === '') {
        setErrorMessage("Please, enter a password.");
        setIsVisible(true);
        return;
    };
    if (confirmedPassword === '' && password !== '') {
        setErrorMessage("Please, confirm your password.");
        setIsVisible(true);
        return;
    };
    if (password !== confirmedPassword) {
        setErrorMessage("Passwords do not match.");
        setIsVisible(true);
        return;
    };
    if (username === '' && email === '' && password === '' && confirmedPassword === '') {
        setErrorMessage("Please, fill all the fields.");
        setIsVisible(true);
        return;
    };
    if (isCGUAccepted === false) {
        setErrorMessage("Please, accept the CGU.");
        setIsVisible(true);
        return;
    };

    // Send the request to the server
    const res = await axiosInstance.post('/signup', {
        username: username,
        mail: email,
        password: password,
        passwordConfirm: confirmedPassword,
    })
        // If the request is successful, set the cookie with the userId
        .then((res) => {
            console.log(res);
            if (res.status === 200) {
                setCookie('userInfo', res.data, { path: '/' });
                console.log('success');
            }
        })
        // If the request fails, display an error message
        .catch((error) => {
            setIsVisible(true);
            setErrorMessage(error.response.data.error);
            console.log(error);
        });
};

export default handleSignup;