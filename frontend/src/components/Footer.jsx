import React from 'react'
import footer from '../assets/images/footer-img-mbl.png';
import Form from './Form';
function Footer() {
    return (
        <>
            
            <div className="flex relative flex-col h-screen">
  
    <div className="absolute w-full h-full bg-[linear-gradient(to_left,#F0C8BC_50%,transparent_80%)] z-10"></div>

    <div
        className="absolute w-1/2 h-full bg-no-repeat bg-center bg-cover z-9"
        style={{ backgroundImage: `url(${footer})` }}
    ></div>

  

    <div className="absolute ml-6 top-1/2  right-6 sm:right-20 transform -translate-y-1/2 bg-white shadow-lg z-20">
    <Form />
</div>



    <div className="mt-auto  w-full h-12 bg-[#FFFFFF] flex items-center justify-center  text-center z-20">
        @ AINU 2024. All rights reserved. Designed by 8Views.
    </div>
</div>


        </>
    )
}

export default Footer