import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-[37px] pt-[26px]">
      <div>
        <img className="w-[170px] h-[39px]" src={logo} alt="logo" />
      </div>
      <div className="flex items-center">
        <button className="btn w-[150px] bg-primary justify-center text-[19px] font-semibold mr-[28px]">
          Login
        </button>
        <button className="btn w-[150px] border border-[#6f57e9] justify-center text-[19px] font-semibold mr-[28px]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Navbar;
