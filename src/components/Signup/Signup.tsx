import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";

// Import Components
import InputTextAuth from "../CustomComponents/InputTextAuth";
import Toast from "../CustomComponents/Toast";

// Import SVG
import Logo from '../../svg/Logo';

// Import Function
import handleSignup from "../../utils/handleSignup";


function Signup() {

  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);

  // States
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmedPassword, setConfirmedPassword] = useState<string>('');
  const [isCGUAccepted, setIsCGUAccepted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

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
                onChange={(e) => setIsCGUAccepted(e.target.checked ? true : false)}
              />
            </label>
          </div>

          {/* Login Button */}
          <button
            className="btn btn-primary btn-sm px-4 text-base sm:my-2"
            type="submit"
            onClick={() => handleSignup(
              username,
              email,
              password,
              confirmedPassword,
              isCGUAccepted,
              setCookie as (name: string, value: any, options?: any) => void, // Update the type of setCookie
              setIsVisible,
              setErrorMessage
            )}
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