import React from "react";
import SmallButton from "./Buttons/SmallButton";

const Roomie = () => {
  return (
    <div className="border-4 border-black  max-w-xs">
      <img
        src="https://i.ibb.co/5RvVnkL/3.jpg"
        alt="Roomate"
        className="h-64 w-full object-cover"
      />
      <div className="py-4 flex flex-row border-4 gap-36 border-yellow-500">
        <div className="font-robot font-medium ml-2">
          <p>Name:</p>
          <p>Area:</p>
        </div>
        <div className="mr-2 justify-items-end">
          <SmallButton />
        </div>
      </div>
    </div>
  );
};

export default Roomie;
