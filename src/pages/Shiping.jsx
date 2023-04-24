import React, { useState } from "react";
import Layout from "../component/layout/Layout";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import Result from "../component/Result";
import { ResultsData } from "../assets/data/ResultsData";
import { ProgressData } from "../assets/data/ProgressData";
import SearchArea from "../component/SearchArea";

const SideMenuData = ["Filters", "Price", "Modes", "Seller"];
const UpMenuData = [
  "Best Value 5-5 days. $3,121",
  "Quickest 5-5 days. $3,121",
  "Cheapest 5-5 days. $3,121",
];

export default function Shiping() {
  const [selected, setSelected] = useState(0);
  return (
    <Layout>
      <div className="mt-[100px]">
        <div className="rounded-[14px] flex py-[30px] px-[24px] mt-[100px] shiping_container">
          <div className="flex items-center h-[52px] justify-end bg-white rounded-[14px] w-[211px]">
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
          <div className="grid lg:grid-cols-4 gap-4 w-[75%] items-center">
            {ProgressData.map((item) => (
              <div key={item.id}>
                <div className="w-full">
                  <div className="flex items-center">
                    <div className="w-[39px] h-[39px] flex items-center justify-center font-bold rounded-full bg-[#D3B0FF] text-white">
                      {item.id}
                    </div>
                    {item.id !== 4 && (
                      <div className="w-[80%]  ml-[8px] border-b-2 border-b-[#D3B0FF]"></div>
                    )}
                  </div>
                  <p className="text-[13px] text-[#000000] font-normal mt-[8px]">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SearchArea update={true} />
        <div className="border-b border-b-[#B4B4B4] mt-[18px]"></div>
        <div className="mt-[10px] mx-[32px] grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div>
              <h1 className="text-[#000]">
                <span className="font-bold">3 Top Quote</span>{" "}
                <span>(6 in Total)</span>
              </h1>
            </div>
            {SideMenuData.map((item) => (
              <div className="flex justify-between items-center cursor-pointer">
                <p className="text-[16px] text-[#000000] font-semibold mt-[30px]">
                  {item}
                </p>
                <BsChevronDown className="w-[17px] h-[17px] mt-[8px]" />
              </div>
            ))}{" "}
          </div>
          <div className="col-span-3 mt-[15px]">
            <div className="flex bg-[#EBE8FF] upmenu_shadow w-fit mb-[36px]">
              {UpMenuData.map((item, index) => (
                <div
                  className={`${
                    selected === index ? "bg-white rounded-[14px]" : ""
                  } cursor-pointer py-[16px] w-[256px] flex justify-center`}
                  onClick={() => setSelected(index)}
                >
                  <p
                    className={`${
                      selected == index ? "text-[#6f57e9] " : "text-[#868686]"
                    }  font-bold`}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {ResultsData.map((item, index) => (
                <Result key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
