import { useState, useEffect, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/hooks/userContext";
import netFlix from "../assets/pngwing.com.png";

const LoginPage = () => {
  const { userLogin, intialUser } = useUserContext();
  const [users, setUsers] = useState(intialUser);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users.email.length > 8 && users.pass.length > 6) {
      Navigate("/browse");
      setUsers(intialUser);
      userLogin(users);
    }
  };

  return (
    <div className="h-[100vh] grid justify-center items-center bg-img">
      <img
        src={netFlix}
        alt=""
        className="absolute w-[150px] h-[60px] top-[30px] left-[50px]"
      />
      <div className="border border-black w-[450px] h-[660px] mt-[100px] bg-[#00000095] text-white">
        <form action="" onSubmit={handleSubmit} className="relative">
          <h1 className="text-[30px] font-bold mt-[50px] ml-[50px]">Sign In</h1>
          <input
            className="w-[75%] px-[6px] py-[15px] bg-[#343333] ml-[50px] mt-[30px] fo"
            type="email"
            value={users.email ?? users.phone}
            onChange={(e) => setUsers({ ...users, email: e.target.value })}
            placeholder=" "
            ref={inputRef}
          />
          <label htmlFor="" className="absolute left-[58px] top-[88px]">
            Email or phone number
          </label>
          <input
            type="password"
            className="w-[75%] px-[6px] py-[15px] bg-[#343333] ml-[50px] mt-[25px] fou"
            value={users.pass}
            onChange={(e) => setUsers({ ...users, pass: e.target.value })}
            placeholder=" "
          />
          <label htmlFor="" className="absolute left-[57px] top-[168px]">
            Password
          </label>
          <br />
          <input
            type="submit"
            value={"Sign In"}
            className="w-[75%] px-[6px] py-[15px] bg-[#e50914] ml-[50px] mt-[40px] font-bold"
          />
          <br />
          <input
            type="checkbox"
            checked={users.reminderme}
            onChange={() => {}}
            className="ml-[50px] mt-[10px]"
          />
          Remainder Me
          <Link
            to={"/https://www.netflix.com/in/LoginHelp"}
            className="ml-[121px] mt-[10px]"
          >
            Need to help?
          </Link>
        </form>
        <h1 className="mt-[65px] ml-[50px]">
          New to Netflix?
          <Link to={"/"} className="text-[20px] font-bold">
            Sign up now.
          </Link>
        </h1>
        <p className="mt-[15px] ml-[50px]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a href="/ONE" className="text-[blue]">
            Learn more.
          </a>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
