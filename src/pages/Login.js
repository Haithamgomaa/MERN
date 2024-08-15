import React, {useContext, useState } from "react";
import loginicon from "../assets/logingif.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link ,Navigate,useNavigate} from "react-router-dom";
import SummaryApi from "../common";
import { toast } from 'react-toastify';
import Context from "../context";
// import Context from "../context";
// import Context from '../context';


const Login = () => {


  // const { fetchUserDetails, fetchUserAddToCart } = useContext(Context)


  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const { fetchUserDetails,fetchUserAddToCart} = useContext(Context)

  const generalContext= useContext(Context)
  const hanleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

//start handle submit

  const handleSubmit =async (e) => {
    e.preventDefault();
    const dataResponse = await fetch(SummaryApi.signIn.url,{
      method : SummaryApi.signIn.method,
      credentials : 'include',
      headers : {
          "content-type" : "application/json"
      },
      body : JSON.stringify(data)
  })
  const dataApi = await dataResponse.json()
  if(dataApi.success){
      toast.success(dataApi.message)
      
      navigate('/')
      fetchUserDetails()
      fetchUserAddToCart()


      
  }
  if(dataApi.error){
      toast.error(dataApi.message)
  }
} ;
//end handle submit
  return (
    <section id="login" className="rounded-full">
      <div className="mx-auto container p-8  ">
        <div className="bg-white w-full p-5 py-5  max-w-sm mx-auto rounded-xl shadow-lg">
          <div className="w-20 h-20 mx-auto">
                       <img src={loginicon} alt="login"></img>
          
      
          </div>
          <form className="pt-8 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  placeholder="Enter your Email"
                  onChange={hanleOnChange}
                  className="w-full h-full outline-none bg-transparent "
                ></input>
              </div>
            </div>
            <div>
              <label>Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={hanleOnChange}
                  placeholder="Enter your password"
                  className="w-full h-full outline-none  bg-transparent"
                ></input>
                <div
                  className="cursor-pointer "
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-red-500"
              >
                forgot password ?
              </Link>
            </div>

            <button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px]  rounded-full hover:bg-red-700 hover:scale-110 transition-all mx-auto mt-6 block">
              Login
            </button>
          </form>
          <p className="mx-0 my-5">
            Don't have an account?{" "}
            <Link
              to={"/sign-up"}
              className="text-blue-950 hover:underline hover:text-red-600"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
