import React, { useState } from "react";

import { GrLocation } from "react-icons/gr";
import { GoCalendar } from "react-icons/go";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

export default function SearchArea({ update }) {
  const [startDate, setStartDate] = useState();

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/shipping-details");
  };
  return (
    <div className="input_shadow rounded-[14px] bg-white  py-[30px] px-[24px] md:flex items-center mt-[80px] mx-[32px]">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-[96%]">
        <div className="flex items-center">
          <GrLocation className="w-[24px] h-[24px]" color="#868686" />
          <input
            type="text"
            placeholder="Origin, Port, City"
            className="text-[16px] text-[#868686] ml-[16px] w-full"
          />
        </div>
        <div className="flex items-center">
          <GrLocation className="w-[24px] h-[24px]" color="#868686" />
          <input
            type="text"
            placeholder="Destination, Port, City"
            className="text-[16px] text-[#868686] ml-[16px] w-full"
          />
        </div>
        <div className="flex items-center">
          <GoCalendar className="w-[24px] h-[24px] mr-[16px]" color="#868686" />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Pickup Date"
            className="text-[16px] text-[#868686] w-full"
          />
        </div>
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/tQGR9Nj/ship.png"
            alt=""
            className="w-[24px] h-[24px] mr-[16px]"
          />
          <input
            type="text"
            placeholder="Load"
            className="text-[16px] text-[#868686] w-full"
          />
        </div>
      </div>
      <img
        onClick={handleNavigate}
        className="w-[36px] h-[36px] cursor-pointer mt-[16px] md:mt-0"
        src="https://i.ibb.co/sHcKhWS/arrowright.png"
        alt=""
      />
    </div>
  );
}
