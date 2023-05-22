import React, { memo } from "react";
import { Link } from "react-router-dom";
const ErrorNetflix = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] err text-white">
      <h1 className="text-[40px]">404 ERROR OPOOS....!</h1>
      <br />
      <Link to={"/browse"}>
        <button className="px-[12px] py-[6px] rounded-lg bg-[#e11e35]">
          Return Home
        </button>
      </Link>
    </div>
  );
};
export default memo(ErrorNetflix);
