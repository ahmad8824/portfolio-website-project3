import React from 'react'

const Projects = () => {
  return (
         <>
             <div id="project">
                   <h1 style={{marginLeft:"180px"}}>PROJECTS:</h1>
                     <div className='projects'>
                          <div className='first' data-aos="zoom-out" data-aos-duration="2000">
                               <img src="https://www.shutterstock.com/shutterstock/videos/3737093287/thumb/4.jpg?ip=x480" alt="image not loaded"/>
                               <h2> React ECommerce Website</h2>
                               <h3>I developed a fully functional e-commerce web application using <span> React.js, Node.js, Express.js, and MongoDB,</span> featuring user authentication with JWT, a responsive user interface, dynamic product listings, and a real-time cart system. The platform allows users to browse products, search and filter items, manage their shopping cart, and place orders, while admins can add, edit, or delete products through a dedicated dashboard. Key challenges included secure API integration, global state management, and building a mobile-friendly design. This project helped me strengthen my skills in full-stack development, RESTful APIs, and creating seamless user experiences</h3>
                          </div>
                            
                          <div className='third' data-aos="zoom-out" data-aos-duration="2000">
                             <img src="https://5.imimg.com/data5/SELLER/Default/2023/9/345243649/KX/OU/YG/96012323/personal-portfolio-website-development-service.jpg" alt=""/>
                             <h2>Personal Portfolio</h2>
                             <h3>I designed and developed a responsive personal portfolio website to showcase my skills, projects, and experience as a full-stack web developer. Built using <span> HTML, CSS, JavaScript, and React.js,</span> the site features smooth navigation, animated UI components, and a clean layout that highlights my work and personal brand. It includes dedicated sections for my introduction, technical skills, featured projects with GitHub links, and a contact form integrated with email functionality. This project helped me apply modern frontend practices, responsive design principles, and demonstrate my ability to build professional, user-friendly web experiences.</h3>
                          </div>

                           <div className='fourth' data-aos="zoom-out" data-aos-duration="2000">
                              <img src="https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4msecobqclh4t82qlmdn.png" alt="image not loaded"/>
                              <h2>To Do List App</h2>
                               <h3>I built a clean and interactive To-Do List application using <span> React.js </span> to help users manage daily tasks efficiently. The app features real-time task addition, deletion, completion toggling with checkmark icons, and persistent data storage using localStorage. It includes intuitive UI interactions with animations, responsive design for all devices, and a smooth user experience. This project helped me strengthen my understanding of React hooks, component structure, conditional rendering, and state management while focusing on clean code and usability</h3>
                           </div>
                           <div className='fifth' data-aos="zoom-out" data-aos-duration="2000">
                             <img src="https://mir-s3-cdn-cf.behance.net/projects/404/15dc4b69631277.Y3JvcCw4MDgsNjMyLDAsMA.png" alt="image not loaded"/>
                             <h2>Tic Tac Toe</h2>
                            <h3>I created an interactive Tic Tac Toe game using <span> HTML, CSS, and JavaScript React.js, </span> providing a smooth and engaging user experience for two players. The game features dynamic win detection, turn-based logic, and a reset functionality, all built with clean code and intuitive UI design. Styled with responsive layouts and subtle animations, it adapts well to both desktop and mobile screens. This project helped me solidify my understanding of game logic, DOM manipulation (or React state), and user interaction handling in a real-world mini-project</h3>
                           </div>

                    </div>
             </div>
         </>
    
  )
}

export default Projects