import { memo } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { useUserContext } from "../utils/hooks/userContext";
import "react-multi-carousel/lib/styles.css";
import { addlist, updateMovie } from "../lib/axios/api-functions/movies";
import {
  BsPlayCircleFill,
  BsPlusLg,
  BiLike,
  AiOutlineDownCircle,
  HiStar,
} from "../icons/index";
import server from "../lib/axios/server";

const MoviesPage = ({ title, urlData, setBanner, setData }) => {
  const { base_url, youtubeLink } = useUserContext();
  const navigation = useNavigate();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 700 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 700, min: 500 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 500, min: 364 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 364, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={``}>
      <h1 className="list-none ml-[10px]  bg-black text-white p-[5px] ">
        {title.toUpperCase()} Movies
      </h1>
      <div className={`grid-parent grid gap-x-5`}>
        <Carousel responsive={responsive} containerClass="carousel-container">
          {urlData?.map((data) => (
            <div key={data.id} className={`hov`}>
              <img
                src={`${base_url}${data.poster_path}`}
                alt=""
                className="h-[45vh] w-[100%] "
              />
              <div className="det bg-[#000000a8] text-white absolute top-[190px] w-[100%] pl-[15px] ">
                <div className="flex pt-[30px]">
                  <div className="flex  ">
                    <BsPlayCircleFill
                      className="text-[30px] border p-[5px] rounded-[50%] mr-[5px]"
                      onClick={() => {
                        setBanner([data]);
                      }}
                    />
                    <BsPlusLg
                      onClick={() => {
                        addlist(data);
                      }}
                      className="text-[30px] border p-[5px] rounded-[50%] mr-[5px]"
                    />
                    <BiLike
                      onClick={async () => {
                        await updateMovie(
                          { ...data, adult: !data.adult },
                          title
                        );
                        server
                          .get(`/${title}`)
                          .then(({ data }) => setData(data));
                      }}
                      className={`text-[30px] border p-[5px] rounded-[50%] ${
                        data.adult ? "bg-blue-700" : ""
                      }`}
                    />
                  </div>
                  <div className="flex flex-1 justify-end mr-[70px] ">
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
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default memo(MoviesPage);
