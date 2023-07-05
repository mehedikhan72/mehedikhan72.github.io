import React, {forwardRef} from 'react'

function About(props) {
    return (
        <div ref={props.aboutRef} className='bg-[#E2B714] text-[#323437] px-5 py-10'>
            <p className='text-3 text-center p-2'>Hey, Thank you for showing interest!</p>

            <p className='text-2 text-center p-2'>I'm an experienced full stack engineer with a demonstrated history of creating software solutions for
                businesses and the problems you see around. Besides, I'm pursuing my bachelor's degree in Computer Science and Engineering from
                Bangladesh University of Engineering and Technology(BUET).
            </p>
            <p className='text-2 text-center p-2'>
                If you are looking for a full stack engineer for your company or a solo engineer for your businesses or to create
                a software to solve a problem around you, I'm your guy.
            </p>
            <p className='text-2 text-center p-2'>
                By working with me, you get somebody who is actually willing to help you with your problems and turn them into
                profitable solutions.
            </p>
        </div >
    )
}

export default forwardRef(About);
