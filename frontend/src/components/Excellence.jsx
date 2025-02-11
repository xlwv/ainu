import React from 'react'
import urology from '../assets/images/Urology.png';
import nep from '../assets/images/Nephrology.svg';
import uro from '../assets/images/Uro-Oncology.png';
import ped from '../assets/images/Pediatric-Urology.png';
import fem from '../assets/images/Female-Urology.svg';
import dia from '../assets/images/Dialysis.png';
import Popup from './Popup';
function Excellence() {
    const services = [
        {
            title: "Urology",
            description:
                "At AINU, our Urology Department combines cutting-edge technology with expert medical care to address a wide range of conditions, from kidney stones and urinary infections to complex urological cancers.",
            image: urology,
        },
        {
            title: "Nephrology",
            description:
                "Our team of highly experienced nephrologists offers expert diagnosis, treatment, and management of kidney diseases, including chronic kidney disease, acute kidney injury, and end-stage renal disease.",
            image: nep,
        },
        {
            title: "Uro-Oncology",
            description:
                "We are committed to fighting urological cancers with expertise, innovation, and dedication to each patient’s well-being.",
            image: uro,
        },
        {
            title: "Pediatric Urology",
            description:
                "Our compassionate team of pediatric urologists and healthcare professionals is dedicated to providing tailored treatment that considers the unique needs of our young patients.",
            image: ped,
        },
        {
            title: "Female Urology",
            description:
                "Our Female Urology Department is dedicated to addressing the unique urological health needs of women. We specialize in conditions such as urinary incontinence, pelvic floor dysfunction, recurrent urinary tract infections, and more.",
            image: fem,
        },
        {
            title: "Dialysis",
            description:
                "We utilize world-class technology to deliver exceptional dialysis treatment. Our facilities maintain the highest quality standards with stringent infection control measures and a strict single-use dialyzer policy, ensuring patient safety.",
            image: dia,
        },
    ];
    return (
        <div className=' py-6  lg:pl-15 lg:pr-15 pl-6 pr-6 flex justify-center items-center  flex-col '>




            <div className='flex  z-11  flex-col w-full   sm:items-center justify-between gap-14'>
                <h1 className='text-black sm:mt-4 mt-2 font-md sm:text-4xl text-3xl'>Excellency</h1>




                <div className="  ">
                    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white   flex flex-col items-left text-left ">
                            <div className="relative p-4">
                                    <div className="absolute top-0 left-0 h-full w-[4px] bg-gradient-to-b from-white to-[#EEEEEE]"></div>
                                    <img src={service.image} alt={service.title} className="w-30 h-30 " />
                                </div>
                             
                                <h2 className="text-xl pl-3 py-3 border-l-4 border-black font-semibold text-[#7D7C7C]">{service.title}</h2>

                                <div className="relative p-4">
                                    <div className="absolute top-0 left-0 h-full w-[4px] bg-gradient-to-b from-[#EEEEEE] to white"></div>
                                    <p className="text-gray-600   ">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            
                <Popup/>

            </div>








        </div>









    )
}

export default Excellence