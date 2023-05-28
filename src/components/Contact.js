import React, { forwardRef } from 'react'

function Contact(props) {
    return (
        <div ref={props.contactRef} className='m-5'>
            <p className='text-4 text-center px-5'>Interested in working with me?</p>
            {/* TODO: email link here */}
            <div className='flex justify-center flex-wrap items-center p-5'>
                <p className='text-3 text-center px-2'>Please email me at</p>
                <a href='mailto:lopingcard@gmail.com' className='text-4 text-center hover:text-indigo-500 hover:underline'>lopingcard@gmail.com</a>
            </div>
            <div className='flex flex-wrap justify-center items-center'>
                <p className='text-3 text-center py-5'>Or, find me on</p>
                <div className='flex justify-center items-center'>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/mehedikhan72/'><i className='p-2 text-3xl cursor-pointer bx bxl-linkedin-square' ></i></a>
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/mehedikhan72'><i className='p-2 text-3xl cursor-pointer bx bxl-github' ></i></a>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/MrTeflonXD/'><i className='p-2 text-3xl cursor-pointer bx bxl-facebook-circle' ></i></a>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/mehedikhan_/'><i className='p-2 text-3xl cursor-pointer bx bxl-instagram-alt' ></i></a >
                </div>
                
            </div>
        </div>
    )
}

export default forwardRef(Contact);
