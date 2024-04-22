import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

export default function Images(props) {
    const images = props.images;
    const detailed = props.detailed;
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {

        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1)
        }
        else {
            setCurrentIndex(currentIndex - 1)
        }

    }
    const nextImage = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0)
        }
        else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const autoSlide = () => {

        if (parseInt(currentIndex) === parseInt(images.length - 1)) {
            setCurrentIndex(0)
        }
        else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (images.length > 1) {
                autoSlide()
            }

        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex])

    return (
        <div className='my-10'>
            {images.length !== 0 && <div
                className={!detailed ? 'h-[250px] sm:h-[400px] md:h-[500px] lg:h-[700px] w-screen xl:w-[650px] xl:h-[400px] object-cover relative group px-4' :
                    'h-[200px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[900px] 2xl:h-[1080px] object-cover relative group md:p-5 xl:p-10'}
            >
                <div style={{ backgroundImage: `url(${`${images[currentIndex]}`})` }} className='w-full h-full rounded-lg bg-center bg-cover duration-500'></div>
                <div>
                    <BsChevronCompactLeft onClick={prevImage} size={50} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' />
                </div>
                <div>
                    <BsChevronCompactRight onClick={nextImage} size={50} className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' />
                </div>
                <div className='flex top-4 py-2 justify-center'>
                    {images.map((image, index) => (
                        <div key={index} className='2xl cursor-pointer'>
                            <RxDotFilled onClick={() => setCurrentIndex(index)} />
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )
}
