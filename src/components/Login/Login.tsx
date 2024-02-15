import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import InputTextAuth from "../CustomComponents/InputTextAuth";
import Toast from "../CustomComponents/Toast";
import Logo from '../../svg/Logo';
import handleLogin from "../../utils/handleLogin";

function Login() {

  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    <div className="w-full flex flex-col gap-4 pt-2 items-center bg-neutral justify-center px-6">

      {/* Logo */}
      <div>
        <Logo widthValue={"100%"} color={"#1C1917"} />
      </div>

      <div className="flex flex-col bg-base-100 items-center p-8 rounded-box border border-primary sm:px-20 sm:w-fit">
        <div className="flex flex-col gap-6 items-center">

          {/* Username Input */}
          <InputTextAuth label="Username :" type={'text'} setterFunction={setUsername} />

          {/* Password Input */}
          <InputTextAuth label="Password :" type={'password'} setterFunction={setPassword} />

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-primary btn-sm px-4 text-base"
            onClick={() => handleLogin(
              username,
              password,
              setCookie as (name: string, value: any, options?: any) => void, // Update the type of setCookie
              setIsVisible,
              setErrorMessage
            )}
          >
            Login
          </button>

          {/* Signup Link */}
          <div className="flex flex-col items-center text-sm">
            <p className="text-center">
              Don't have an account ?
              {' '}
            </p>
            <Link to="/signup" className="link link-info">
              Click here !
            </Link>
          </div>
        </div>
      </div>

      {/* Legal Mentions Link */}
      <div className="mt-8">
        <Link to="/" className="link link-info text-xs">
          Legal Mentions / Privacy Policy
        </Link>
      </div>

      {/* Toast with error message */}
      {isVisible && <Toast message={errorMessage} />}
    </div>
  );
};

export default Login;