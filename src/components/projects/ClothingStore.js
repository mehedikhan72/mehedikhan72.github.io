import React, { useState } from 'react'
import Images from './Images'

export default function ClothingStore() {
    const [detailsOn, setDetailsOn] = useState(false);
    const images = ['static/hb_p_1.PNG', 'static/hb_p_2.PNG', 'static/hb_p_3.PNG', 'static/hb_p_4.PNG', 'static/hb_p_5.PNG', 'static/hb_p_6.PNG', 'static/hb_p_7.PNG',
        'static/hb_p_8.PNG', 'static/hb_p_9.PNG', 'static/hb_p_10.PNG']

    const toggleDetails = () => {
        setDetailsOn(!detailsOn);
    }

    return (
        <div className='p-5'>
            {!detailsOn && <div>
                <div className='flex flex-col xl:flex-row justify-center items-center'>
                    <div className='w-full xl:w-1/2'>
                        <div className='flex justify-start items-center text-4 flex-wrap'>
                            <i class='bx bxs-folder' ></i>
                            <p className='px-2 py-2'>Clothing Store</p>
                            <a target='_blank' rel='noopener noreferrer' className='my-btns-2 hidden md:block'>Live</a>
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/mehedikhan72/Ecommerce-React' className='my-btns-2 hidden md:block'>Github-React</a>
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/mehedikhan72/Ecommerce-API' className='my-btns-2 hidden md:block'>Github-DRF</a>
                        </div>
                        <div className='flex justify-start items-center text-4 flex-wrap'>
                            <a target='_blank' rel='noopener noreferrer' className='my-btns-2 md:hidden block'>Live</a>
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/mehedikhan72/Ecommerce-React' className='my-btns-2 md:hidden block'>Github-React</a>
                            <a target='_blank' rel='noopener noreferrer' href='https://github.com/mehedikhan72/Ecommerce-API' className='my-btns-2 md:hidden block'>Github-DRF</a>
                        </div>

                        <p className='text-2 pb-5'>
                            This is an online store for a local clothing brand. It has most of the modern E-commerce features
                            such as payment integration, three layer authorizations etc.
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
                <div className='flex justify-start items-center text-4 flex-wrap'>
                    <i class='bx bxs-folder' ></i>
                    <p className='px-2 py-2'>Clothing Store</p>
                    <a target='_blank' rel='noopener noreferrer' className='my-btns-2 hidden md:block'>Live</a>
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/mehedikhan72/Ecommerce-React' className='my-btns-2 hidden md:block'>Github-React</a>
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/mehedikhan72/Ecommerce-API' className='my-btns-2 hidden md:block'>Github-DRF</a>
                </div>
                <div className='flex justify-start items-center text-4 flex-wrap'>
                    <a target='_blank' rel='noopener noreferrer' className='my-btns-2 md:hidden block'>Live</a>
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/mehedikhan72/Ecommerce-React' className='my-btns-2 md:hidden block'>Github-React</a>
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/mehedikhan72/Ecommerce-API' className='my-btns-2 md:hidden block'>Github-DRF</a>
                </div>
                <p className='text-2 pb-5'>
                    This is an online store for a local clothing brand. It has most of the modern E-commerce features
                    such as payment integration, three layer authorizations etc.
                </p>

                <p className='text-3 py-2'>&gt;_Tech Used</p>
                <p className='text-2 pb-5'>Django rest framework, React, tailwindCSS, SSLcommerz, axios etc</p>

                <p className='text-3 py-2'>&gt;_Gallery</p>
                <div>
                    <Images detailed={true} images={images} />
                </div>

                <p className='text-3 py-2'>&gt;_Challenges and What I Learned</p>
                <p className='text-2 pb-5'>
                    Two of the biggest challenges in this project were integrating payment system and
                    multiple layer authorization. I had to figure things out as I progressed with the
                    project and finally those obstacles were overcome.
                </p>
                <p className='text-2 pb-5'>
                    I learned to make api calls effectively with axios, learned to use react
                    more efficiently and applied many industry practices.
                </p>
                <p className='text-2 pb-5'>
                    I also designed and developed the store so that the store could maximize its profits.
                </p>

                <div className='flex justify-center items-center'>
                    <button onClick={toggleDetails} className='my-btns-2 cursor-default'>Hide Details</button>
                </div>

            </div>}
        </div>
    )
}
