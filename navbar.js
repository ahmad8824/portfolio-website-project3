import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='Navbar' data-aos="flip-right" data-aos-duration="2000">
           <div className='left'><h2>Portfolio</h2></div>
           <div className='right'>
               <a href='#home'  className='navitem'>
                Home
               </a>
               <a href='#experience'  className='navitem'>
                Experience
                </a>
                <a href='#skill'  className='navitem'>
                Skills
                </a>
               <a href='#project'  className='navitem'>
                Projects
                </a>
               <a href='#contact'  className='navitem'>
                Contact
                </a>
           </div>
      </div>
    </>
  )
}

export default Navbar