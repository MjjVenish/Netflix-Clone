import { memo, useEffect, useState } from "react";
import { useUserContext } from "../utils/hooks/userContext";
import { myCart } from "../lib/axios/api-functions/movies";
import { deleteCart } from "../lib/axios/api-functions/movies";

const MyCart = () => {
  const { base_url } = useUserContext();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    myCart().then(({ data }) => setCart(data));
  }, []);
  return (
    <div
      className={`grid  justify-center text-white bg-black ${
        cart.length > 3 ? "h-auto" : "h-[100vh] "
      }`}
    >
      {cart.length > 0 ? (
        cart?.map((List) => (
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
                  deleteCart(List.id);
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
          <h1 className="text-3xl"> Cart is Empty</h1>
        </div>
      )}
    </div>
  );
};
export default MyCart;
