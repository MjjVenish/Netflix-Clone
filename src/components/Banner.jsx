import { memo } from "react";
import { useUserContext } from "../utils/hooks/userContext";
import { recentAdded } from "../lib/axios/api-functions/movies";
import { BsPlayFill, AiOutlinePlus } from "../icons/index";

const Banner = ({ play, banner, setPlay, addCarts, youtubeLink }) => {
  const { base_url } = useUserContext();
  return (
    <>
      <ul className={`relative `}>
        {banner?.map((val) => (
          <li key={val?.id}>
            <img
              className="h-[70vh] w-[100%]"
              src={`${base_url}${val?.backdrop_path}`}
              alt=""
            />
            <h1 className="absolute text-white top-[25vh] left-[10vh] text-[60px]">
              {val?.title ?? val?.name}
            </h1>
            <button
              onClick={() => {
                setPlay(!play);
                youtubeLink(val?.video_id);
                recentAdded(val);
              }}
              className="flex bg-white text-[20px] absolute px-[22px] py-[6px] rounded-lg top-[38vh] left-[10vh]"
            >
              <BsPlayFill className="mt-[6px]" />
              Play
            </button>
            <button
              onClick={() => addCarts(val)}
              className="flex bg-[#000000c0] text-white absolute rounded-lg px-[28px] py-[9px] top-[38vh] left-[25vh]"
            >
              <AiOutlinePlus className="mt-[6px]" />
              Add List
            </button>
            <h1 className="absolute text-white top-[45vh] left-[10vh] text-[20px]">
              {val.overview}
            </h1>
          </li>
        ))}
      </ul>
    </>
  );
};
export default memo(Banner);
