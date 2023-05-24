import { memo } from "react";
import { deleteCart } from "../lib/axios/api-functions/movies";
import { useUserContext } from "../utils/hooks/userContext";

const SingleCart = ({ list }) => {
  const { base_url } = useUserContext();
  return (
    <>
      <li className="flex w-[130vh] h-[30vh] mt-[20px] border ov" key={list.id}>
        <div className="grid p-[7px] items-center">
          <img
            src={`${base_url}${list.backdrop_path}`}
            alt=""
            className=" h-[25vh]"
          />
        </div>
        <div className="grid items-center  border-l-0 text-white pl-[10px] relative">
          <h1>{list.title ?? list.name}</h1>
          <h1>{list.popularity} Popularity</h1>
          <h1>{list.overview}</h1>
          <h1>
            Langugage:
            {list.original_language === "en" ? "English" : "Spanish"}
          </h1>
          <a
            href=""
            onClick={() => deleteCart(list.id)}
            className="bg-red-700 p-[10px] absolute 
                rounded-[50%] right-[-10px] top-[-10px] cursor-pointer"
          >
            X
          </a>
        </div>
      </li>
    </>
  );
};
export default memo(SingleCart);
