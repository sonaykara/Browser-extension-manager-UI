import React from "react";

const Header = () => {
  return (
    <div className="">
      <header className=" bg-gray-600 h-auto p-5 flex justify-between items-center rounded-2xl">
        <div>
          <img src="/header/logo.svg"></img>
        </div>
        <div className="p-3 bg-gray-400 rounded-xl">
          <img src="/header/icon-sun.svg"></img>
        </div>
      </header>
    </div>
  );
};

export default Header;
