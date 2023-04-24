import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { BiDollar } from "react-icons/bi";

const Navbar = () => {
  const pn = window.location.pathname;
  console.log(pn);
  return (
    <div className="flex justify-between mx-[37px] pt-[26px]">
      <div>
        <img className="w-[170px] h-[39px]" src={logo} alt="logo" />
      </div>
      {pn === "/shipping-details" ? (
        <>
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/3T4cxwG/dollarsquare.png"
              alt="dollarsquare"
              border="0"
              className="w-[48px] h-[48px] mr-[28px]"
            />
            <button className="btn w-[150px] bg-primary justify-center mr-[28px]">
              Track shipment
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center">
          <button className="btn w-[150px] bg-primary justify-center mr-[28px]">
            Login
          </button>
          <button className="btn w-[150px] border border-[#6f57e9] justify-center  mr-[28px]">
            Learn More
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
