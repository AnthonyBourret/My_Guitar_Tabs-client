import React from 'react';
import { Link } from 'react-router-dom';
import InputTextAuth from "../CustomComponents/InputTextAuth";
import Logo from '../../svg/Logo';

function Signup() {
  return (
    <div className="w-full flex flex-col gap-2 items-center bg-neutral justify-center px-6">

      {/* Logo */}
      <div className="flex justify-center">
        <Logo widthValue={"80%"} color={"#1C1917"} />
      </div>

      <div className="flex flex-col bg-base-100 items-center p-8 py-4 rounded-box border border-primary sm:w-2/5">
        <div className="flex flex-col gap-4 sm:w-2/3 items-center">

          {/* Username Input */}
          <InputTextAuth label="Username :" />

          {/* Email Input */}
          <InputTextAuth label="Email :" />

          {/* Password Input */}
          <InputTextAuth label="Password :" />

          {/* Confirm Password Input */}
          <InputTextAuth label="Confirm Password :" />

          {/* Accept CGU Checkbox*/}
          <div className="form-control sm:self-start">
            <label className="cursor-pointer label">
              <span className="label-text font-semibold mr-4">Accept CGU</span>
              <input type="checkbox" className="checkbox checkbox-xs checkbox-success" />
            </label>
          </div>

          {/* Login Button */}
          <button className="btn btn-primary btn-sm px-4 text-base sm:my-2">
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
    </div>
  );
};

export default Signup;