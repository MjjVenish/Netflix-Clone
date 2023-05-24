import { useEffect, useState } from "react";
import { myCart } from "../lib/axios/api-functions/movies";
import SingleCartPage from "../components/SingleCartPage";

const MyCart = () => {
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
        cart?.map((list) => <SingleCartPage list={list} key={list.id} />)
      ) : (
        <div className="grid justify-center items-center">
          <h1 className="text-3xl"> Cart is Empty</h1>
        </div>
      )}
    </div>
  );
};
export default MyCart;
