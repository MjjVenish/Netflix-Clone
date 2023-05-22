import React, { memo, useEffect, useState } from "react";
import { useUserContext } from "../context/netflixContext";
import { bxios } from "../context/Axios";

const AddList = () => {
  const { base_url } = useUserContext();
  const [cart, setCart] = useState([]);
  const getcart = async () => {
    const { data } = await bxios.get("/myList");
    setCart(data);
  };
  const delList = async (is) => {
    await bxios.delete(`/myList/${is}`);
  };
  useEffect(() => {
    getcart();
  }, []);
  return (
    <div
      className={`grid  justify-center text-white bg-black ${
        cart.length > 3 ? "h-auto" : "h-[100vh] "
      }`}
    >
      {cart.length > 0 ? (
        cart.map((List) => (
          <li
            className="flex w-[130vh] h-[30vh] mt-[20px] border ov"
            key={List.id}
          >
            <div className="grid p-[7px] items-center">
              <img
                src={`${base_url}${List.backdrop_path}`}
                alt=""
                className=" h-[25vh]"
              />
            </div>
            <div className="grid items-center  border-l-0 text-white pl-[10px] relative">
              <h1>{List.title ?? List.name}</h1>
              <h1>{List.popularity} Popularity</h1>
              <h1>{List.overview}</h1>
              <h1>
                Langugage:
                {List.original_language === "en" ? "English" : "Spanish"}
              </h1>
              <a
                href=""
                onClick={() => {
                  delList(List.id);
                  window.refresh();
                }}
                className="bg-red-700 p-[10px] absolute 
                rounded-[50%] right-[-10px] top-[-10px] cursor-pointer"
              >
                X
              </a>
            </div>
          </li>
        ))
      ) : (
        <div className="grid justify-center items-center">
          <h1 className="text-3xl"> Cart is Emtey</h1>
        </div>
      )}
    </div>
  );
};
export default memo(AddList);
