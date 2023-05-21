import React, { useState } from 'react'
import Images from './Images'

export default function AjkeKiKorbo() {
    const [detailsOn, setDetailsOn] = useState(false);
    const images = ['static/p1_1.PNG', 'static/p1_2.PNG', 'static/p1_3.PNG', 'static/p1_4.PNG', 'static/p1_5.PNG', 'static/p1_6.PNG', 'static/p1_7.PNG']

    const toggleDetails = () => {
        setDetailsOn(!detailsOn);
    }
    return (
        <div className='p-5'>
            {!detailsOn && <div>
                <div className='flex flex-col xl:flex-row justify-center items-center'>
                    <div className='w-full xl:w-1/2'>
                        <div className='flex justify-start items-center text-4'>
                            <i class='bx bxs-folder' ></i>
                            <p className='px-2 py-2'>AjkeKiKorbo</p>
                            <a target='_blank' rel='noopener noreferrer' href="https://ajkekikorbo.pythonanywhere.com/" className='my-btns-2 hidden md:block'>Live</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/AjkeKiKorbo" className='my-btns-2 hidden md:block'>Github</a>
                        </div>
                        <div className='flex justify-start items-center text-4'>
                            <a target='_blank' rel='noopener noreferrer' href="https://ajkekikorbo.pythonanywhere.com/" className='my-btns-2 md:hidden block'>Live</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/AjkeKiKorbo" className='my-btns-2 md:hidden block'>Github</a>
                        </div>

                        <p className='text-2 pb-5'>
                            AjkeKiKorbo is a day planner app which lets you plan your days and complete your tasks easily.
                            It also tracks your progress and shows you how you've been doing.
                            This was my first deployed and production ready app.
                        </p>
                    </div>

                    <div className='w-full xl:w-1/2 flex justify-center items-center'>
                        <Images detailed={false} images={images} />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={toggleDetails} className='my-btns-2 cursor-default'>View Details</button>
                </div>
            </div>}

            {detailsOn && <div>
                <div className='flex justify-start items-center text-4'>
                    <i class='bx bxs-folder' ></i>
                    <p className='px-2 py-2'>AjkeKiKorbo</p>
                    <a target='_blank' rel='noopener noreferrer' href="https://ajkekikorbo.pythonanywhere.com/" className='my-btns-2 hidden md:block'>Live</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/AjkeKiKorbo" className='my-btns-2 hidden md:block'>Github</a>
                </div>
                <div className='flex justify-start items-center text-4'>
                    <a target='_blank' rel='noopener noreferrer' href="https://ajkekikorbo.pythonanywhere.com/" className='my-btns-2 md:hidden block'>Live</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/AjkeKiKorbo" className='my-btns-2 md:hidden block'>Github</a>
                </div>
                <p className='text-2 pb-5'>
                    AjkeKiKorbo is a day planner app which lets you plan your days and complete your tasks easily.
                    It also tracks your progress and shows you how you've been doing.
                    This was my first deployed and production ready app.
                </p>

                <p className='text-3 py-2'>&gt;_Tech Used</p>
                <p className='text-2 pb-5'>Django, Jinja, Vanilla JS, Chart JS, HTML, CSS, Bootstrap, Github.</p>

                <p className='text-3 py-2'>&gt;_Gallery</p>
                <div>
                    <Images detailed={true} images={images} />
                </div>

                <p className='text-3 py-2'>&gt;_Challenges and What I Learned</p>
                <p className='text-2 pb-5'>
                    There were quite a lot of challenges and I learned a lot honestly from this project.
                    Making this application responsive was one hell of a job. Since this is a todo app and
                    it tracks your progress flawlessly, being accurate with timezones was a hectic challenge
                    for me to overcome. I took leverage of Python's Calender, Datetime, pytz modules to come
                    up with solutions so that anyone, from any timezone can use this app.
                </p>
                <p className='text-2 pb-5'>This was my first time working with graph so it was a good
                    challenge and a lot of fun to be able to implement Chart JS properly.
                </p>
                <p className='text-2 pb-5'>
                    I learned how to make custom 404 error pages. Since this was my first deployed app,
                    I learned so much on databases, deployment and so on. I had to make this app as efficient
                    as possible so users could read from and write to the database without any hassle.
                    This app also welcomes users upon registration via email so I learned to work with
                    environment variables and also 'gitignore' them to make things secure. So I would
                    say my GitHub skills got better as well.
                </p>

                <div className='flex justify-center items-center'>
                    <button onClick={toggleDetails} className='my-btns-2 cursor-default'>Hide Details</button>
                </div>

            </div>}
        </div>
    )
}
