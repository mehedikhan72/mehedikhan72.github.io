import React, {forwardRef} from 'react'

function Skills(props) {
    return (
        <div ref={props.skillsRef} className='m-5 p-5 '>
            <p className='text-5 text-center'>Skills</p>
            <p className='text-center text-3 py-5'>I love to learn new technologies everyday. Here are some
                of the technologies and frameworks I'm comfortable with. It's inconvenient to name all of them here.</p>

            <div className='flex flex-col md:flex-row justify-center items-center m-2 p-2'>
                <div className='m-5 p-5 bg-[#E2B714] text-[#323437] rounded-md text-center w-[250px] h-[450px] flex  flex-col justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <i class='text-3xl bx bx-world'></i>
                        <p className='text-3 py-4 px-2'>Languages</p>
                    </div>

                    <p className='text-2 py-1'>C</p>
                    <p className='text-2 py-1'>C++</p>
                    <p className='text-2 py-1'>Python</p>
                    <p className='text-2 py-1'>JavaScript</p>
                    <p className='text-2 py-1'>HTML</p>
                    <p className='text-2 py-1'>CSS</p>
                </div>
                <div className='m-5 p-5 bg-[#E2B714] text-[#323437] rounded-md text-center w-[250px] h-[450px] flex flex-col justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <i class='text-3xl bx bx-code-alt'></i>
                        <p className='text-3 py-4 px-2'>Frontend</p>
                    </div>
                    <p className='text-2 py-1'>React JS</p>
                    <p className='text-2 py-1'>Chart JS</p>
                    <p className='text-2 py-1'>Tailwind CSS</p>
                    <p className='text-2 py-1'>Bootstrap</p>
                    <br />
                    <div className='flex justify-center items-center'>
                        <i class='text-3xl bx bx-cog'></i>
                        <p className='text-3 py-4 px-2'>Tools</p>
                    </div>
                    <p className='text-2 py-1'>Git</p>
                    <p className='text-2 py-1'>Postman</p>
                    <p className='text-2 py-1'>VSCode</p>
                </div>
                <div className='m-5 p-5 bg-[#E2B714] text-[#323437] rounded-md text-center w-[250px] h-[450px] flex flex-col justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <i class='text-3xl bx bx-server' ></i>
                        <p className='text-3 py-4 px-2'>Backend</p>
                    </div>
                    <p className='text-2 py-1'>Django</p>
                    <p className='text-2 py-1'>Rest APIs</p>
                    <p className='text-2 py-1'>Djagno Rest Framework</p>
                    <p className='text-2 py-1'>Flask</p>
                    <p className='text-2 py-1'>Jinja</p>
                    <br />
                    <div className='flex justify-center items-center'>
                        <i class='text-3xl bx bx-data' ></i>
                        <p className='text-3 py-4 px-2'>Databases</p>
                    </div>
                    <p className='text-2 py-1'>PostgreSQL</p>
                    <p className='text-2 py-1'>SQLite</p>
                </div>

            </div>
        </div>
    )
}

export default forwardRef(Skills)

