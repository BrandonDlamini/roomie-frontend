import React from "react";
import SmallButton from "./Buttons/SmallButton";

const Roomie = () => {
  return (
    <div className="border-4 border-black container sm">
      <div>picture</div>
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
