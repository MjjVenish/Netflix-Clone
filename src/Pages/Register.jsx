import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useUserContext } from "../utils/hooks/userContext";
import FormError from "../components/FormError";
import netFlix from "../assets/image/pngwing.com.png";
import { usersRegister } from "../lib/axios/api-functions/movies";
const intialValues = {
  email: "",
  phone: "",
  password: "",
  reminderme: "",
};
const Register = () => {
  const { userLogin } = useUserContext();
  const navigate = useNavigate();
  const handleSubmit = (values, props) => {
    userLogin(values);
    usersRegister(values, "Register");
    navigate("/");
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
            <h1 className="text-center mt-7 text-white text-[30px]">
              First Register Then Go Login
            </h1>
            <img
              src={netFlix}
              alt=""
              className="absolute w-[150px] h-[60px] top-[30px] left-[50px]"
            />
            <div className="border border-black w-[450px] h-[660px] mt-[100px] bg-[#00000095] text-white">
              <Form className="relative">
                <h1 className="text-[30px] font-bold mt-[50px] ml-[50px]">
                  Register your Account
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
              </Form>
              <h1 className="text-center bg-black py-3 cursor-pointer mx-28">
                Go login Page
              </h1>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Register;
