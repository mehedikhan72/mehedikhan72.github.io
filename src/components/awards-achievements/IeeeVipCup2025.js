import React, { useState } from 'react'
import Images from '../projects/Images'

export default function IeeeVipCup2025() {
    const [detailsOn, setDetailsOn] = useState(false);
    const images = ['static/ieeevipcup2025.webp']

    const toggleDetails = () => {
        setDetailsOn(!detailsOn);
    }
    return (
        <div className='p-5'>
            {!detailsOn && <div>
                <div className='flex flex-col xl:flex-row justify-center items-center'>
                    <div className='w-full xl:w-1/2'>
                        <div className='flex justify-start items-center text-4'>
                            <i class='bx bxs-award' ></i>
                            <p className='px-2 py-2'>IEEE VIP Cup 2025 - Special Mention</p>
                            <a target='_blank' rel='noopener noreferrer' href="https://github.com/dummy-ieee-vip-cup-link" className='my-btns-2 hidden md:block'>Github</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://dummy-paper-link.com" className='my-btns-2 hidden md:block'>Paper</a>
                        </div>
                        <div className='flex justify-start items-center text-4'>
                            <a target='_blank' rel='noopener noreferrer' href="https://github.com/dummy-ieee-vip-cup-link" className='my-btns-2 md:hidden block'>Github</a>
                            <a target='_blank' rel='noopener noreferrer' href="https://dummy-paper-link.com" className='my-btns-2 md:hidden block'>Paper</a>
                        </div>

                        <p className='text-2 pb-5'>
                            Our team NeuronX received a Special Mention at the IEEE ICIP 2025 VIP Cup for our work on 
                            real-time multimodal drone detection, tracking, and payload classification. We worked with 
                            RGB and infrared modalities under significant constraints, delivering robust models for 
                            complex environments.
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
                    <i class='bx bxs-award' ></i>
                    <p className='px-2 py-2'>IEEE VIP Cup 2025 - Special Mention</p>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/dummy-ieee-vip-cup" className='my-btns-2 hidden md:block'>Github</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://dummy-paper-link.com" className='my-btns-2 hidden md:block'>Paper</a>
                </div>
                <div className='flex justify-start items-center text-4'>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/dummy-ieee-vip-cup" className='my-btns-2 md:hidden block'>Github</a>
                    <a target='_blank' rel='noopener noreferrer' href="https://dummy-paper-link.com" className='my-btns-2 md:hidden block'>Paper</a>
                </div>
                <p className='text-2 pb-5'>
                    Our team NeuronX received a Special Mention at the IEEE ICIP 2025 VIP Cup for our work on 
                    real-time multimodal drone detection, tracking, and payload classification. We worked with 
                    RGB and infrared modalities under significant constraints, delivering robust models for 
                    complex environments.
                </p>

                <p className='text-3 py-2'>&gt;_Challenge Overview</p>
                <p className='text-2 pb-5'>The IEEE VIP Cup 2025 focused on multimodal drone detection, tracking, and payload identification. Teams had to build robust models combining RGB and infrared modalities, working with highly noisy and distorted data while delivering real-time inference in complex environments.</p>

                <p className='text-3 py-2'>&gt;_Technical Approach</p>
                <p className='text-2 pb-5'>
                    We developed fusion pipelines resilient to fog, occlusion, and camera instability. Our approach tackled 
                    thermal contrast gaps in IR data and implemented robust detection algorithms capable of handling 
                    challenging environmental conditions. The solution required real-time processing capabilities while 
                    maintaining high accuracy across different scenarios.
                </p>

                <p className='text-3 py-2'>&gt;_Gallery</p>
                <div>
                    <Images detailed={true} images={images} />
                </div>

                <p className='text-3 py-2'>&gt;_Team and Recognition</p>
                <p className='text-2 pb-5'>
                    Team NeuronX consisted of me, Abrar Zahin Raihan, Sadik mahmud Shakshor, Sadman Sakib & Ruwad Naswan, 
                    with graduate tutor Asib Rahman and supervisor Prof. Shamsuzzoha Bayzid. While only the top 3 teams 
                    advance to present at ICIP 2025 in Anchorage, Alaska, our Special Mention recognition among 40+ 
                    international entries validates our technical approach and months of dedicated work.
                </p>

                <p className='text-3 py-2'>&gt;_Key Learnings</p>
                <p className='text-2 pb-5'>
                    This challenge pushed us to work with multimodal data fusion under real-world constraints. We gained 
                    deep experience in handling noisy sensor data, developing robust computer vision pipelines, and 
                    optimizing models for real-time inference. The collaborative aspect with my brilliant teammates 
                    taught us valuable lessons about research methodology and technical problem-solving in competitive environments.
                </p>

                <div className='flex justify-center items-center'>
                    <button onClick={toggleDetails} className='my-btns-2 cursor-default'>Hide Details</button>
                </div>

            </div>}
        </div>
    )
}