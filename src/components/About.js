import React, {forwardRef} from 'react'
import { Link } from 'react-router-dom'

function About(props) {
    return (
        <div ref={props.aboutRef} className='bg-primary text-secondary px-5 py-10'>
            <p className='text-3 text-center p-2'>Hey, Thanks for stopping by!</p>

            <p className='text-2 text-center p-2'>I'm a software engineer with three years of experience - focusing on backend engineering, distributed systems and applied AI.
                Besides, I'm pursuing my bachelor's (3rd year currently) in Computer Science and Engineering from
                Bangladesh University of Engineering and Technology (BUET).
            </p>
            <p className='text-2 text-center p-2'>
                My research interests include distributed systems, ML systems and applied AI.
            </p>
            <p className='text-2 text-center p-2'>
                Beyond engineering and academics, I'm really into traveling, music & fitness. Oh hey, I write about these too.
            </p>
            <div className='flex justify-center mt-4'>
                <Link
                    to="/blogs"
                    className='text-sm text-secondary opacity-70 hover:opacity-100 transition-opacity underline'
                    style={{ textUnderlineOffset: '3px' }}
                >
                    Read my writing →
                </Link>
            </div>
        </div >
    )
}

export default forwardRef(About);
