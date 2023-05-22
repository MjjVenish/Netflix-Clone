import React, { memo, useEffect, useState } from "react";
import { bxios } from "../context/Axios";
import { BsPlayCircleFill, BsPlusLg } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { AiOutlineDownCircle } from "react-icons/ai";
import { HiStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/netflixContext";

const RecentAdded = () => {
  const { base_url, youtu } = useUserContext();
  const [recent, setRecent] = useState([]);
  const navigation = useNavigate();

  const recentList = async () => {
    const { data } = await bxios.get("/recent");
    setRecent(
      data.length > 10
        ? recentDelete(data.reverse()[data.length - 1])
        : data.reverse()
    );
  };
  const recentDelete = async (data) => {
    const fel = await bxios.delete(`/recent/${data.id}`);
  };
  useEffect(() => {
    recentList();
  }, []);
  const addlist = async (data) => {
    await bxios.post("myList", data);
  };

  return (
    <>
      {recent.length > 0 ? (
        <ul className="grid grid-cols-5 h-[100vh] bg-black">
          {recent?.map((data) => (
            <li key={data.id} className="hov">
              <img
                className="h-[40vh] w-[100%]"
                src={`${base_url}${data.poster_path}`}
                alt=""
              />
              <div className="det bg-[#000000a8] text-white absolute top-[153px] w-[100%] pl-[15px] ">
                <div className="flex pt-[30px]">
                  <div className="flex  ">
                    <BsPlayCircleFill className="text-[30px] border p-[5px] rounded-[50%] mr-[5px]" />
                    <BsPlusLg
                      onClick={() => {
                        addlist(data);
                      }}
                      className="text-[30px] border p-[5px] rounded-[50%] mr-[5px]"
                    />
                    <BiLike
                      className={`text-[30px] border p-[5px] rounded-[50%] ${""}`}
                    />
                  </div>
                  <div className="flex flex-1 ml-[70px]">
                    <AiOutlineDownCircle
                      onClick={() => {
                        navigation(`/browse/${data.id}`);
                        youtu(data.video_id);
                      }}
                      className="text-[35px] p-[5px] border rounded-[50%]"
                    />
                  </div>
                </div>
                <div>
                  <h1> Release-{data.release_date}</h1>
                  <h1 className="  mr-[0px]">
                    {data.adult ? "U/A 18+" : "U/A 7+"}
                  </h1>
                  <div className="flex">
                    <h1>
                      {data.original_language === "en" ? "English" : "Spanish"}
                    </h1>
                    <h1 className="flex ml-[65px]">
                      Rating
                      <HiStar className="text-orange-500" />
                      {data.vote_average}
                    </h1>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};
export default memo(RecentAdded);
