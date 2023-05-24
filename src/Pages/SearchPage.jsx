import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/hooks/userContext";
import { getAllMovies, addlist } from "../lib/axios/api-functions/movies";
import {
  BsPlayCircleFill,
  BsPlusLg,
  BiLike,
  AiOutlineDownCircle,
  HiStar,
} from "../icons/index";

const SearchPage = () => {
  const { base_url, search, youtubeLink } = useUserContext();
  const [totalData, setTotalData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    getAllMovies().then(({ data }) => setTotalData(data));
  }, []);

  return (
    <>
      <div className="overflow-x-auto sea">
        {search.length > 0 && (
          <ul className={`grid grid-cols-5`}>
            {totalData?.map((data) =>
              data?.title?.toLowerCase()?.includes(search?.toLowerCase()) ? (
                <li key={data.video_id} className="flex-1 hov">
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
                      <div className="flex flex-1 justify-end mr-[70px]  ">
                        <AiOutlineDownCircle
                          onClick={() => {
                            navigation(`/browse/${data.id}`);
                            youtubeLink(data.video_id);
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
                          {data.original_language === "en"
                            ? "English"
                            : "Spanish"}
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
              ) : (
                ""
              )
            )}
          </ul>
        )}
      </div>
    </>
  );
};
export default memo(SearchPage);
