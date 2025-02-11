import React from 'react'
import ndep from '../assets/images/department-of-nephrology.png'
import Popup from './Popup';

function Department2() {
    const services = [
        "Emergency Nephrology Services",
        "Dialysis",
        "Critical Care Nephrology",
        "Uncontrolled Hypertension",
        "Renal Transplantation",
        "Disorders of Serum Sodium and Serum Potassium"
      ];
      
  return (
         <div className=' sm:py-20 py-10 lg:px-15  px-6 flex sm:flex-row flex-col-reverse items-center gap-6  '>


<div className=' w-full sm:w-1/2 '>
                    <img src={ndep} ></img>
                </div>
    
                <div className='flex flex-col w-full  sm:w-1/2 gap-6'>
    
    
                    <h1 className='text-black sm:mt-4 mt-2 font-md sm:text-4xl text-3xl'>Department of Nephrology</h1>
                    <p>Recognized as the best kidney care hospital in the country, we offer unparalleled
                    expertise and advanced treatments for all kidney-related conditions.</p>
                    <span className='font-bold text-normal '>We Specialize In</span>
                    <div className='w-full h-fit'>
                        <ul className='flex flex-col  gap-3 p-0 '>
                          {services.map((item,i)=>(
                            <li className='flex  flex-start gap-2'>

                                            <span className="text-black">•</span>
                                                {item}
                                            </li>
                          )
                          )
                         
                         }
                        </ul>
                    </div>
                   
                    <Popup/>
    
    
                </div>
    
    
               
    
            </div>
  )
}

export default Department2