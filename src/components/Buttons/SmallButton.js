import React from "react";

const SmallButton = ({
  className = "",
  onClick,
  children,
  disabled = false,
  ...props
}) => {
  return (
    <div>
      <button
        className={`${className}shadow-lg font-mont text-xs bg-gradient-to-b from-rmPurple to-rmPink rounded-md px-3 py-2 text-white`}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        MORE INFO
      </button>
    </div>
  );
};

export default SmallButton;
