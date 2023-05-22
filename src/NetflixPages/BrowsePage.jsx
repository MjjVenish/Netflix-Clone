import React, { memo, useState, useEffect } from "react";
import { BsPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import YouTube from "react-youtube";
import { bxios } from "../context/Axios";
import NavBarNetflix from "../components/NavBar";
import MoviesNetflix from "./moviesPage";
import SearchNetflix from "./searchPage";
import { useUserContext } from "../context/netflixContext";

// const base_url = "https://image.tmdb.org/t/p/original";
const BrowseNetflix = () => {
  const { search, youtu, linky, base_url } = useUserContext();

  const [topRated, setTopRated] = useState([]);
  const [popular, setPouplar] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [trending, setTrending] = useState([]);
  const [banner, setBanner] = useState([]);
  const [play, setPlay] = useState(true);
  const recentAdded = async (data) => {
    await bxios.post("recent", data);
  };

  const randomdata = async () => {
    const { data } = await bxios.get("/movies");
    setBanner([data[Math.floor(Math.random() * data.length - 1)]]);
  };
  useEffect(() => {
    onlineData();
    dpjson();
    randomdata();
    // setInterval(() => {
    //   randomdata();
    // }, 10000);
  }, []);

  const onlineData = async () => {
    const response = await bxios.get(`/upComing`);
    setTopRated(response.data);

    const populars = await bxios.get(`/topRated`);
    setPouplar(populars.data);

    const upcoming = await bxios.get(`/popular`);
    setUpComing(upcoming.data);
  };
  const dpjson = async () => {
    const respon = await bxios.get("/trending");
    setTrending(respon.data);
  };
  const addCarts = (id) => {
    bxios.post("/myList", id);
  };

  return (
    <>
      <NavBarNetflix />
      {search.length > 0 ? (
        <SearchNetflix />
      ) : play ? (
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
                  youtu(val?.video_id);
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
      ) : (
        <>
          <YouTube
            containerClassName={"youtube"}
            videoId={`/${linky}`}
            opts={{
              width: "1518",
              height: "600",
              playerVars: { autoplay: 1, controls: 0 },
            }}
          />
          <button
            onClick={() => setPlay(!play)}
            className="absolute px-[12px] py-[6px] bg-white top-[40vh] left-20 rounded-lg"
          >
            Back
          </button>
        </>
      )}
      <MoviesNetflix
        title="TRENDING"
        urlData={trending}
        absos={"absolute"}
        setBanner={setBanner}
      />
      <MoviesNetflix
        title="POPULAR MOVIES"
        urlData={popular}
        setBanner={setBanner}
      />
      <MoviesNetflix
        title="TOP RATED MOVIES"
        urlData={topRated}
        setBanner={setBanner}
      />
      <MoviesNetflix
        title="UPCOMING MOVIES"
        urlData={upComing}
        setBanner={setBanner}
      />
    </>
  );
};
export default memo(BrowseNetflix);
