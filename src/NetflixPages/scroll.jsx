import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Scroll = ({}) => {
  return (
    <div className="">
      <div className="border rounded-[50%] p-[12px] text-white absolute left-0">
        <AiOutlineArrowLeft className="" />
      </div>
      <div className="border rounded-[50%] p-[12px] text-white absolute right-0">
        <AiOutlineArrowRight className=" " />
      </div>
    </div>
  );
};
export default Scroll;
