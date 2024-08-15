import React, { useState } from "react";
import signupicon from "../assets/account.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link , Navigate, useNavigate } from "react-router-dom";
import imageTobase64 from "../helpers/imageTobase64"
import SummaryApi from "../common";
import { toast } from "react-toastify";


const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    nation_id:"",
   phone_number:"",     
    password: "",
    confirmPassword: "",
    profilPic: ""
  })
  const navigate = useNavigate()


  const hanleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      }
    })
  }






  const handleSubmit = async(e) => {
    e.preventDefault();

    
    if(data.password === data.confirmPassword){

      const dataResponse = await fetch(SummaryApi.signUP.url,{
          method : SummaryApi.signUP.method,
          headers : {
              "content-type" : "application/json"
          },
          body : JSON.stringify(data)
        })
  
        const dataApi = await dataResponse.json()

        if(dataApi.success){
          toast.success(dataApi.message)
          navigate("/login")
        }

        if(dataApi.error){
          toast.error(dataApi.message)
      

        }
  
    }else{
      toast.error("Please check password and confirm password")

    }

}






  // console.log("data login", data);

const handleUploadPic= async(e)=>{
const file=e.target.files[0]
const imagePic=await imageTobase64(file)

console.log("image", imagePic);

setData((preve)=>{
  return{
    ...preve,
    profilPic:imagePic
  }
})


}
  return (
    <section id="signUp" className="rounded-full ">
      <div className="mx-auto container p-8  ">
        <div className="bg-white w-full p-5 py-5  max-w-sm mx-auto rounded-xl shadow-lg">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilPic || signupicon} alt="signUp"></img>
            </div>
            <form>
            <label>
             <div className="text-xs bg-opacity-95 bg-slate-200 pt-2 pb-5 cursor-pointer absolute bottom-0 w-full text-center">
                Upload photo
              </div>
              <input type='file' className="hidden" onChange={handleUploadPic}/>
             </label>
          
            </form>
          </div>
          <form className="pt-8 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>name : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  placeholder="Enter your Name"
                  onChange={hanleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent "
                ></input>
              </div>
              <label>National ID : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="nation_id"
                  value={data.nation_id}
                  placeholder="Enter your National ID"
                  onChange={hanleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent "
                ></input>
              </div>
            </div>
            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  placeholder="Enter your Email"
                  onChange={hanleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent "
                ></input>
              </div>
              <label>Phone Nummer : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  name="phone_number"
                  value={data.phone_number}
                  placeholder="Enter your Phone Nummer"
                  onChange={hanleOnChange}
                  // required
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
                  required
                  className="w-full h-full outline-none  bg-transparent"
                ></input>
                <div
                  className="cursor-pointer "
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <div>
              <label>confirm Password : </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={confirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={hanleOnChange}
                  placeholder="Enter your password"
                  required
                  className="w-full h-full outline-none  bg-transparent"
                ></input>
                <div
                  className="cursor-pointer "
                  onClick={() => setconfirmPassword((preve) => !preve)}
                >
                  <span>{confirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
                
              </div>
            </div>

            <button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px]  rounded-full hover:bg-red-700 hover:scale-110 transition-all mx-auto mt-6 block">
              Sign Up
            </button>
          </form>
          <p className="mx-0 my-5">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-blue-950 hover:underline hover:text-red-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
