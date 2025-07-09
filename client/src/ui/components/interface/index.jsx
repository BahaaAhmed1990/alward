import React from "react";
export default function Interface({ children }) {
  return (
    <div
      id="interface"
      className="absolute w-full h-full z-50 flex justify-center p-1 overflow-hidden   pointer-events-none"
    >
      <div
        id="wrapper"
        className="flex flex-col w-full relative"
      >
        {children}
      </div>
    </div>
  );
}
