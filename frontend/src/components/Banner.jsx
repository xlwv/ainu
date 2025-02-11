import React from 'react'
import footerImage from '../assets/images/homebanner.png';
import logo from '../assets/images/brand-logo.svg';
import { IoMdCall } from "react-icons/io";
import Form from './Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Popup from './Popup';


function Banner() {
    const [show, setShow] = useState(false);
     
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
        <>

        <div className="w-full relative h-screen">

            <div className="w-full absolute z-10 h-screen bg-[linear-gradient(to_right,#F0C8BC_30%,transparent_70%)]"></div>

            <div className='w-full absolute h-full  bg-no-repeat bg-center bg-cover absolute z-9 ' style={{ backgroundImage: `url(${footerImage})` }}></div>

            <div className='absolute  w-full z-11 pt-6 lg:pl-15 lg:pr-15 pl-6 pr-6 flex flex-col'>


                <div className="w-full flex items-center justify-between ">

                    <div
                        className="w-[180px] h-[88px] bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${logo})` }}
                    ></div>


                    <div className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full sm:font-md font-sm sm:text-sm text-xs">
                        <IoMdCall />
                        <span className="hidden sm:inline  ">+91 40-67313196</span>
                    </div>
                </div>

            </div>
            <div className='absolute gap z-11   lg:px-15 px-6 top-1/2 transform  -translate-y-1/2 item-center'>
                <div className='flex flex-col justify-between gap-6 '>
                    <div className='flex flex-col'>
                        <span className='text-black sm:mt-4 mt-2 font-md sm:text-5xl text-4xl'>Best Urology &</span>
                        <span className='text-black sm:mt-4 mt-2 font-md sm:text-5xl text-4xl'>Nephrology Hospital</span>
                        <span className='text-black  sm:mt-4 mt-2  font-md sm:text-5xl text-4xl'>in Chennai</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-black font-sm sm:text-lg text-sm'>Our state-of-the-art facility is dedicated to providing the highest quality care

                        </span>

                        <span className='text-black font-sm sm:text-lg text-sm'> for
                            urology and nephrology conditions, ensuring that every patient receives
                        </span>
                        <span className='text-black font-sm sm:text-lg text-sm'>

                            personalized, expert treatment.</span>
                    </div>

                    <Popup/>



                </div>

            </div>

          

        </div>














     










</>

    )
}

export default Banner