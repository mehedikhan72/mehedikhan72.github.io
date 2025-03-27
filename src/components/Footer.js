import React from 'react'

export default function Footer() {
    return (
        <div className='p-5 md:p-10 text-[#323437] bg-[#E2B714]'>
            <p className='text-center text-2 p-2'>
                <i className='bx bxs-quote-left p-2'></i>
                Men are haunted by the vastness of eternity. And so we ask ourselves: will our actions echo across the centuries?
                Will strangers hear our names long after we are gone and wonder who we were, how bravely we fought, how fiercely we loved?
                <i className='bx bxs-quote-right p-2' ></i>
            </p>

            <div className='flex justify-center items-center m-5'>
                <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/mehedikhan72/'><i className='p-2 text-4xl cursor-pointer bx bxl-linkedin-square' ></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/mehedikhan72'><i className='p-2 text-4xl cursor-pointer bx bxl-github' ></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/MrTeflonXD/'><i className='p-2 text-4xl cursor-pointer bx bxl-facebook-circle' ></i></a>
                <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/mehedikhan_/'><i className='p-2 text-4xl cursor-pointer bx bxl-instagram-alt' ></i></a >
            </div>

            <p className='text-1 text-center'>© 2025 Mehedi Khan. All rights reserved.</p>
        </div>
    )
}
