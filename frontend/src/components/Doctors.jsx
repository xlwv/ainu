import React from 'react'
import doc1 from '../assets/images/doctor-1.png'
import doc2 from '../assets/images/doctor-2.png'
import doc3 from '../assets/images/doctor-3.png'

import topurology from '../assets/images/top-urolologist.png';

function Doctors() {
    return (
        <div className=' sm:py-20 py-10 lg:pl-15 lg:pr-15 pl-6 pr-6 gap-10 flex justify-center items-center  flex-col '>
            <h1 className='text-black sm:mt-4 mt-2 font-md sm:text-4xl text-3xl'>Meet Our Specialist Doctors</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='z-15 p-6 justify-center gap-3 flex items-center flex-col bg-[linear-gradient(#F7E1DA_10%,white_100%)]  rounded-3xl border-3 border-[#EEEEEE]'>

                    <div className='w-45 h-45 rounded-full bg-white'>

                    </div>
                    <h4 className='font-bold text-5xl text-center'>Dr. Arun Kumar Balakrishnan</h4>
                    <div className='text-center  justify-center'>
                        <span>M.Ch.(Urology), FRCS (EDIN), M.S.(Gen.Surgery), MBBS</span>
                        <p>Managing Director, Chief Consultant Urologist
                            Robotic surgeon and Uro Oncologist</p>
                    </div>
                </div>
                <div className=' z-15 p-8 justify-center items-center gap-3 flex flex-col bg-[linear-gradient(#F7E1DA_10%,white_100%)]  rounded-3xl border-3 border-[#EEEEEE]'>



                    <div className='w-45 h-45 rounded-full bg-white'></div>
                    <h4 className='font-bold text-xl text-center'>Dr. D. Venkat Subramaniam
                    </h4>
                    <div className='text-center  justify-center'>
                        <span className='text-center'>
                            M.S, D.Lap, M.Ch(Uro)
                        </span>
                        <p>Executive Director and Senior Consultant Urologist</p>
                    </div>

                </div>
                <div className='  z-15 p-8 justify-center items-center gap-3 flex flex-col bg-[linear-gradient(#F7E1DA_10%,white_100%)]  rounded-3xl border-3 border-[#EEEEEE]'>



                    <div className='w-45 h-45 rounded-full bg-white'></div>
                    <h4 className='font-bold text-xl text-cente'>Dr. Navinath M</h4>
                    <div className='text-center  justify-center'>
                        <span>MBBS, MD (Med) (AIIMS), DM (Nephro) (AIIMS),

                            DNB (Nephro), MNAMS</span>
                        <p>Consultant Nephrologist</p>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Doctors