import React from 'react'
import experience from "../assets/Data/experience.json"
const array =["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZLFW9PjmQSTrcc-BfDZL_8ENLgsuz3Ov0g&s","https://media.licdn.com/dms/image/v2/C510BAQEaiswddRNVCA/company-logo_200_200/company-logo_200_200/0/1631360427321?e=2147483647&v=beta&t=U6qDUN_juiheAEDm8o9EHKesQAa0UyeEUvBn66Vc6i0"]
//image src array

const Experience = () => {
  return (
        <>
             <div id="experience">
                <h1 style={{marginLeft:"200px",marginBottom:"30px"}}>EXPERIENCE</h1>
                <div className='main'>
                 {
                     experience.map((e,index)=>{
                             return (
                                <>
                                    <div className='experience' data-aos="zoom-in" data-aos-duration="2000">
                                            <div className='left'>
                                                   <img src={array[index]} alt="image not loaded"/>   
                                            </div>
                                            <div className='right'>
                                                   <h2>{e.role}</h2>
                                                   <h3 style={{color:"greenyellow"}}>{e.startDate} {e.endDate} <span style={{color:"yellow"}}>{e.location}</span></h3>
                                                   <span style={{color:"yellow"}}>
                                                   <h4>{e.experiences[0]}</h4>
                                                   <h4>{e.experiences[1]}</h4>
                                                   </span>
                                            </div>
                                    </div>
                                </>
                             )
                     })
                 }
                 </div>
             </div>
        </>
  )
}

export default Experience