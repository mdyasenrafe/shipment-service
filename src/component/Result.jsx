import React from "react";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Result({ item }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-[#DADADA] rounded-[14px] result_shadow px-[28px] py-[18px] flex w-full justify-between">
      <div className="w-[90%] border-r border-r-[#A3A3A3]">
        <div className="flex items-center">
          <div
            className={`${
              item.valueType === "Best Value" ? "bg-[#AFFFAD]" : "bg-[#ADBFFF]"
            } w-[97px] h-[33px] btn rounded-[8px] justify-evenly text-[11px]`}
          >
            <div
              className={`${
                item.valueType === "Best Value"
                  ? "bg-[#05FF00]"
                  : "bg-[#446DFF]"
              } w-[9px] h-[9px] rounded-full`}
            ></div>
            {item.valueType}
          </div>
          <p className="text-[#FF0000] text-[13px] border-r border-[#B1B1B199] ml-[24px] pr-[10px]">
            Express
          </p>
          <p className="text-[11px] text-[#565656] ml-[10px]">
            Est. {item.estimationDate} days
          </p>
        </div>
        <div className="flex mt-[20px]">
          <div className="flex items-center">
            <GrLocation
              className="w-[17px] h-[17px] mr-[6px]"
              color="#565656"
            />
            <p className="text-[13px] text-[#565656]">110003, Delhi</p>
            <div className="border-b w-[24px] text-[#565656] mx-[6px]" />
          </div>
          <img
            className="w-[16px] h-[16px]"
            src="https://i.ibb.co/G3fXy5M/airplane.png"
            alt=""
          />
          <div className="flex items-center">
            <div className="border-b w-[24px] text-[#565656] mx-[6px]" />
            <GrLocation
              className="w-[17px] h-[17px] mr-[6px]"
              color="#565656"
            />
            <p className="text-[13px] text-[#565656]">200080, Shanghai</p>
          </div>
        </div>
        <div className="mt-[24px] flex items-center">
          <img
            className="w-[20px] h-[15px]"
            src="https://i.ibb.co/FmM1brx/Frame-34.png"
            alt=""
          />
          <p className="text-[#808080] pl-[6px] pr-[12px]">
            Primetime Worldwide
          </p>
          <Rating
            rating={item.star}
            initialRating={item.star}
            readonly={true}
            emptySymbol={
              <CiStar className="w-[12px] h-[12px]" color="#808080" />
            }
            fullSymbol={
              <BsStarFill className="w-[12px] h-[12px]" color="#9747FF" />
            }
          />
        </div>
      </div>
      <div className="pl-[12px] flex flex-col items-center">
        <h1 className="text-[19px] font-bold text-[#000] mb-[6px]">
          {item.price}
        </h1>
        <button
          onClick={() => navigate("/booking")}
          className="btn w-[101px] bg-primary justify-center h-[39px]"
        >
          Select
        </button>
        <a href="" className="text-[#363636] text-[13px] underline mt-[7px]">
          View details
        </a>
      </div>
    </div>
  );
}
