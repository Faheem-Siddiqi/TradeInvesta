'use client'
import React from 'react';
import TypeWriterPage from './TypeWriterPage';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
export default function HeroSection() {
    const handleWhatsAppClick = () => {
        const whatsappNumber = '+16476763524'; // Replace with your WhatsApp number (with the '+')
        const whatsappUrl = `https://wa.me/${whatsappNumber}`;
        window.open(whatsappUrl, '_blank');
    };
    return (
        <>
            <section className="relative xl:h-screen xl:p-0 md:py-10 md:px-10 py-10 px-5 overflow-hidden flex items-center justify-center bg-gray-800 text-white">
                <video
                    src="/assets/videos/HeroSection2.mp4"
                    loop
                    muted
                    autoPlay
                    className='absolute left-0 h-full top-0  object-cover min-w-full z-10 '
                >
                    Your browser does not support the video tag.
                </video>
                <div className='absolute w-full h-full header-gradient DarkBlue opacity-80 z-30 '>
                </div>
                <div className="absolute inset-0  ">
                    <div className="absolute inset-0  "></div>
                </div>
                <div className="relative z-40 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Your  Trusted Partner in
                    </h1>
                    <TypeWriterPage />
                    <p className="my-5">
                        Start Learning Market Trends Today
                    </p>
                    <div className='flex md:flex-row flex-col gap-5  w-full justify-center items-center'>
                        <button
                            className="group rounded font-Poppins-Medium relative min-h-[50px] w-40 overflow-hidden border border-Green1 bg-Green1 text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-DarkBlue before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-DarkBlue after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
                            <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-DarkBlue before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-DarkBlue after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                            <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                                <Link
                                    href='/contact' className='w-full h-full flex items-center justify-center' >
                                    Get Started
                                </Link>
                            </span>
                        </button>
                        <button
                            className=" relative h-[3.2rem] w-40  border border-2 rounded  border-Green1 overflow-hidden  text-white transition-all before:absolute before:right-0 before:top-0 before:h-[3.2rem] before:w-6 before:translate-x-[3.2rem] before:rotate-6 before:bg-white before:opacity-10 before:duration-700 font-Poppins-Regular hover:before:-translate-x-40"
                            onClick={handleWhatsAppClick}
                        >
                            <span className='flex items-center justify-start p-2 gap-2'>
                                <BsWhatsapp className='text-2xl ml-2' />
                                <h1 className=' text-md font-Poppins-SemiBold text-Green475'>WhatsApp</h1>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
