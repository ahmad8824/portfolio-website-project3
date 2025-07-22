import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";

const Contact = () => {
  return (
            <>
                <h2 style={{marginLeft:"200px"}}>CONTACTS:</h2>
                <div className='contact' id="contact">
                      <a href="www.instagram.com" className='icons'>
                          <BsInstagram style={{fontSize:"30px"}}/>
                      </a>
                      <a href ="www.facebook.com" className='icons'>
                        <FaFacebookF style={{fontSize:"30px"}}/>
                      </a>
                      <a href="www.linkedin.com" className='icons'>
                        <FaLinkedinIn style={{fontSize:"30px"}}/>
                      </a>
                      <a href="www.x.com" className='icons'>
                         <RiTwitterXFill style={{fontSize:"30px"}}/>
                      </a>
                      <a href="www.github.com" className='icons'>
                         <IoLogoGithub style={{fontSize:"30px"}}/>
                      </a>
                       <a href="mailto:rasheedahmadstm@gmail.com" target="_blank" className='icons'>
                         <BiLogoGmail style={{fontSize:"30px"}}/>
                       </a>
                     <a href="https://wa.me/8825368979" target="_blank" className='icons'>
                         <IoLogoWhatsapp style={{fontSize:"30px"}}/>
                     </a>
                </div>

            </>
  )
}

export default Contact