import { useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import user from "../assets/image/netflix user.jpg";
import netflix from "../assets/image/pngwing.com.png";
import userImg from "../assets/image/user-icon.jpg";
import { useUserContext } from "../utils/hooks/userContext";
import {
  AiFillCaretDown,
  MdEmail,
  FaKey,
  ImLocation2,
  IoMdSearch,
  IoMdNotifications,
} from "../icons/index";

const navbar = ["home", "tv shows", "movies", "recently added", "mylist"];

const NavBar = () => {
  const { userDetails, logoutNetflix, searchBar } = useUserContext();
  const [downBar, setDownBar] = useState(false);
  const [email, setEmail] = useState(false);
  const [pass, setPass] = useState(false);
  const [search, setSearch] = useState(false);
  const [scrFillter, setScrFillter] = useState("");
  const navigation = useNavigate();

  return (
    <>
      <nav className="flex h-[7vh] text-white bg-[#000000e4] ">
        <img src={netflix} alt="" className="w-[150px] h-[50px]" />
        {navbar.map((nav) => (
          <div className="flex flex-1  text-center items-center " key={nav}>
            <NavLink
              className="flex-1"
              to={nav === "home" ? "/browse" : "/" + nav}
            >
              {nav[0].toUpperCase() + nav.slice(1)}
            </NavLink>
          </div>
        ))}
        <div className="flex-1"></div>
        <div className="flex flex-1  ">
          <div className="w-[25px h-[25px] rounded-[50%] flex flex-1 mt-[10px]">
            <img src={user} alt="" className="w-[35px] h-[35px]" />
            <div id="">
              <AiFillCaretDown
                onClick={() => {
                  setDownBar(!downBar);
                  setSearch(false);
                }}
                className="mt-[10px]"
              />
              {downBar ? (
                <div
                  className=" w-[350px] h-[400px] mt-[20px] rounded-xl
                   text-white grid justify-center z-10 items-center absolute right-[150px] linea"
                >
                  <div>
                    <div className="w-[100px] h-[100px] ml-[25px] rounded-[50%] mb-[70px] ">
                      <img
                        src={userImg}
                        alt=""
                        className="rounded-[50%] ml-[25px]"
                      />
                      <h1 className="text-center ml-[40px]">MjjVenish</h1>
                      <div className="flex ml-[40px] relative">
                        <MdEmail
                          className="w-[35px] h-[35px] flex-1 "
                          onClick={() => {
                            setEmail(!email);
                            setPass(false);
                          }}
                        />
                        {email ? (
                          <h1 className="absolute top-[30px] left-[-40px]">
                            {userDetails.email}
                          </h1>
                        ) : (
                          ""
                        )}
                        <FaKey
                          className=" w-[35px] ml-[10px] h-[35px] flex-1"
                          onClick={() => {
                            setPass(!pass);
                            setEmail(false);
                          }}
                        />
                        {pass ? (
                          <h1 className="absolute top-[30px]">
                            {userDetails.pass}
                          </h1>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="">
                      <h1 className="mb-[45px] flex ">
                        <ImLocation2 className="mr-[3px]" />
                        Coimbatore
                        <h1 className="ml-[5px]">CEO of World</h1>
                      </h1>
                      <h1 className="text-center mb-[30px]">
                        Enjoy your Movies
                      </h1>
                    </div>

                    <button
                      className="flex-1 px-[8px] py-[4px] bg-[#e50914] rounded-md ml-[70px]"
                      onClick={() => {
                        logoutNetflix();
                        navigation("/login");
                      }}
                    >
                      logout
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <IoMdSearch
            className="text-[35px] flex-1 mt-[10px]"
            onClick={() => {
              setSearch(!search);
              setDownBar(false);
            }}
          />
          {search ? (
            <>
              <input
                type="search"
                autoFocus
                value={scrFillter}
                className="absolute w-[200px] border bg-[#000]
                 text-white border-white
                  right-[120px] px-[10px] 
                top-[10px] py-[7px]"
                placeholder="Enter Your Movies"
                onChange={(e) => {
                  setScrFillter(e.target.value);
                  searchBar(e.target.value);
                }}
              />
              <ul></ul>
            </>
          ) : (
            ""
          )}
          <IoMdNotifications className=" text-[35px] flex-1 mt-[8px]" />
        </div>
      </nav>
    </>
  );
};
export default NavBar;
