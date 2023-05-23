import { memo, useState, useEffect } from "react";
import YouTube from "react-youtube";
import server from "../lib/axios/server";
import { useUserContext } from "../utils/hooks/userContext";
import SearchPage from "./SearchPage";
import MoviesPage from "./MoviesPage";
import {
  getAllMovies,
  popularMovies,
  topratedMovies,
  trendingMovies,
  upcomingMovies,
} from "../lib/axios/api-functions/movies";
import Banner from "../components/Banner";

const HomePage = () => {
  const { search, youtu, linky } = useUserContext();
  const [topRated, setTopRated] = useState([]);
  const [popular, setPouplar] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [trending, setTrending] = useState([]);
  const [banner, setBanner] = useState([]);
  const [play, setPlay] = useState(true);

  const randomMovie = async () => {
    const { data } = await getAllMovies();
    setBanner([data[Math.floor(Math.random() * data?.length - 1)]]);
  };
  useEffect(() => {
    onlineData();
    randomMovie();
  }, []);

  const onlineData = async () => {
    const { data } = await topratedMovies();
    setTopRated(data);

    const populars = await popularMovies();
    setPouplar(populars.data);

    const upcoming = await upcomingMovies();
    setUpComing(upcoming.data);

    const trends = await trendingMovies();
    setTrending(trends.data);
  };

  const addCarts = (id) => {
    server.post("/myList", id);
  };

  return (
    <>
      {search.length > 0 ? (
        <SearchPage />
      ) : play ? (
        <Banner
          play={play}
          banner={banner}
          setPlay={setPlay}
          addCarts={addCarts}
          youtu={youtu}
        />
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
      <MoviesPage
        title="TRENDING MOVIES"
        urlData={trending}
        setBanner={setBanner}
      />
      <MoviesPage
        title="POPULAR MOVIES"
        urlData={popular}
        setBanner={setBanner}
      />
      <MoviesPage
        title="TOP RATED MOVIES"
        urlData={topRated}
        setBanner={setBanner}
      />
      <MoviesPage
        title="UPCOMING MOVIES"
        urlData={upComing}
        setBanner={setBanner}
      />
    </>
  );
};
export default memo(HomePage);
