import React from "react";

export default function Navbar() {
  return (
    <div className="fixed w-full h-8 bg-purple-800 text-gray-300 items-center flex flex-row justify-between">
      <div className="brand-logo text-sm font-bold">Roomie</div>
      <ul className="menu-list flex flex-row text-xs font-bold">
        <li className="menu-list-item px-2">
          <a href="#">Home</a>
        </li>
        <li className="menu-list-item px-2">
          <a href="#">Find Roomie</a>
        </li>
      </ul>

      <button className="lg:hidden menu-button">menu</button>
    </div>
  );
}
