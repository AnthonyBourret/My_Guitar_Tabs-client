import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axiosInstance from "../../utils/axiosInstance";
import InputTextAuth from "../CustomComponents/InputTextAuth";
import Logo from '../../svg/Logo';

function Login() {
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  async function handleSubmit(name: string, pswd: string) {
    const res = await axiosInstance.post('/login', {
      username: name,
      password: pswd
    })
    if (res.status === 200) {
      setCookie('userId', res.data.id, { path: '/' });
      console.log('success');
    } else {
      console.log('error');
    }
  }

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
            onClick={() => handleSubmit(username, password)}
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