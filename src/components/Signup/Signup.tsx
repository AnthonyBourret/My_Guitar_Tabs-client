import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import * as EmailValidator from 'email-validator';
import axiosInstance from "../../utils/axiosInstance";


// Import Components
import InputTextSignup from "../CustomComponents/InputTextSignup";
import Toast from "../CustomComponents/Toast";

// Import Hooks
import useToastDisplay from "../../hooks/useToastDisplay";

// Import SVG
import Logo from '../../svg/Logo';

function Signup() {

  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);

  // States
  const [data, setData] = useState();
  const [isCGUAccepted, setIsCGUAccepted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // Check if all the required fields are filled
    if (data.username === '' || data.mail === '' || data.password === '' || data.confirmedPassword === '') {
      setToastMessage('Please fill all the required fields');
      setIsVisible(true);
      return;
    };
    // Check if the email is valid
    if (!EmailValidator.validate(formData.get('mail') as string)) {
      setToastMessage('Please enter a valid email');
      setIsVisible(true);
      return;
    };
    // Check if the two passwords are the same
    if (data.password !== data.passwordConfirm) {
      setToastMessage('Passwords do not match');
      setIsVisible(true);
      return;
    };
    // Check if the CGU are accepted
    if (!isCGUAccepted) {
      setToastMessage('Please accept the CGU');
      setIsVisible(true);
      return;
    };
    const res = await axiosInstance.post('/signup', data);
    if (res.status === 200) {
      setCookie('userInfo', res.data, { path: '/' });
      setToastMessage('Account created !');
      setIsVisible(true);
    } else {
      setToastMessage('An error occured, please try again');
      setIsVisible(true);
      return;
    };
  };

  // UseEffect to remove the Toast after 4 seconds
  useToastDisplay(isVisible, setIsVisible);

  return (
    <div className="w-full flex flex-col gap-2 items-center bg-neutral justify-center px-6">

      {/* Logo */}
      <div className="flex justify-center">
        <Logo widthValue={"80%"} color={"#1C1917"} />
      </div>

      <div className="flex flex-col bg-base-100 items-center p-8 py-4 rounded-box border border-primary min-[820px]:w-2/5 lg:w-1/3">
        <h1 className="text-xl font-semibold mb-6">Create an account</h1>
        {/* Signup Form */}
        <form
          onSubmit={handleSignup}
          className="flex flex-col gap-4 min-[820px]:w-2/3 items-center"
        >
          <InputTextSignup
            label="Username :"
            type={'text'}
            inputName="username"
          />
          <InputTextSignup
            label="Email :"
            type={'email'}
            inputName="mail"
          />
          <InputTextSignup
            label="Password :"
            type={'password'}
            inputName="password"
          />
          <InputTextSignup
            label="Confirm Password :"
            type={'password'}
            inputName="passwordConfirm"
          />

          {/* Accept CGU Checkbox*/}
          <div className="form-control sm:self-center">
            <label className="cursor-pointer label">
              <span className="label-text font-semibold mr-4">Accept CGU</span>
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                onChange={(e) => setIsCGUAccepted(e.target.checked ? true : false)}
              />
            </label>
          </div>

          {/* Login Button */}
          <button
            className="btn btn-primary btn-sm px-4 text-base sm:my-2"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>

      {/* Legal Mentions Link*/}
      <div>
        <Link to="/" className="link link-info text-xs">
          Legal Mentions / Privacy Policy
        </Link>
      </div>

      {/* Toast */}
      {isVisible && <Toast message={toastMessage} />}
    </div>
  );
};

export default Signup;