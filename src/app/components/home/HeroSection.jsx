import React from 'react';
import TypeWriterPage from './TypeWriterPage';
import Image from 'next/image';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function HeroSection() {
    const handleWhatsAppClick = () => {
        const whatsappNumber = '+16476763524'; // Replace with your WhatsApp number (with the '+')
        const whatsappUrl = `https://wa.me/${whatsappNumber}`;
        window.open(whatsappUrl, '_blank');
    };
    return (
        <section className='md:px-10 px-5 md:py-10 py-10 header-gradient flex md:flex-row flex-col justify-center items-center gap-5'>
            <div className='w-full md:w-[50%]'>
                <h2 className='font-Poppins-Bold mt-4 text-white text-2xl md:text-3xl lg:text-4xl'>
                    Your Trusted Partner in
                </h2>
                <span className='flex gap-2 text-white mt-1 text-2xl md:text-3xl font-Poppins-Bold items-center'>
                    <TypeWriterPage />
                </span>
                <div className='mt-5 font-Poppins-Medium  text-white'>
                    Start learning market trends today
                </div>
                <button 
                
                       
                className=" my-5 group rounded font-Poppins-Medium relative min-h-[50px] w-40 overflow-hidden border border-Green1 bg-Green1 text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-DarkBlue before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-DarkBlue after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
                    <span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-DarkBlue before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-DarkBlue after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
                    <span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                        <Link
                        
                
                        
                        href='/contact' className='w-full h-full flex items-center justify-center' >
                            Get Started
                        </Link>
                    </span>
                </button>
            </div>
            <div className='w-full md:w-[50%] flex flex-col  justify-center'>
                <div className=''>
                    <Image
                        className='lg:w-[400px]  md:block hidden   animate-bounce-slight lg:h-[400px]'
                        src='/assets/images/home/heroSection.png'
                        alt='why trade with us'
                        height={600}
                        width={600}
                    />
                </div>
                <button
                    className="md:mt-5 relative h-[3.2rem] w-40 overflow-hidden  text-white transition-all before:absolute before:right-0 before:top-0 before:h-[3.2rem] before:w-6 before:translate-x-[3.2rem] before:rotate-6 before:bg-white before:opacity-10 before:duration-700 font-Poppins-Regular hover:before:-translate-x-40"
                    onClick={handleWhatsAppClick}
                >
                    <span className='flex items-center justify-start p-2 gap-2'>
                        <BsWhatsapp className='text-2xl ml-2' />
                        <h1 className=' text-md font-Poppins-SemiBold text-Green475'>WhatsApp</h1>
                    </span>
                </button>
            </div>
        </section>
    );
}
