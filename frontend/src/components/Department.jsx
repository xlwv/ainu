import React from 'react'
import udep from '../assets/images/department-of-urology.png'
import Popup from './Popup';
function Department() {
    const symptoms = [
        "Kidney Stones",
        "Urological Cancers",
        "Urinary Tract Infection",
        "Overactive Bladder",
        "Urethral Stricture Disease",
        "Prostate Disease",
        "Erectile dysfunction (ED)",
        "Hematuria (Blood in the urine)",
        "Urinary Incontinence"
    ];
    return (
        <div className=' sm:py-20 py-10 lg:px-15  px-6 flex sm:flex-row flex-col items-center gap-6  '>
            <div className='flex flex-col w-full  sm:w-1/2 gap-6'>


                <h1 className='text-black sm:mt-4 mt-2 font-md sm:text-4xl text-3xl'>Department of Urology</h1>
                <p>Our facility is an advanced centre for urology treatment in Chennai,
                    equipped with cutting-edge technology and state-of-the-art medical
                    advancements to provide comprehensive care for all urological conditions.</p>
                <span className='font-bold text-normal '>We Specialize In</span>
                <div className='w-full h-fit'>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 p-0 md:grid-cols-3 gap-3 '>

                        {symptoms.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-black">•</span>
                                {item}
                            </li>
                        ))}

                    </ul>
                </div>

                <Popup/>


            </div>


            <div className=' w-full  sm:w-1/2'>
                <img src={udep} ></img>
            </div>


        </div>
    )
}

export default Department