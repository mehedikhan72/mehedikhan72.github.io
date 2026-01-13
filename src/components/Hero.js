import React from 'react'

export default function Hero() {
    const image = 'static/me3.webp'
    return (
        <div className='mx-2 mt-2 px-2 pt-16 md:mx-5 md:px-5 flex flex-wrap justify-center items-center'>
            <div className='flex justify-center flex-col items-center mx-5 md:mx-10 xl:mr-24 mt-5'>
                <div className='flex justify-center items-center font-bold text-3xl md:text-5xl'>
                    <p className='text-[#E2B714]'>Mehedi</p>
                    <p>Khan</p>
                </div>
                <p className='text-3 text-center pt-2 pb-1'>Backend Engineer.</p>
                <p className='text-1 text-center pt-1 pb-2'>Heavily into System Architecture, AI & ML</p>
                <a download="mehedikhan-resume" href="static/mehedikhan-resume-jan26.pdf" className='my-btns-1'>Download Resume</a>
            </div>
            <div className='mx-5 md:mx-10 mt-5 xl:ml-24'>
                <img className='rounded-t-3xl w-[16rem] h-auto md:w-[20rem] md:h-[28rem] object-cover w-' src={image} alt='Mehedi Khan' />
            </div>
        </div>
    )
}