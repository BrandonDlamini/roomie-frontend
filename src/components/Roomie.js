import React from "react";
import SmallButton from "./Buttons/SmallButton";

const Roomie = () => {
  return (
    <div className="border-4 border-black  max-w-sm">
      <img
        src="https://i.ibb.co/5RvVnkL/3.jpg"
        alt="Roomate"
        className="h-1/6 w-full object-cover"
      />
      <div className=" py-4 grid grid-cols-3 border-4 gap-4  border-yellow-500">
        <div className=" text-xs col-span-2 w-auto  font-mont font-medium ml-2">
          <p className="font-reg">Brandon Denvers Wayne</p>
          <p className="font-bold text-sm">Area: Hatfield</p>
        </div>
        <div className=" mr-4 justify-items-end">
          <SmallButton />
        </div>
      </div>
    </div>
  );
};

export default Roomie;
//py-4 flex flex-row gap-36
