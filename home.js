import React from 'react'
import pdf from 'url:./pdf/ResumeWorded.pdf';
import hero from "url:../Images/hero/rasheed.jpg"
import Typed from "typed.js"
import { useEffect } from 'react';
import { useRef } from 'react';
 
const Home = () => {
   const typedRef =  useRef(null);
   useEffect(() => {
      
    const options = {
        strings:["Welcome To My Profile. I am Rasheed Ahmad. I am a Full Stack Developer. And I am Currently a Student of NIT Jamshedpur. Thanks!!!"],
        typeSpeed:80,
        loop:true,
        backSpeed: 0,
        backDelay: 1000, 
        smartBackspace: false,
       fadeOut: true,
       fadeOutClass: 'typed-fade-out',
       fadeOutDelay: 0,

    }
    const typed = new Typed(typedRef.current,options)
   
     return () => {
          typed.destroy()
     }
   }, [])
   

  return (
    <>
        <div className='home' id="home">
            
              <div className='homeleft' data-aos="fade-up-right" data-aos-duration="2000">
                <div>
                 <h1 ref={typedRef}>
                 </h1>
                 <a href={pdf} download="myResume.pdf" className='btn' >Download Resume</a>
                 </div>
               </div>
             
             <div className='homeright' data-aos="fade-up-left" data-aos-duration="2000">
                    <div>
                         <img src={hero} alt="image error"/>
                    </div>
             </div>
        </div>  
    </>
  )
}

export default Home