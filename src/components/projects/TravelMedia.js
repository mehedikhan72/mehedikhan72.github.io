import React, { useState } from 'react'
import Images from './Images'

export default function TravelMedia() {
    const [detailsOn, setDetailsOn] = useState(false);
    const images = ['static/tm_1.PNG', 'static/tm_2.PNG', 'static/tm_3.PNG', 'static/tm_4.PNG', 'static/tm_5.PNG', 'static/tm_6.PNG', 'static/tm_7.PNG',
        'static/tm_8.PNG', 'static/tm_9.PNG', 'static/tm_10.PNG']

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
                            <p className='px-2 py-2'>TravelMedia</p>
                            <a target='_blank' rel='noopener noreferrer' href="" className='my-btns-2 hidden md:block'>Live</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/TravelMedia" className='my-btns-2 hidden md:block'>Github</a>
                        </div>
                        <div className='flex justify-start items-center text-4'>
                            <a target='_blank' rel='noopener noreferrer' href="" className='my-btns-2 md:hidden block'>Live</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/TravelMedia" className='my-btns-2 md:hidden block'>Github</a>
                        </div>

                        <p className='text-2 pb-5'>
                            This is a social media app where you could post and review your
                            latest trips with an adventure loving community.
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
                    <p className='px-2 py-2'>TravelMedia</p>
                    <a target='_blank' rel='noopener noreferrer' href="" className='my-btns-2 hidden md:block'>Live</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/TravelMedia" className='my-btns-2 hidden md:block'>Github</a>
                </div>
                <div className='flex justify-start items-center text-4'>
                    <a target='_blank' rel='noopener noreferrer' href="" className='my-btns-2 md:hidden block'>Live</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/TravelMedia" className='my-btns-2 md:hidden block'>Github</a>
                </div>
                <p className='text-2 pb-5'>
                    This is a social media app where you could post and review your
                    latest trips with an adventure loving community.
                </p>

                <p className='text-3 py-2'>&gt;_Tech Used</p>
                <p className='text-2 pb-5'>Django rest framework, React, OAuth, websockets, Django channels, PostgreSQL, tailwindCSS etc.</p>

                <p className='text-3 py-2'>&gt;_Gallery</p>
                <div>
                    <Images detailed={true} images={images} />
                </div>

                <p className='text-3 py-2'>&gt;_Challenges and What I Learned</p>
                <p className='text-2 pb-5'>
                    Being my first DRF and React project, this was by far the most challenging project I have ever worked on.
                </p>
                <p className='text-2 pb-5'>
                    Implementing realtime notifications, Google and social media authentication were huge challenges for me
                    and I was able to successfully implement them in my app. It has most of the modern social media features.
                </p>
                <p className='text-2 pb-5'>
                    Learned using react properly and applied many industry practices. Learned how websockets work and how to use Django
                    channels to implement them. Learned using tokens for authentication and authorization and many more.
                </p>

                <div className='flex justify-center items-center'>
                    <button onClick={toggleDetails} className='my-btns-2 cursor-default'>Hide Details</button>
                </div>

            </div>}
        </div>
    )
}
