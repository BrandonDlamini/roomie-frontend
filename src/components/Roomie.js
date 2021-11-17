import React from "react";
import SmallButton from "./Buttons/SmallButton";

const Roomie = () => {
  return (
    <div className="shadow-md max-w-sm">
      <img
        src="https://i.ibb.co/5RvVnkL/3.jpg"
        alt="Roomate"
        className="h-1/6 w-full object-cover"
      />
      <div className="py-5 grid grid-cols-3 gap-4 bg-gray-100">
        <div className=" text-xs col-span-2 w-auto  font-mont font-medium  pl-4">
          <p className="text-sm">Brandon Denvers </p>
          <p className="text-rmPurple font-bold text-sm">Area: Hatfield</p>
        </div>
        <div className=" pt-1 pr-4 justify-items-end ">
          <SmallButton />
        </div>
      </div>
    </div>
  );
};

export default Roomie;
//py-4 flex flex-row gap-36
