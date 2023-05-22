import { useContext, useEffect, useState, useMemo, useCallback } from "react";
import { createContext } from "react";
// import api from "../api/api";
import { bxios } from "./Axios";

const contextNet = createContext(null);

const base_url = "https://image.tmdb.org/t/p/original";

const NetflixContext = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  // const [backUsers, setBackUsers] = useState(null);
  const intialUser = useMemo(
    () => ({
      email: "venishmjj@gmail.com",
      phone: "",
      pass: "jugiglgy",
      reminderme: true,
      id: 2,
    }),
    []
  );

  const [search, setSearch] = useState("");
  const [linky, setLinky] = useState("");

  const [totalMovie, setTotalMovie] = useState([]);

  useEffect(() => {
    const total = async () => {
      const { data } = await bxios.get("/movies");
      setTotalMovie(data);
    };
    total();
  }, []);

  const youtu = (url) => {
    setLinky(url);
  };
  const userLogin = (user) => {
    setUserDetails(user);
  };
  const logoutNetflix = useCallback(() => {
    setUserDetails(null);
  }, []);

  const searchBar = (info) => {
    setSearch(info);
  };
  // console.log(silink);
  return (
    <contextNet.Provider
      value={{
        userDetails,
        userLogin,
        logoutNetflix,
        intialUser,
        base_url,
        search,
        searchBar,
        youtu,
        linky,
        totalMovie,
      }}
    >
      {children}
    </contextNet.Provider>
  );
};
export default NetflixContext;
export const useAuth = () => useContext(contextNet);
