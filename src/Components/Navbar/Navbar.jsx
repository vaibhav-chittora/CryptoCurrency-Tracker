import React, { useContext } from "react";
import { CurrencyContext } from "../../context/currencyContext";
import store from "../../zustand/store";
import { useNavigate } from "react-router-dom";

function Navbar() {

  // const {setCurrency} =  useContext(CurrencyContext)
  const { setCurrency } = store();
  const navigate = useNavigate();

  function redirectToHome() {
    navigate('/')
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
        <a
          className="btn btn-ghost text-xl text-white rounded-md border border-yellow-400"
          onClick={() => redirectToHome()}
        >Crypto Tracker</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='rounded-md border border-yellow-400 mx-3 text-white hover:bg-yellow-400 hover:text-black hover:rounded-md'>
            <a onClick={() => setCurrency('inr')}>INR</a>
          </li>
          <li className='rounded-md border border-yellow-400 mx-3 text-white hover:bg-yellow-400 hover:text-black hover:rounded-md'>
            <a onClick={() => setCurrency('usd')}>USD</a>
          </li>

        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-white rounded-md border border-yellow-400 hover:btn-warning hover:text-black">Compare</a>
      </div>
    </div>
  );
}

export default Navbar;
