import React from 'react';
import { Link } from 'react-router-dom';
import InputTextForm from "../CustomComponents/InputTextForm";
import Logo from '../../svg/Logo';

function Login() {
  return (
    <div className="w-full flex flex-col gap-4 pt-2 items-center bg-neutral justify-center px-6">

      {/* Logo */}
      <div>
        <Logo widthValue={"100%"} color={"#1C1917"} />
      </div>

      <div className="flex flex-col bg-base-100 items-center p-8 rounded-box border border-primary sm:px-20 sm:w-fit">
        <div className="flex flex-col gap-6 items-center">

          {/* Username Input */}
          <InputTextForm label="Username :" />

          {/* Password Input */}
          <InputTextForm label="Password :" />

          {/* Login Button */}
          <button className="btn btn-primary btn-sm px-4 text-base">
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

      {/* Legal Mentions Link*/}
      <div className="mt-8">
        <Link to="/" className="link link-info text-xs">
          Legal Mentions / Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Login;