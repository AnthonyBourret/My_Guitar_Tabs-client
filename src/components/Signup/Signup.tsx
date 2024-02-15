import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import * as EmailValidator from 'email-validator';
import axiosInstance from "../../utils/axiosInstance";
import InputTextAuth from "../CustomComponents/InputTextAuth";
import Toast from "../CustomComponents/Toast";
import Logo from '../../svg/Logo';

function Signup() {
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [isCGUAccepted, setIsCGUAccepted] = useState('false');
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fucntion to handle the signup
  async function handleSignup(username: string, email: string, password: string, confirmedPassword: string) {

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
    if (isCGUAccepted === 'false') {
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
          setCookie('userId', res.data, { path: '/' });
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

  // UseEffect to remove the Toast after 4 seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className="w-full flex flex-col gap-2 items-center bg-neutral justify-center px-6">

      {/* Logo */}
      <div className="flex justify-center">
        <Logo widthValue={"80%"} color={"#1C1917"} />
      </div>

      <div className="flex flex-col bg-base-100 items-center p-8 py-4 rounded-box border border-primary sm:w-2/5">
        <div className="flex flex-col gap-4 sm:w-2/3 items-center">

          {/* Username Input */}
          <InputTextAuth label="Username :" type={'text'} setterFunction={setUsername} />

          {/* Email Input */}
          <InputTextAuth label="Email :" type={'email'} setterFunction={setEmail} />

          {/* Password Input */}
          <InputTextAuth label="Password :" type={'password'} setterFunction={setPassword} />

          {/* Confirm Password Input */}
          <InputTextAuth label="Confirm Password :" type={'password'} setterFunction={setConfirmedPassword} />

          {/* Accept CGU Checkbox*/}
          <div className="form-control sm:self-center">
            <label className="cursor-pointer label">
              <span className="label-text font-semibold mr-4">Accept CGU</span>
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-success"
                onChange={(e) => setIsCGUAccepted(e.target.checked ? 'true' : 'false')}
              />
            </label>
          </div>

          {/* Login Button */}
          <button
            className="btn btn-primary btn-sm px-4 text-base sm:my-2"
            type="submit"
            onClick={() => handleSignup(username, email, password, confirmedPassword)}
          >
            Signup
          </button>
        </div>
      </div>

      {/* Legal Mentions Link*/}
      <div>
        <Link to="/" className="link link-info text-xs">
          Legal Mentions / Privacy Policy
        </Link>
      </div>

      {/* Toast */}
      {isVisible && <Toast message={errorMessage} />}
    </div>
  );
};

export default Signup;