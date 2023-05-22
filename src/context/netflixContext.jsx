import {
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  createContext,
} from "react";
import { bxios } from "./Axios";

const contextNetlix = createContext(null);

const base_url = "https://image.tmdb.org/t/p/original";

const NetflixContext = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
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

  return (
    <contextNetlix.Provider
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
    </contextNetlix.Provider>
  );
};
export default NetflixContext;
export const useUserContext = () => useContext(contextNetlix);
