import React from "react";
import SmallButton from "./Buttons/SmallButton";

const Roomie = () => {
  return (
    <div className="border-4 border-black  max-w-xs">
      <img
        src="https://i.ibb.co/5RvVnkL/3.jpg"
        alt="Roomate"
        className="h-52 w-full object-cover"
      />
      <div>
        <div>
          <SmallButton />
        </div>
        <div>
          <p>Name:</p>
          <p>Area:</p>
        </div>
      </div>
    </div>
  );
};

export default Roomie;
