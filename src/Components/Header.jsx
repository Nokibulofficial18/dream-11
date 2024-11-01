import { useState } from "react";
import logo from "../assets/logo.png";

const Header = ({ coinAmount }) => {
  const [open, SetOpen] = useState(false);
  const toggle = () => {
    SetOpen(!open);
  };
  const hamburger = (
      <div className='flex flex-col'>
        <div
      className="flex flex-col lg:flex-row lg:justify-between items-center  lg:space-x-10 hover:cursor-pointer"
    >
      <li>
        <a
          className="relative text-base lg:text-xl font-semibold transition-all duration-500 hover:cursor-pointer"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="relative text-base lg:text-xl font-semibold transition-all duration-500 hover:cursor-pointer"
        >
          Fixture
        </a>
      </li>
      <li>
        <a
          className="relative text-base lg:text-xl font-semibold transition-all duration-500 hover:cursor-pointer"
        >
          Teams
        </a>
      </li>
      <li>
        <a
          className="relative text-base lg:text-xl font-semibold transition-all duration-500 hover:cursor-pointer"
        >
          Schedules
        </a>
      </li>
      <li className="block">
        <div className="flex flex-col lg:flex-row lg:px-4 lg:py-2 lg:rounded-xl items-center justify-between border-2 border-black">
          <div className="text-center font-bold lg:mr-2 lg:text-xl">{coinAmount}</div>
          <div className="flex items-center justify-between gap-3">
            <h1 className="font-bold lg:text-xl">Coin</h1>
            <img src="https://i.ibb.co.com/f0JtG5W/360-F-194672016-pf5-HYg-Llm6-Xl-Swu-L7-JE4-Pqvdq0-RFq-K7-V-removebg-preview.png" alt="" className="w-15 h-10" />
          </div>
        </div>
      </li>
    </div>
      </div>
  );
  return (
    <div className="flex flex-row  justify-between items-center my-8 space-y-4 mb-10 z-[70] sticky top-0 text-black transition-all duration-500  rounded-b-xl px-4 py-5 bg-gradient-to-r from-yellow-300 to-sky-300">
      <div className="w-2/12">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hidden lg:flex px-1">{hamburger}</ul>
        <div className="dropdown dropdown-left">
          <div
            tabIndex={0}
            role="button"
            className="lg:hidden"
            onClick={toggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
          {open && (
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-white text-black rounded-box space-y-1 z-[1] mt-3 p-2"
            >
              {hamburger}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;