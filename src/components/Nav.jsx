import React from 'react';
import "../index.css";
import bLogo from "../assets/bLogo.webp"
// import { BsCart2 } from "react-icons/bs";

function Nav() {
    return (
        <div className=' font-thin  '>
            <div className='flex flex-row gap-4  '>
                <div className='flex w-1/2 gap-4  sm:flex-wrap min-w-fit'>
                    <div className='bg-white'>
                        <img src={bLogo} alt="Image_Error" className='w-30 h-20 py-0  sm:flex hidden' />
                    </div>
                    <div className='py-2 gap-4'>
                        <h2 className='font-extrabold'>Delivery in 8 minutes</h2>
                        <p className=' font-serif gap-4 '>Noida, Uttar Pradesh 201301,</p>
                    </div>
                </div>
                <div className='mt-4 gap-x-8 -translate-x-8 justify-between items-center'>
                    <input type="text" placeholder="Search the Items" className='w-2xl rounded-md outline-none border-gray-400 bg-gray-200 py-2  text-center cursor-pointer ' />
                </div>
                <div className='flex gap-4 px-4'>
                   <span className='py-4 flex'> <button className='bg-blue-200 py-2 w-20 rounded-xl text-white font-light opacity-800 '>Login</button> </span>
                    <div className=' flex py-4 gap-2 w-20'>
                        {/* <BsCart2 /> */}
                        <p className='font-extrabold text-white bg-gray-300 rounded-md w-24 items-center-safe justify-center pt-2 pl-1 '>My Cart</p>
                    </div>
                </div>
            </div>
            <hr className='text-gray-300'/>
        </div>
    )
}
export default Nav;

