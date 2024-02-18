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
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
) {
    // Check if the fields are filled & if the email is valid
    if (username === '') {
        setToastMessage("Please, enter a username.");
        setIsVisible(true);
        return;
    };
    if (email === '') {
        setToastMessage("Please, enter an email.");
        setIsVisible(true);
        return;
    };
    if (!EmailValidator.validate(email)) {
        setToastMessage("Please, enter a valid email.");
        setIsVisible(true);
        return;
    };
    if (password === '') {
        setToastMessage("Please, enter a password.");
        setIsVisible(true);
        return;
    };
    if (confirmedPassword === '' && password !== '') {
        setToastMessage("Please, confirm your password.");
        setIsVisible(true);
        return;
    };
    if (password !== confirmedPassword) {
        setToastMessage("Passwords do not match.");
        setIsVisible(true);
        return;
    };
    if (username === '' && email === '' && password === '' && confirmedPassword === '') {
        setToastMessage("Please, fill all the fields.");
        setIsVisible(true);
        return;
    };
    if (isCGUAccepted === false) {
        setToastMessage("Please, accept the CGU.");
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
                setCookie('userInfo', res.data);
                console.log('success');
            }
        })
        // If the request fails, display an error message
        .catch((error) => {
            setIsVisible(true);
            setToastMessage(error.response.data.error);
            console.log(error);
        });
};

export default handleSignup;