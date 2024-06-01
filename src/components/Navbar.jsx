import React, { useState } from "react";
import { close, logo, menu } from "../../assets/index";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full p-6 flex justify-between items-center navbar">
      <img src={logo} className="w-[124px] h-[32px]" alt="hoobank" />

      <ul
        className="list-none sm:flex hidden 
      flex-1 justify-end items-center"
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={` text-white
            font-poppins cursor-pointer ${
              index === navLinks.length - 1 ? `mr-0` : `mr-10`
            }`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div
        className="sm:hidden flex flex-1
      justify-end items-center"
      >
        <img
          src={toggle ? close : menu}
          className="cursor-pointer object-contain
        w-[24px] h-[24px]"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          alt=""
        />

        <div
          className={`${toggle ? "flex" : "hidden"} 
        min-w-[140px] p-6 bg-black-gradient top-20
        right-0 mx-4 my-2 rounded-xl 
        absolute sidebar`}
        >
          <ul
            className="list-none flex
            flex-col  
          flex-1 justify-end items-center"
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={` text-white
            font-poppins cursor-pointer ${
              index === navLinks.length - 1 ? `mb-0` : `mb-4`
            }`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
