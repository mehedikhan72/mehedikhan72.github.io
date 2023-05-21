import React, { useState, useEffect } from 'react'

export default function NavBar(props) {

  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
  }

  const closeNav = () => {
    setNavOpen(false);
  }

  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBtnVisible(true);
      }
      else {
        setBtnVisible(false);
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className='text-[#323437] bg-[#E2B714] z-50'>
      <div className='flex justify-between p-6'>
        <a href="https://mehedikhan72.github.io/" className='flex justify-center items-center text-3 cursor-pointer'>
          <p className=''>Mehedi</p>
          <p className='text-white'>Khan</p>
        </a>
        <div className='hidden md:flex justify-center items-center'>
          <p onClick={() => props.scrollToSection(props.aboutRef)} className='px-4 text-2 cursor-pointer'>About</p>
          <p onClick={() => props.scrollToSection(props.skillsRef)} className='px-4 text-2' cursor-pointer>Skills</p>
          <p onClick={() => props.scrollToSection(props.projectsRef)} className='px-4 text-2 cursor-pointer'>Projects</p>
          <p onClick={() => props.scrollToSection(props.contactRef)} className='px-4 text-2 cursor-pointer'>Contact</p>
        </div>
        <div className='md:hidden'>
          {navOpen && <i onClick={closeNav} class='pt-2 text-lg bx bx-x'></i>}
          {!navOpen && <i onClick={openNav} class='pt-2 text-lg bx bx-menu' ></i>}
        </div>
      </div>
      {navOpen && <div className='md:hidden flex flex-col justify-center items-center pb-5'>
        <p onClick={() => props.scrollToSection(props.aboutRef)} className='p-4 text-2 cursor-pointer'>About</p>
        <p onClick={() => props.scrollToSection(props.skillsRef)} className='p-4 text-2 cursor-pointer'>Skills</p>
        <p onClick={() => props.scrollToSection(props.projectsRef)} className='p-4 text-2 cursor-pointer'>Projects</p>
        <p onClick={() => props.scrollToSection(props.contactRef)} className='p-4 text-2 cursor-pointer'>Contact</p>
      </div>}

      {btnVisible && <button onClick={scrollToTop} className='fixed right-5 bottom-5 my-btns-2 z-50 cursor-default'><i className='text-2xl pt-2 bx bx-up-arrow-alt'></i></button>}
    </div>
  )
}
