import React, { useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from "../common/role";



const AdminPannel = () => {

  const user = useSelector(state => state?.user?.user)
  const navigate = useNavigate()

  useEffect(()=>{
    if(user?.role !== ROLE.ADMIN){
      navigate("/")
    }
},[user])

  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden  mt-1">
      <aside className="bg-white  min-h-full  w-full max-w-60 customShadow ">
        <div className="my-5 h-32  flex justify-center items-center flex-col">
            <div className="text-4xl cursor-pointer relative flex justify-center">
            {
                          user?.profilPic ? (
                            <img src={user?.profilPic} className='w-10 h-10 rounded-full' alt={user?.name} />
                          ) : (
                            <FaRegCircleUser />
                          )
                        }
          
            </div>
            <p className='capitalize text-lg font-semibold'>{user?.name}</p>
            <p className='text-sm'>{user?.role}</p>
        </div>
           {/***navigation */}       
           <div>   
                    <nav className='grid p-4'>
                        <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-100'>All Users</Link>
                        <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-100'>All products</Link>
                    </nav>
                </div>  
      </aside>

      <main className='w-full h-full p-2'>
            <Outlet/>
        </main>
    </div>
  );
};

export default AdminPannel;
