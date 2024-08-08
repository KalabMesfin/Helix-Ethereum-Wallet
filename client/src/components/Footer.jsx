import React from "react";
import logo from "../../images/logo.png";
import { Button } from './Button'
import { Items } from './FooterItems'

const items = ["Market", "Exchange", "Tutorail", "Wallets"]

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32 rounded-2xl h-10" />
      </div>
      
     
     <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
       {items.map((item, index) => (
         <div key={index}>
           <Items title={item} />
         </div>
       ))}
     </div>
     
     
    </div>

    <div className="flex justify-center items-center flex-col mt-5 mb-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
    </div>
    
    
    
    <div>
     <a href="mailto:kalab.codes@gmail.com">
      <Button 
        title="Contact Us"
      />
     </a>
    </div>



    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@TKRtechnologies2024</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;

