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
        </div>
    )
}

export default forwardRef(Contact);
