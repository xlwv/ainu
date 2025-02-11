import React from 'react'
import { useState } from "react";


function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        patientType: "",
        specialty: "",
        message: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData( {
            name: "",
            email: "",
            phone: "",
            patientType: "",
            specialty: "",
            message: "",});
      };
  return (
   
    <div className="bg-white p-3 md:p-5 border-3 border-[#EEEEEE] shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Book An Appointment
      </h2>
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3  mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
        <select
          name="patientType"
          value={formData.patientType}
          onChange={handleChange}
          className="w-full mb-2 text-[#7F7F7F]  p-3 border border-gray-300 rounded-md bg-white  focus:ring-2 focus:ring-black"
          required
        >
          <option value="">Patient Type</option>
          <option value="new">New Patient</option>
          <option value="existing">Existing Patient</option>
        </select>
        <select
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          className="w-full mb-2 p-3 border text-[#7F7F7F] border-gray-300 rounded-md bg-white  "
          required
        >
          <option  value="">Specialty</option>
          <option value="nephrology">Nephrology</option>
          <option value="urology">Urology</option>
          <option value="dialysis">Dialysis</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          rows="3"
        ></textarea>
        <button
        style={{borderRadius:"28px"}}
          type="submit"
          className="w-full bg-black text-white p-3 rounded-full text-lg font-medium cursor-pointer "
        >
          SUBMIT
        </button>
      </form>
    </div>
  

  )
}

export default Form