import { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useUserContext } from "../utils/hooks/userContext";
import server from "../lib/axios/server";
import { BsPlayFill } from "../icons/index";

const SinglePage = () => {
  const { base_url, links } = useUserContext();
  const [singleSetMovie, setSingleSetMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const singleMovie = async () => {
      const { data } = await server.get(`/movies/${id}`);
      setSingleSetMovie([data]);
    };
    singleMovie();
  }, [id]);
  const [singlePlay, setSinglePlay] = useState(true);
  const navigation = useNavigate();

  return (
    <div className="h-[100vh] bg-black">
      {singlePlay ? (
        singleSetMovie.length > 0 ? (
          <ul className="bg-black">
            {singleSetMovie?.map((movie) => (
              <li key={movie.id} className="text-white h-[100vh]">
                <img
                  src={`${base_url}${movie.backdrop_path}`}
                  alt=""
                  className="w-full h-[70vh]"
                />
                <div className="absolute py-[14px] top-44 left-8">
                  <h1 className="mb-[18px]">{movie.title ?? movie.name}</h1>
                  <div className="">
                    <button
                      onClick={() => {
                        setSinglePlay(!singlePlay);
                      }}
                      className="px-[28px] py-2 flex text-2xl bg-white rounded-lg text-black mb-[18px]"
                    >
                      <BsPlayFill className="text-3xl" />
                      Play
                    </button>
                  </div>
                  <h1 className="top-[50vh] text-3xl font-mono">
                    {movie.overview}
                  </h1>
                </div>
                <h1 className="mb-[18px] ml-[20px] text-3xl">
                  About-{movie.title ?? movie.name}
                </h1>
                <h1 className="ml-[20px]">Poupulartiy:{movie.popularity}</h1>
                <h1 className="ml-[20px]">Release Date:{movie.release_date}</h1>
                <h1 className="ml-[20px]">
                  Rating of The Movie:{movie.vote_average}
                </h1>
                <h1 className="ml-[20px]">Vote Count:{movie.vote_count}</h1>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )
      ) : (
        <YouTube
          videoId={`${links}`}
          opts={{
            width: "1518",
            height: "800",
            playerVars: { autoplay: 1, controls: 0 },
          }}
        />
      )}
      <button
        onClick={() => navigation("/browse")}
        className="text-xl bg-[#fa3a3a] rounded-[50%] text-white px-4 absolute py-2 right-[20px] top-[20px]"
      >
        X
      </button>
    </div>
  );
};
export default memo(SinglePage);
