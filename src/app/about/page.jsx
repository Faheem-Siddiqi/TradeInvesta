'use client';
import React from 'react';
import Image from 'next/image';
import mission from '../../../public/assets/images/about/mission.png';
import TradeWithUs from '../../../public/assets/images/about/TradeWithUs.png';
import Faqs from '../components/faqs/Faqs';
import Team from '../components/team-members/Team';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div

    className='overflow-hidden'
      // initial={{ y: 20, opacity: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      // transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <section className='md:px-10 px-5 md:py-20 py-10 header-gradient'>
        <h2 className='font-Poppins-ExtraBold text-Green1 text-3xl md:text-4xl'>
          About Us
        </h2>
        <p className='my-5 text-[#DBFFFF] font-Poppins-Regular sm:text-justify'>
          {`Trade Investa provides tailored daily guidance and updates based on each client’s funds and holdings. Our daily social media videos cover trading strategies for different time frames, while our weekly live Q&A sessions offer direct interaction and answers to your questions. You can reach us anytime via social media, WhatsApp, or email for personalized support.`}
        </p>
      </section>
      
      <section className='relative overflow-hidden md:p-20 p-10'>


   
        <div className='flex flex-col md:gap-20     gap-5  items-center justify-center  md:flex-row'>
        <motion.div 
        
        initial={{
          opacity: 0,
     
         x: 50 
        }}
        whileInView={{
          opacity: 1,
          x: 0, 
          transition: {
            type: 'linear',
            duration: 0.5 // Animation duration
          }
        }}
        viewport={{ once: false }}
        className='md:w-[30%] w-full text-DarkBlue sm:text-justify'>
            <h1 className='text-3xl text-DarkBlue font-Poppins-Bold'>
              Our Mission
            </h1>
            <p className='mt-2  font-Poppins-Light'>
              {`To empower our trading community by sharing daily market reviews and in-depth research on current trends. We aim to equip our community with the knowledge and confidence they need to succeed by providing clear and actionable insights.`}
            </p>
          </motion.div>
          <motion.div
      
        
        
        initial={{
          opacity: 0,
     
         x: -50 
        }}
        whileInView={{
          opacity: 1,
          x: 0, 
          transition: {
            type: 'linear',
            duration: 0.5 // Animation duration
          }
        }}
        viewport={{ once: false }}
           className='md:w-[30%] w-full text-DarkBlue sm:text-justify'>
            <h1 className='text-3xl  font-Poppins-Bold'>
              Our Vision
            </h1>
            <p className='mt-2  font-Poppins-Light'>
              {`To be the trusted partner in navigating the complex world of financial markets, providing expert analysis and guidance that addresses the needs of both beginners and mid-level traders.`}
            </p>
          </motion.div>
        </div>

      </section>

      <section className='flex relative overflow-hidden md:flex-row flex-col  body-gradient gap-5'>
       
    
       
        <motion.div 
       
       
        
        initial={{
          opacity: 0,
     
         x: -50 
        }}
        whileInView={{
          opacity: 1,
          x: 0, 
          transition: {
            type: 'linear',
            duration: 0.5 // Animation duration
          }
        }}
        viewport={{ once: false }}
        className='md:w-[50%] md:p-10 p-5 text-[#DBFFFF]'>
          <h1 className='text-3xl font-Poppins-Bold'>
            Why Trade with Us?
          </h1>
          <div className='my-5  sm:text-justify'>
            Experience exceptional trading with Trade Investa. Our aim is to empower traders with:
            <ul className='list-disc ml-5 flex flex-col gap-1 my-1'>
              <li>24/5 Trading: Access global markets around the clock.</li>
              <li>MT4/MT5 Platforms: Utilize advanced trading tools on mobile platforms.</li>
              <li>Wide Range of Instruments: Trade over 20,000 instruments, including forex, metals, shares, indices, and commodities.</li>
              <li>Instant Execution: Enjoy nano-second order execution for precise trading.</li>
            </ul>
            Unlock your trading potential with us today!
          </div>
        </motion.div>
        <motion.div 
        
        
        initial={{
          opacity: 0,
     
         x: 50 
        }}
        whileInView={{
          opacity: 1,
          x: 0, 
          transition: {
            type: 'linear',
            duration: 0.5 // Animation duration
          }
        }}
        viewport={{ once: false }}

        className=' flex justify-center  relative items-center md:w-[50%]'>
             <video
                    src="/assets/videos/WhyUs.mp4"
                    loop
                    muted
                    autoPlay
                    className='h-full  object-cover absolute right-0 bottom-0  opacity-40 min-w-full -z '
                >
                    Your browser does not support the video tag.
                </video>
        </motion.div>
      </section>
      
      <Team />
      <Faqs />
    </motion.div>
  );
}
