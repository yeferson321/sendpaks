

"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type MultimediaProps = {
    multimedia: { type: string, url: string }[];
};

export default function Multimedia({ multimedia }: MultimediaProps) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const goToSlide = (index: number) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth;
            sliderRef.current.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
            setCurrentSlide(index);
        }
    };

    const changeSlide = (delta: number) => {
        if (sliderRef.current) {
            const maxSlides = multimedia.length;
            const nextIndex = (currentSlide + delta + maxSlides) % maxSlides;
            goToSlide(nextIndex);
        }
    };

    const handleScroll = () => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.offsetWidth;
            const scrollPosition = sliderRef.current.scrollLeft;
            const slideIndex = Math.round(scrollPosition / slideWidth);
            setCurrentSlide(slideIndex);
        }
    };

    useEffect(() => {
        const currentRef = sliderRef.current;
    
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
            return () => {
                currentRef.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);
    

    const videoRef = useRef<HTMLVideoElement>(null);

    const playPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <div className="relative w-full mt-2">

            <div className="absolute z-10 flex -translate-x-1/2 top-4 left-1/2 space-x-4 rtl:space-x-reverse">
                {multimedia.map((slide, index) => (
                    <button key={index} type="button" onClick={() => goToSlide(index)} className={`${currentSlide === index ? 'bg-white' : 'bg-black/60 hover:bg-white'} w-2 h-2 rounded-full`} aria-current="true" data-carousel-slide-to={index}></button>
                ))}
            </div>

            <div className="scrollbar flex overflow-auto touch-pan-x  rounded-xl" ref={sliderRef}>
                {multimedia.map((multimedia, index) => (
                    multimedia.type === "img" ? (
                        <Image key={index} src={multimedia.url} alt="Post Picture" width={1440} height={1800} className="rounded-xl" />
                    ) : (
                        <video key={index} className="rounded-xl" controls>
                            <source src={multimedia.url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )
                ))}
            </div>

            {multimedia.length !== 1 && (
                <button onClick={() => changeSlide(-1)} type="button" className="absolute start-2 top-[45%] z-10 p-2 rounded-full hover:bg-black/10 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </button>
            )}

            {multimedia.length !== 1 && (
                <button type="button" onClick={() => changeSlide(1)} className="absolute top-[45%] end-2 z-10 p-2 rounded-full hover:bg-black/10 cursor-pointer group focus:outline-none" data-carousel-next>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 stroke-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            )}

        </div>
    )
};

