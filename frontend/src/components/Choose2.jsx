import React, { useState } from 'react';
import Form from './Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Popup from './Popup';


import topurology from '../assets/images/top-urolologist.png';
import three from '../assets/images/World-Class-Infrastructure.svg';
import two from '../assets/images/top-urolologist.png';
import four from '../assets/images/24-7-Emergency-Care.png';

function Choose2() {



    return (
        <>
            <div className=' py-6 relative lg:pl-15 lg:pr-15 pl-6 flex justify-center items-center  flex-col pr-6'>

                {/* <div className="w-full h-full top-1/2 transform  -translate-y-1/2 absolute z-10  bg-[radial-gradient(#F0C8BC_20%,#FFFFFF_100%)]"></div> */}
                {/* <div className="w-full h-full top-1/2 absolute z-10 transform -translate-y-1/2 bg-gradient-radial from-[#F0C8BC] via-[#F0C8BC] to-white"></div> */}.
                <div className="w-full h-full absolute top-1/2 transform -translate-y-1/2 z-10" style={{ background: "radial-gradient(circle, #F0C8BC 15%, transparent 50%)", }}></div>




                <div className='flex  z-11  flex-col w-full sm:mt-20 sm:mb-20  sm:items-center justify-between gap-14'>
                    <h1 className='text-black sm:mt-4 mt-2 font-md sm:text-4xl text-3xl'>Why Choose AINU?</h1>
                    <div className='grid w-full relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* boxes */}
                        <div className='z-15 p-6 justify-center gap-3 flex flex-col bg-[linear-gradient(#F7E1DA_10%,white_100%)]  rounded-3xl border-3 border-[#EEEEEE]'>


                            <img src={topurology} width="80px" height="50px" />
                            <h3 className='font-bold text-5xl'>Top Urology Specialist Team</h3>

                            <p className=''>Our hospital is home to the best urology
                                doctors in Chennai, renowned for their
                                expertise in treating a wide range of
                                urological conditions.
                            </p>

                        </div>
                        <div className=' z-15 p-8 justify-center gap-3 flex flex-col bg-[linear-gradient(#F7E1DA_10%,white_100%)]  rounded-3xl border-3 border-[#EEEEEE]'>


                            <img src={two} width="80px" height="50px" />
                            <h3 className='font-bold text-xl'>Best Kidney Specialists In
                                Chennai</h3>

                            <p className=''>At AINU, you are in the hands of the top
                                nephrologists in Chennai, offering you
                                unparalleled expertise and personalized
                                treatment plans.
                            </p>

                        </div>
                        <div className='  z-15 p-8 justify-center gap-3 flex flex-col bg-[linear-gradient(#F7E1DA_10%,white_100%)]  rounded-3xl border-3 border-[#EEEEEE]'>


                            <img src={three} width="80px" height="50px" />
                            <h3 className='font-bold text-xl'>World-Class Infrastructure</h3>

                            <p className=''>AINU is designed to meet the highest
                                standards of medical care, featuring

                                modern operation theatres and state-of-
                                the-art diagnostic labs.
                            </p>

                        </div>
                        <div className=' z-15 p-6 justify-center gap-3 flex flex-col bg-[linear-gradient(#F7E1DA_10%,white_100%)]  rounded-3xl border-3 border-[#EEEEEE]'>


                            <img src={four} width="80px" height="50px" />
                            <h3 className='font-bold text-xl'>24/7 Emergency Care</h3>

                            <p className=''>AINU offers round-the-clock emergency

                                care, ensuring that you have access to top-
                                notch medical support whenever you need

                                it.

                            </p>

                        </div>

                    </div>
                    {/* <button  onClick={handleShow}  className='bg-black cursor-pointer  text-white rounded-full sm:font-md font-sm sm:text-sm text-xs px-5 py-3 w-fit'>
                        BOOK AN APPOINTMENT
                    </button> */}
                    <Popup />

                </div>




            </div>




        </>
    )
}

export default Choose2