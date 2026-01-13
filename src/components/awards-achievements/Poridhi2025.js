import React, { useState } from 'react'
import Images from '../projects/Images'

export default function Poridhi2025() {
    const [detailsOn, setDetailsOn] = useState(false);
    const images = ['static/poridhi2025.webp']

    const toggleDetails = () => {
        setDetailsOn(!detailsOn);
    }
    return (
        <div className='p-5'>
            {!detailsOn && <div>
                <div className='flex flex-col xl:flex-row justify-center items-center'>
                    <div className='w-full xl:w-1/2 flex justify-center items-center'>
                        <Images detailed={false} images={images} />
                    </div>
                    <div className='w-full xl:w-1/2'>
                        <div className='flex justify-start items-center text-4'>
                            <i class='bx bxs-trophy' ></i>
                            <p className='px-2 py-2'>AI Engineering Hackathon - Champions</p>
                            <a target='_blank' rel='noopener noreferrer' href="https://docs.google.com/document/d/1VeiKgYZ1eHKn8dpIz-29dQyCuzJx6OQ9i3UEPMOzuJA/edit?tab=t.0" className='my-btns-2 hidden md:block'>Design Document</a>
                        </div>
                        <div className='flex justify-start items-center text-4'>
                            <a target='_blank' rel='noopener noreferrer' href="https://docs.google.com/document/d/1VeiKgYZ1eHKn8dpIz-29dQyCuzJx6OQ9i3UEPMOzuJA/edit?tab=t.0" className='my-btns-2 md:hidden block'>Design Document</a>
                        </div>

                        <p className='text-2 pb-5'>
                            Our team BUET XFACTOR won the AI Engineering Hackathon organized by poridhi.io and Brain Station 23. 
                            We developed an intent-based search system with multilingual capabilities, competing against 86 teams 
                            from 300+ participants nationwide and achieving optimal performance with minimal resources.
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button onClick={toggleDetails} className='my-btns-2 cursor-default'>View Details</button>
                </div>
            </div>}

            {detailsOn && <div>
                <div className='flex justify-start items-center text-4'>
                    <i class='bx bxs-trophy' ></i>
                    <p className='px-2 py-2'>AI Engineering Hackathon Champion</p>
                    <a target='_blank' rel='noopener noreferrer' href="https://docs.google.com/document/d/1VeiKgYZ1eHKn8dpIz-29dQyCuzJx6OQ9i3UEPMOzuJA/edit?tab=t.0" className='my-btns-2 hidden md:block'>Design Document</a>
                </div>
                <div className='flex justify-start items-center text-4'>
                    <a target='_blank' rel='noopener noreferrer' href="https://docs.google.com/document/d/1VeiKgYZ1eHKn8dpIz-29dQyCuzJx6OQ9i3UEPMOzuJA/edit?tab=t.0" className='my-btns-2 md:hidden block'>Design Document</a>
                </div>
                <p className='text-2 pb-5'>
                    Our team BUET XFACTOR won the AI Engineering Hackathon organized by poridhi.io and Brain Station 23. 
                    We developed an intent-based search system with multilingual capabilities, competing against 86 teams 
                    from 300+ participants nationwide and achieving optimal performance with minimal resources.
                </p>

                <p className='text-3 py-2'>&gt;_Technical Solution</p>
                <p className='text-2 pb-5'>We developed an Intent-based Search System using a multilingual product dataset, designed to understand user search intent and respond effectively. The system featured negligible downtime with fallback services, high accuracy and reliability, scalability for production use, and maintained a 500ms average response time for optimal user experience.</p>

                <p className='text-3 py-2'>&gt;_Resource Optimization</p>
                <p className='text-2 pb-5'>
                    One of our key achievements was completing the solution without any GPU requirements and using only 50% of the 
                    provided technical resources (10 out of 20 VMs with 2 vCPU, 2GB RAM each). We leveraged in-memory LLM loading 
                    using llama.cpp and incorporated 4-bit quantization to optimize processing speed while minimizing resource 
                    consumption, proving that efficient AI solutions don't always require massive computational power.
                </p>

                <p className='text-3 py-2'>&gt;_Gallery</p>
                <div>
                    <Images detailed={true} images={images} />
                </div>

                <p className='text-3 py-2'>&gt;_Team and Competition</p>
                <p className='text-2 pb-5'>
                    Team BUET XFACTOR consisted of me, Abrar Zahin Raihan, Ruwad Naswan, Md. Mehedi Hasan and Dipit Saha. 
                    The hackathon saw participation from over 300+ students from across the country, with 86 teams competing for 
                    the championship. The competition focused on practical AI engineering challenges, testing both technical 
                    skills and resource management capabilities.
                </p>

                <p className='text-3 py-2'>&gt;_Key Learnings</p>
                <p className='text-2 pb-5'>
                    This hackathon taught us valuable lessons about resource-efficient AI development and the importance of 
                    optimization in real-world applications. Working with multilingual datasets and implementing intent-based 
                    search algorithms expanded our understanding of natural language processing. The experience of building 
                    scalable systems under tight resource constraints and time pressure was invaluable for our growth as AI engineers.
                </p>

                <div className='flex justify-center items-center'>
                    <button onClick={toggleDetails} className='my-btns-2 cursor-default'>Hide Details</button>
                </div>

            </div>}
        </div>
    )
}