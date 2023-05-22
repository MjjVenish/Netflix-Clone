import React, { memo } from "react";
import { NavLink } from "react-router-dom";
// import { MdLanguage } from "react-icons/md";
import netflix from "../assets/pngwing.com.png";
const HomePage = () => {
  return (
    <div className="h-[110vh] bg-black bg-ime ">
      <img
        src={netflix}
        alt=""
        className="w-[190px] h-[50px] absolute left-[150px] top-[40px]"
      />
      <nav className="flex justify-end  mr-[120px] ]">
        <select
          name=""
          id=""
          className=" px-[36px] pr-[10px] py-[6px] mt-[40px] relative bg-[#1b1a1a] text-white"
        >
          {/* <MdLanguage className="text-white absolute " /> */}
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
        <NavLink
          to={"/login"}
          className={
            "bg-[#e50914] rounded-[0.25rem] text-white px-[10px] py-[5px] mx-[40px] mt-[40px] "
          }
        >
          Sign In
        </NavLink>
      </nav>
      <div className="grid h-[95vh]  items-center">
        <div className="text-white grid justify-center items-center  ">
          <h1 className="text-[50px] font-black">
            Unlimted movies,TV shows and more.
          </h1>
          <h3 className="text-center tracking-[1px] text-[20px]">
            Watch anywhere.Cancel anytime.
          </h3>
          <h3 className="mt-[16px] text-center text-[18px]">
            Ready to watch?Enter your email to create or restart your
            membership.
          </h3>
          <form className="mt-[16px] text-center relative">
            <input
              type="email"
              placeholder=" "
              className=" px-[10px] py-[8px] w-[320px]  bg-[#4b4949] fouc"
            />
            <label htmlFor="" className="absolute left-[250px] top-[7px] ">
              Email Address
            </label>
            <input
              type="submit"
              value={"Get Started >"}
              className="bg-[#e50914] px-[16px] py-[8px] ml-[5px] text-[17px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default memo(HomePage);
