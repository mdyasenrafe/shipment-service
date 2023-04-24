import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Service from "../component/Service";
import { GrLocation } from "react-icons/gr";
import { GoCalendar } from "react-icons/go";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

let ServicesData = [
  {
    imageLink: "https://i.ibb.co/Rj0qWBx/ship.png",
    title: "Freight Services",
    description:
      "Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.",
  },
  {
    imageLink: "https://i.ibb.co/J7gN6XL/briefcase.png",
    title: "Business Services",
    description:
      "We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.",
  },
  {
    imageLink: "https://i.ibb.co/kK79h8Z/globalsearch.png",
    title: "Shipping & Logistics",
    description:
      "Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.",
  },
  {
    imageLink: "https://i.ibb.co/hgxg2fv/i24support.png",
    title: "24/7 Support",
    description:
      "Receive support from our experts all over the world at every stage of the process, 24/7.",
  },
];

export default function () {
  const [startDate, setStartDate] = useState();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/shipping-details");
  };
  return (
    <Layout>
      <div className="mt-[100px]  mx-[32px]">
        <div className="mx-auto text-center">
          {" "}
          <h1 className="text-[30px] md:text-[42px] text-[#000] font-semibold">
            Hassle-Free Shipping Solutions
          </h1>
          <p className="text-[18px] md:text-[22px] font-medium text-[#000]">
            Compare, book, and manage your freight across the world’s top
            logistics providers, all on one platform.
          </p>
        </div>
        <div className="input_shadow rounded-[14px] bg-white  py-[30px] px-[24px] md:flex items-center mt-[100px]">
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
              <GoCalendar
                className="w-[24px] h-[24px] mr-[16px]"
                color="#868686"
              />
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
        <div className="mt-[98px]">
          <div className="text-center">
            <h1 className="font-semibold text-[33px] text-[#000]">Services</h1>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[50px]">
            {ServicesData.map((data, index) => (
              <Service data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
