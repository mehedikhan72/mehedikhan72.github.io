import React, { useState } from 'react'
import Images from '../projects/Images'

export default function Therap2024() {
    const [detailsOn, setDetailsOn] = useState(false);
    const images = ['static/therap2024.webp']

    const toggleDetails = () => {
        setDetailsOn(!detailsOn);
    }
    return (
        <div className='p-5'>
            {!detailsOn && <div>
                <div className='flex flex-col xl:flex-row justify-center items-center'>
                    <div className='w-full xl:w-1/2'>
                        <div className='flex justify-start items-center text-4'>
                            <i class='bx bxs-medal' ></i>
                            <p className='px-2 py-2'>Therap JavaFest 2024 - Top 10 Finalist</p>
                            <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/pathfinder-api" className='my-btns-2 hidden md:block'>Github</a>
                        </div>
                        <div className='flex justify-start items-center text-4'>
                            <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/pathfinder-api" className='my-btns-2 md:hidden block'>Github</a>
                        </div>

                        <p className='text-2 pb-5'>
                            Achieved top 10 finalist position among 1300+ participants at Therap JavaFest 2024. 
                            Built a comprehensive personalized mentorship platform with advanced features including 
                            session booking, real-time chat, payment integration, and AI-powered recommendations. 
                            Invited to present at the grand finale at Therap BD Limited headquarters.
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
                    <i class='bx bxs-medal' ></i>
                    <p className='px-2 py-2'>Therap JavaFest 2024 - Top 10 Finalist</p>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/pathfinder-api" className='my-btns-2 hidden md:block'>Github</a>
                </div>
                <div className='flex justify-start items-center text-4'>
                    <a target='_blank' rel='noopener noreferrer' href="https://github.com/mehedikhan72/pathfinder-api" className='my-btns-2 md:hidden block'>Github</a>
                </div>
                <p className='text-2 pb-5'>
                    Achieved top 10 finalist position among 1300+ participants at Therap JavaFest 2024. 
                    Built a comprehensive personalized mentorship platform with advanced features including 
                    session booking, real-time chat, payment integration, and AI-powered recommendations. 
                    Invited to present at the grand finale at Therap BD Limited headquarters.
                </p>

                <p className='text-3 py-2'>&gt;_Platform Features</p>
                <p className='text-2 pb-5'>Our mentorship platform included comprehensive session booking systems, real-time chat functionality for seamless communication, integrated payment processing, AI-powered recommendation engine using Recombee for personalized mentor-mentee matching, and ChatGPT integration for enhanced user assistance and automated support features.</p>

                <p className='text-3 py-2'>&gt;_Technical Architecture</p>
                <p className='text-2 pb-5'>
                    Built using Spring Boot framework with a robust Java ecosystem backend. Implemented CI/CD pipelines 
                    for automated deployment and testing. The system was designed to be production-ready with scalable 
                    architecture, comprehensive error handling, and optimized database queries. We focused on creating 
                    a maintainable codebase with proper design patterns and clean architecture principles.
                </p>

                <p className='text-3 py-2'>&gt;_Gallery</p>
                <div>
                    <Images detailed={true} images={images} />
                </div>

                <p className='text-3 py-2'>&gt;_Competition Journey</p>
                <p className='text-2 pb-5'>
                    Competing alongside my teammate Mustafa Muhaimin, we progressed through multiple rounds among 1300+ 
                    participants nationwide. Our innovative approach to personalized mentorship and robust technical 
                    implementation earned us a spot in the top 10 finalists. We were invited to present our solution 
                    at the grand finale held at Therap BD Limited headquarters, showcasing our platform to industry experts and judges.
                </p>

                <p className='text-3 py-2'>&gt;_Key Learnings</p>
                <p className='text-2 pb-5'>
                    This competition was instrumental in deepening our understanding of the Spring Boot framework and 
                    the broader Java ecosystem. We gained hands-on experience with enterprise-level development practices, 
                    microservices architecture, and production deployment strategies. Working with recommendation systems 
                    and AI integration expanded our knowledge of machine learning applications in real-world platforms. 
                    The experience taught us valuable lessons about building scalable, user-centric applications under competitive pressure.
                </p>

                <div className='flex justify-center items-center'>
                    <button onClick={toggleDetails} className='my-btns-2 cursor-default'>Hide Details</button>
                </div>

            </div>}
        </div>
    )
}