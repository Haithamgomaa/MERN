import React, { useContext, useState } from "react";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import SecHeader from "./SecHeader";
import ROLE from "../common/role";
import Context from '../context';

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>


const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
const [menuDisplay,setmenuDisplay]= useState(false)
const context = useContext(Context)
  const navigate = useNavigate()
  // const searchInput = useLocation()
  // const URLSearch = new URLSearchParams(searchInput?.search)
  // const searchQuery = URLSearch.getAll("q")
  // const [search,setSearch] = useState(searchQuery)


  //user LOgOut

  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })

    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/login")
    }

    if(data.error){
      toast.error(data.message)
    }

  }
//user LOgOut



// bg-blue-300
  return (
    <header className=" fixed w-full z-40 h-16 shadow-md bg-slate-50">
      <div className=" h-full container mx-auto flex items-center px-0 justify-between">
        {/* logo pic */}

        <div className="mainLogo">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        {/* search bar */}
        <div>
        {/* <div className=" hidden lg:flex items-center w-full justify-between max-w-sm 
        focus-within:shadow-lg shadow-md rounded-full "> */}
        {/* <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><Link to="/ShippingSystem">Track shipment</Link></li>
                </ul>
            </nav> */}
          <SecHeader/>
          
          {/* <input
            type="text"
            placeholder="search here..."
            className="w-full outline-none h-8 pl-3 rounded-l-full "
          ></input> */}
          {/* <div className="text-lg min-w-10 h-8 flex items-center justify-center  bg-blue-400 hover:bg-blue-600 rounded-r-full text-black cursor-pointer">
            <IoIosSearch />
          </div> */}
        </div>
                {/* tracking */}

        {/* <Link to={"/ShippingSystem"}>
                      <button className="px-3 py-2 bg-blue-600 rounded-2xl hover:bg-blue-800 text-white">
                        تتبع شحنتك
                      </button>
                    </Link> */}
                                    {/* tracking */}

        {/* user and cart icon */}
        <div className="flex items-center gap-7">
          <div className="relative  flex justify-center">
            {
              user?._id && (      
                <div className="text-2xl cursor-pointer flex justify-center "onClick={()=>setmenuDisplay(preve => !preve)}>
                {
                              user?.profilPic ? (
                                <img src={user?.profilPic} className='w-10 h-10 rounded-full' alt={user?.name} />
                              ) : (
                                <FaRegCircleUser />
                              )
                            }
              
                </div>)

            }
      
            {
              menuDisplay &&(

                <div className="   absolute bottom-0 top-11 h-fit p-2 shadow-lg rounded bg-white">
                <nav>
                  {
                     user?.role === ROLE.ADMIN && (     
                   <Link to={"/admin-pannel/all-products"} className="whitespace-nowrap p-2 hidden md:block  hover:bg-slate-100" onClick={()=>setmenuDisplay(preve => !preve)}>Admin pannel</Link>
                    )
                  }
                  </nav>
              </div>
            
              )
            }
          
          </div>
                        
            {
             user?._id && (

              <Link to={"/cart"} className="text-2xl cursor-pointer relative">
              <span>
                <IoCart />
              </span>
              <div className="bg-red-600 h-5 rounded-full text-white w-5 p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">{context?.cartProductCount}</p>
                
              </div>
              
        
            </Link>
             )

            }

  
          {/*login logout icon */}
          <div>
          {
                    user?._id  ? (
                      <button onClick={handleLogout} className='px-3 py-1  text-white  bg-blue-600 rounded-full hover:bg-blue-800'>Logout</button>
                    )
                    : (
                      <Link to={"/login"}>
                      <button className="px-3 py-2  bg-blue-600  rounded-2xl hover:bg-blue-800 text-white">
                        تسجيل / دخول
                      </button>
                    </Link>
                    )
              
                  }
    
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
