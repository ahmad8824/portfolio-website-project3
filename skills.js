import React from 'react'
const skills = [
  { name: "HTML", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
  { name: "CSS", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "React", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Node.js", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "Express", src: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" },
  { name: "MongoDB", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "Mongoose", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongoose/mongoose-original.svg" },

 
  { name: "SQL", src: "https://seeklogo.com/images/A/azure-sql-database-logo-D7A32C9CD9-seeklogo.com.png" },
  
  { name: "Git", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://e7.pngegg.com/pngimages/911/648/png-clipart-github-repository-computer-icons-logo-github-blue-git.png" },
  
  { name: "DBMS", src: "https://cdn-icons-png.flaticon.com/512/603/603201.png" },

    {
      name: "Computer Graphics",src: "https://cdn-icons-png.flaticon.com/512/3665/3665989.png"
     }
  ,
  { name: "Operating Systems", src: "https://t4.ftcdn.net/jpg/04/64/21/59/360_F_464215993_LWZKZ52fQKt4YDQ43b50koqZgn9WxHzA.jpg" }
   ,
  {
     name: "Computer Network",src: "https://cdn-icons-png.flaticon.com/512/2721/2721265.png"
  }
  ,
    {
          name: "Software Engineering",src: "https://cdn-icons-png.flaticon.com/512/906/906334.png"
    },
    
  { name: "Algorithms", src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/311025948/original/903510c5c2e057a2f3261e3980e0d2b602ae387e/do-tasks-in-design-and-analysis-of-algorithms-daa-dsa.png" },
  { name: "Data Structures", src: "https://store.iipbooks.com/wp-content/uploads/2023/10/IIP796_1-FRONT-COVER-scaled.jpg" }
];


export const Skills = () => {
  return (
          <>
              <div className='skills' id="skill">
                   <h1>SKILLS</h1>
                   <div className='box'>
                         {
                              skills.map((e)=>{
                                  return (
                                        <div className='singleContainer' data-aos="flip-left" data-aos-duration="2000">
                                       <img src={e.src} alt="image not loaded" />
                                       <h3 style={{paddingTop:"0px"}}>{e.name}</h3>
                                        </div>
                                  )
                              })
                         }
                   </div>
                   <div>
                      <h1>PROGRAMMING  LANGUAGES:</h1>
                       <div className='programming' >
                           <div className='first' data-aos="flip-right" data-aos-duration="2000">
                            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-c-language-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-mobile-developer-programming-pack-logos-icons-5453029.png" atl ="image not loaded" />
                             <h2>C++</h2>
                            </div>
                            <div className='second' data-aos="flip-left" data-aos-duration="2000">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png" alt ="image not loaded"/>
                                <h2>Javascript</h2>
                            </div>
                       </div>
                   </div>
              </div>
          </>
  )
}
export default Skills
