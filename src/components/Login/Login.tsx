import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../svg/Logo'

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
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-lg font-semibold">Username :</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs" />
          </label>

          {/* Password Input */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-lg font-semibold">Password :</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-sm input-bordered w-full max-w-xs" />
          </label>

          {/* Login Button */}
          <button className="btn btn-primary btn-sm px-4 text-lg">
            Login
          </button>

          {/* Signup Link */}
          <div className="flex flex-col items-center">
            <p className="text-center">
              Don't have an account yet ?
              {' '}
            </p>
            <Link to="/signup" className="link link-info text-base">
              Click here !
            </Link>
          </div>
        </div>
      </div>

      {/* Legal Mentions Link*/}
      <div className="mt-8">
        <Link to="/" className="link link-info text-sm">
          Legal Mentions / Privacy Policy
        </Link>
      </div>
    </div>
  )
}

export default Login