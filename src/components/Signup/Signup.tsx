import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axiosInstance from "../../utils/axiosInstance";
import InputTextAuth from "../CustomComponents/InputTextAuth";
import Logo from '../../svg/Logo';

function Signup() {
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [isCGUAccepted, setIsCGUAccepted] = useState('false')

  async function handleSignup(username: string, email: string, password: string, confirmedPassword: string) {

    if (password === confirmedPassword) {
      const res = await axiosInstance.post('/signup', {
        username: username,
        mail: email,
        password: password,
        passwordConfirm: confirmedPassword,
      })
      if (res.status === 200) {
        setCookie('userId', res.data, { path: '/' });
        console.log('success');
      } else {
        console.log('error');
      }
    } else {
      return null;
    }
  }

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
          <InputTextAuth label="Email :" type={'text'} setterFunction={setEmail} />

          {/* Password Input */}
          <InputTextAuth label="Password :" type={'password'} setterFunction={setPassword} />

          {/* Confirm Password Input */}
          <InputTextAuth label="Confirm Password :" type={'password'} setterFunction={setConfirmedPassword} />

          {/* Accept CGU Checkbox*/}
          <div className="form-control sm:self-start">
            <label className="cursor-pointer label">
              <span className="label-text font-semibold mr-4">Accept CGU</span>
              <input
                type="checkbox"
                className="checkbox checkbox-xs checkbox-success"
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
    </div>
  );
};

export default Signup;