import React, { useContext } from "react";
import store from "../../zustand/store";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const { setCurrency } = store();
  const navigate = useNavigate();

  function redirectToHome() {
    navigate('/')
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
       
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
