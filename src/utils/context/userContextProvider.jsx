import {
  useEffect,
  useState,
  useMemo,
  useCallback,
  createContext,
} from "react";
import { getAllMovies } from "../../lib/axios/api-functions/movies";

export const contextNetlix = createContext(null);

const base_url = "https://image.tmdb.org/t/p/original";

const NetflixContext = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [search, setSearch] = useState("");
  const [linky, setLinky] = useState("");
  const [totalMovie, setTotalMovie] = useState([]);
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

  useEffect(() => {
    const { data } = getAllMovies();
    setTotalMovie(data);
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
