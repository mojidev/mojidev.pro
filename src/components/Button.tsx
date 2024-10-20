import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button = ({ children, style }: any) => {
  return (
    <button
      type="submit"
      style={style}
      className="w-full px-5 py-4 rounded-full text-white font-[700] hover:bg-secondary-cyangradient bg-secondary-bluegradient "
    >
      {children}
    </button>
  );
};

export default Button;
