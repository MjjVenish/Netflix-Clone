import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useUserContext } from "../utils/hooks/userContext";
import FormError from "../components/FormError";
import netFlix from "../assets/image/pngwing.com.png";
const intialValues = {
  email: "",
  phone: "",
  password: "",
  reminderme: "",
  id: 2,
};
const LoginPage = () => {
  const { userLogin } = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = (values, props) => {
    userLogin(values);
    navigate("/browse");
    props.resetForm();
  };
  const validate = (values) => {
    let errors = {};
    if (!values.email) errors.email = "Email or PhoneNumber Required*";
    else if (!values.email.endsWith("@gmail.com"))
      errors.email = "Email is Invalid*";
    if (!values.password) errors.password = "Password Required*";
    else if (values.password.length < 7)
      errors.errors = "Minimum 7 Charcter in PassWord*";
    return errors;
  };

  return (
    <Formik
      initialValues={intialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({ isValid }) => {
        return (
          <div className="h-[100vh] grid justify-center items-center bg-img">
            <img
              src={netFlix}
              alt=""
              className="absolute w-[150px] h-[60px] top-[30px] left-[50px]"
            />
            <div className="border border-black w-[450px] h-[660px] mt-[100px] bg-[#00000095] text-white">
              <Form className="relative">
                <h1 className="text-[30px] font-bold mt-[50px] ml-[50px]">
                  Sign In
                </h1>
                <Field
                  className="w-[75%] px-[6px] py-[15px] bg-[#343333] ml-[50px] mt-[30px] fo"
                  type="email"
                  name="email"
                  placeholder=" "
                />
                <label htmlFor="" className="absolute left-[58px] top-[88px]">
                  Email or phone number
                </label>
                <br />
                <ErrorMessage name="email" component={FormError} />
                <div className="relative">
                  <Field
                    type="password"
                    className="w-[75%] px-[6px] py-[15px] bg-[#343333] ml-[50px] mt-[25px] fou"
                    placeholder=" "
                    name="password"
                  />
                  <label htmlFor="" className="absolute left-[57px] top-[40px]">
                    Password
                  </label>
                </div>
                <ErrorMessage name="password" component={FormError} />
                <input
                  type="submit"
                  value={"Sign In"}
                  disabled={!isValid}
                  className="w-[75%] px-[6px] py-[15px] bg-[#e50914] ml-[50px] mt-[40px] font-bold"
                />
                <br />
                <Field type="checkbox" className="ml-[50px] mt-[10px]" />
                Remainder Me
                <Link
                  to={"/https://www.netflix.com/in/LoginHelp"}
                  className="ml-[121px] mt-[10px]"
                >
                  Need to help?
                </Link>
              </Form>
              <h1 className="mt-[65px] ml-[50px]">
                New to Netflix?
                <Link to={"/"} className="text-[20px] font-bold">
                  Sign up now.
                </Link>
              </h1>
              <p className="mt-[15px] ml-[50px]">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <a href="/ONE" className="text-[blue]">
                  Learn more.
                </a>
              </p>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default LoginPage;
