"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Slideshow: React.FC<{ images: string[] }> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <div className="overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                layout="responsive"
                                width={16}
                                height={9}
                                className="object-cover w-full h-full"
                            ></Image>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={goToPrevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
                &#10094;
            </button>

            <button
                onClick={goToNextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Slideshow;