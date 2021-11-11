import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full h-14 bg-purple-800 text-gray-300 items-center flex flex-row justify-between">
      <div className="brand-logo px-4 text-sm font-bold font-fontFamily font-mont">
        Roomie
      </div>
      <ul className="menu-list flex flex-row text-xs font-bold font-fontFamily font-sans">
        <li className="menu-list-item px-2">
          <a href="#">Home</a>
        </li>
        <li className="menu-list-item px-2">
          <a href="#">Find Roomie</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
