import React, {forwardRef} from 'react'

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
        </div >
    )
}

export default forwardRef(About);
