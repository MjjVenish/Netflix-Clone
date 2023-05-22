import React, { memo, useState } from "react";
import { useAuth } from "../context/netflixContext";
import { BsPlayCircleFill, BsPlusLg } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { AiOutlineDownCircle } from "react-icons/ai";
import { HiStar } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bxios } from "../context/Axios";

// const base_url = "https://image.tmdb.org/t/p/original";
const MoviesNetflix = ({ title, urlData, setMain }) => {
  const { base_url, youtu } = useAuth();
  const navigation = useNavigate();
  // const [like, setLike] = useState();
  const addlist = async (data) => {
    const getlist = await bxios.post("myList", data);
  };
  // const likesof = async(data) => {
  //   const likes=await bxios.put(``)
  // };

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
        {title}
      </h1>
      <div className={`grid-parent grid gap-x-5`}>
        <Carousel responsive={responsive} containerClass="carousel-container">
          {urlData.map((Data) => (
            <li key={Data.id} className={`hov`}>
              <img
                src={`${base_url}${Data.poster_path}`}
                alt=""
                className="h-[45vh] w-[100%] "
              />
              <div className="det bg-[#000000a8] text-white absolute top-[190px] w-[100%] pl-[15px] ">
                <div className="flex pt-[30px]">
                  <div className="flex  ">
                    <BsPlayCircleFill
                      className="text-[30px] border p-[5px] rounded-[50%] mr-[5px]"
                      onClick={() => {
                        setMain([Data]);
                      }}
                    />
                    <BsPlusLg
                      onClick={() => {
                        addlist(Data);
                      }}
                      className="text-[30px] border p-[5px] rounded-[50%] mr-[5px]"
                    />
                    <BiLike
                      onClick={() => {}}
                      className={`text-[30px] border p-[5px] rounded-[50%] ${
                        ""
                        // like?.video ? "bg-[#0f64db]" : ""
                      }`}
                    />
                  </div>
                  <div className="flex flex-1 justify-end mr-[70px]  ">
                    <AiOutlineDownCircle
                      onClick={() => {
                        navigation(`/browse/${Data.id}`);
                        youtu(Data.video_id);
                      }}
                      className="text-[35px] p-[5px] border rounded-[50%]"
                    />
                  </div>
                </div>
                <div>
                  <h1> Release-{Data.release_date}</h1>
                  <h1 className="  mr-[0px]">
                    {Data.adult ? "U/A 18+" : "U/A 7+"}
                  </h1>
                  <div className="flex">
                    <h1>
                      {Data.original_language === "en" ? "English" : "Spanish"}
                    </h1>
                    <h1 className="flex ml-[65px]">
                      Rating
                      <HiStar className="text-orange-500" />
                      {Data.vote_average}
                    </h1>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default memo(MoviesNetflix);
