import React, {forwardRef} from 'react'

function About(props) {
    return (
        <div ref={props.aboutRef} className='bg-[#E2B714] text-[#323437] px-5 py-10'>
            <p className='text-3 text-center p-2'>Hey, Thank you for showing interest!</p>

            <p className='text-2 text-center p-2'>I'm a full stack engineer with two years of experience.
                Besides, I'm pursuing my bachelor's(3rd year currently) in Computer Science and Engineering from
                Bangladesh University of Engineering and Technology(BUET).
            </p>
            <p className='text-2 text-center p-2'>
                I'm very passionate about creating large and scalable solutions for the problems you see around.
            </p>
        </div >
    )
}

export default forwardRef(About);
