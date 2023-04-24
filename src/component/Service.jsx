import React from "react";

export default function Service({ data }) {
  return (
    <div className="bg-white p-[24px] rounded-[16px] service_card">
      <div className="flex items-center">
        <img src={data.imageLink} alt="" className="w-[24px] h-[24px]" />
        <h1 className="text-[#000] font-semibold text-[20px] ml-[30px]">
          {data.title}
        </h1>
      </div>
      <div className="my-[20px] border-b-[#9E9E9E] border-b-[0.7px]"></div>
      <p className="text-[16px] text-[#535353] font-medium">
        {data.description}
      </p>
    </div>
  );
}
