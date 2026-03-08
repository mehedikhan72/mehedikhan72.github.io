import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function NavBar(props) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
    <div className='text-secondary bg-primary z-50'>
      <div className='flex justify-between p-6'>
        <Link to="/" className='flex justify-center items-center text-3 cursor-pointer'>
          <p className=''>Mehedi K.</p>
        </Link>
        <div className='hidden md:flex justify-center items-center'>
          {isHomePage ? (
            // On homepage: use scroll navigation
            <>
              <p onClick={() => props.scrollToSection(props.aboutRef)} className='px-4 text-2 cursor-pointer hover:opacity-70 transition-opacity'>About</p>
              <p onClick={() => props.scrollToSection(props.experienceRef)} className='px-4 text-2 cursor-pointer hover:opacity-70 transition-opacity'>Experience</p>
              <p onClick={() => props.scrollToSection(props.skillsRef)} className='px-4 text-2 cursor-pointer hover:opacity-70 transition-opacity'>Skills</p>
              <p onClick={() => props.scrollToSection(props.projectsRef)} className='px-4 text-2 cursor-pointer hover:opacity-70 transition-opacity'>Projects</p>
              <p onClick={() => props.scrollToSection(props.contactRef)} className='px-4 text-2 cursor-pointer hover:opacity-70 transition-opacity'>Contact</p>
              <Link to="/blogs" className='px-4 text-2 cursor-pointer hover:opacity-70 transition-opacity'>Blogs</Link>
            </>
          ) : (
            // On other pages: use routing
            <>
              <Link to="/" className='px-4 text-2 cursor-pointer hover:opacity-70 transition-opacity'>Home</Link>
              <Link to="/blogs" className='px-4 text-2 cursor-pointer hover:opacity-70 transition-opacity'>Blogs</Link>
            </>
          )}
        </div>
        <div className='md:hidden'>
          {navOpen && <i onClick={closeNav} className='pt-2 text-lg bx bx-x cursor-pointer'></i>}
          {!navOpen && <i onClick={openNav} className='pt-2 text-lg bx bx-menu cursor-pointer' ></i>}
        </div>
      </div>
      {navOpen && <div className='md:hidden flex flex-col justify-center items-center pb-5'>
        {isHomePage ? (
          // On homepage: use scroll navigation
          <>
            <p onClick={() => { props.scrollToSection(props.aboutRef); closeNav(); }} className='p-4 text-2 cursor-pointer'>About</p>
            <p onClick={() => { props.scrollToSection(props.experienceRef); closeNav(); }} className='p-4 text-2 cursor-pointer'>Experience</p>
            <p onClick={() => { props.scrollToSection(props.skillsRef); closeNav(); }} className='p-4 text-2 cursor-pointer'>Skills</p>
            <p onClick={() => { props.scrollToSection(props.projectsRef); closeNav(); }} className='p-4 text-2 cursor-pointer'>Projects</p>
            <p onClick={() => { props.scrollToSection(props.contactRef); closeNav(); }} className='p-4 text-2 cursor-pointer'>Contact</p>
            <Link to="/blogs" onClick={closeNav} className='p-4 text-2 cursor-pointer'>Blogs</Link>
          </>
        ) : (
          // On other pages: use routing
          <>
            <Link to="/" onClick={closeNav} className='p-4 text-2 cursor-pointer'>Home</Link>
            <Link to="/blogs" onClick={closeNav} className='p-4 text-2 cursor-pointer'>Blogs</Link>
          </>
        )}
      </div>}

      {btnVisible && <button onClick={scrollToTop} className='fixed right-5 bottom-5 my-btns-2 z-50 cursor-default'><i className='text-2xl pt-2 bx bx-up-arrow-alt'></i></button>}
    </div>
  )
}
