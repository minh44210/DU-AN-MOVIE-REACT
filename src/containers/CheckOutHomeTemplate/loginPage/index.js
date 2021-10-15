import React, { Component } from "react";
import "./style.css";

export default class LoginHomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <header>
            <a
              aria-label="Linkedin"
              className="z-10 mt-9 absolute md:ml-12 ml-9"
              href="/"
            ></a>
          </header>
          <div className="h-screen bg-white relative flex flex-col space-y-10 justify-center items-center">
            <div className="bg-white md:shadow-lg shadow-none rounded p-6 w-96">
              <h1 className="text-3xl font-bold leading-normal">Sign in</h1>
              <p className="text-sm leading-normal">
                Stay updated on your professional world
              </p>
              <form className="space-y-5 mt-5">
                <div className="mb-4 relative">
                  <input
                    id="email"
                    className="w-full rounded px-3 border border-gray-500 pt-5 pb-2 focus:outline-none input active:outline-none"
                    type="text"
                    autofocus
                  />
                  <label
                    htmlFor="email"
                    className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
                  >
                    Email or Phone
                  </label>
                </div>
                <div className="relative flex items-center border border-gray-500 focus:ring focus:border-blue-500 rounded">
                  <input
                    id="password"
                    className="w-full rounded px-3 pt-5 outline-none pb-2 focus:outline-none active:outline-none input active:border-blue-500"
                    type="password"
                  />
                  <label
                    htmlFor="password"
                    className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-500 text-base mt-2 cursor-text"
                  >
                    Password
                  </label>
                  <a className="text-sm font-bold text-blue-700 hover:bg-blue-100 rounded-full px-2 py-1 mr-1 leading-normal cursor-pointer">
                    show
                  </a>
                </div>
                <div className="-m-2">
                  <a
                    className="font-bold text-blue-700 hover:bg-blue-200 hover:underline hover:p-5 p-2 rounded-full"
                    href="#"
                  >
                    Forgot password?123123g
                  </a>
                </div>
                <button className="w-full text-center bg-blue-700 hover:bg-blue-900 rounded-full text-white py-3 font-medium">
                  Sign in
                </button>
              </form>
            </div>
            <p>
              <a
                className="text-blue-700 font-bold hover:bg-blue-200 hover:underline hover:p-5 p-2 rounded-full"
                href="#"
              >
                Join now
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
