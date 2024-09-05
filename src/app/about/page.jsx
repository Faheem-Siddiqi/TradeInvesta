import React from 'react'
import Image from 'next/image';
import mission from '../../../public/assets/images/about/mission.png'
import TradeWithUs from '../../../public/assets/images/about/TradeWithUs.png'
import Faqs from '../components/faqs/Faqs';
import Team from '../components/team-members/Team';
export default function About() {
  return (
    <>
      <section className='md:px-10 px-5 md:py-20 py-10 header-gradient'>
        <h2 className='font-Poppins-ExtraBold   text-Green1 text-3xl md:text-4xl'>
          About Us
        </h2>
        <p className='my-5 text-[#DBFFFF] font-Poppins-Regular sm:text-justify'>
          {`Trade Investa provides tailored daily guidance and updates based on each client’s funds and holdings. Our daily social media videos cover trading strategies for different time frames, while our weekly live Q&A sessions offer direct interaction and answers to your questions. You can reach us anytime via social media, WhatsApp, or email for personalized support.`}
        </p>
      </section>
      <section className='body-gradient md:p-10 p-5'>
        <div className='flex  flex-col gap-5 md:justify-between md:gap-32 md:flex-row'>
          <div className='md:w-[50%] w-full text-[#DBFFFF] sm:text-justify'>
            <h1 className='text-3xl font-Poppins-Bold '>
              Our Mission
            </h1>
            <p className='mt-2 '>
              {`To empower our trading community by sharing daily market reviews and in-depth research on current trends. We aim to equip our community with the knowledge and confidence they need to succeed by providing clear and actionable insights.`}
            </p>
          </div>
          <div className='md:w-[50%] w-full text-[#DBFFFF] text-justify'>
            <h1 className='text-3xl font-Poppins-Bold'>
              Our Vision
            </h1>
            <p className='mt-2 '>
              {`To be the trusted partner in navigating the complex world of financial markets, providing expert analysis and guidance that addresses the needs of both beginners and mid-level traders.`}
            </p>
          </div>
        </div>
        <div className='flex justify-center items-center md:my-20 my-5'>
          <Image
            className='md:w-[50%] w-[70%] md:h-[50%] h-[70%]'
            src={mission}
            alt='our mission'
            height={1000}
            width={1000}
          />
        </div>
        <section className='flex md:flex-row flex-col  gap-5 md:my-15 my-5'>
          <div className='md:w-[50%] text-[#DBFFFF]'>
            <h1 className='text-3xl font-Poppins-Bold'>
              Why Trade with Us?
            </h1>
            <div className='my-5 sm:text-justify'>
              Experience exceptional trading with Trade Investa. Our aim is to empower traders with:
              <ul className='list-disc  ml-5 flex flex-col gap-1 my-1'>
                <li className=''>
                  24/5 Trading: Access global markets around the clock.
                </li>
                <li>
                  MT4/MT5 Platforms: Utilize advanced trading tools on mobile platforms.
                </li>
                <li>
                  Wide Range of Instruments: Trade over 20,000 instruments, including forex, metals, shares, indices, and commodities.
                </li>
                <li>
                  Instant Execution: Enjoy nano-second order execution for precise trading
                </li>
              </ul>
              Unlock your trading potential with us today!
            </div>
          </div>
          <div className='flex justify-center items-center  md:w-[50%]'>
            <Image
              className='md:w-[400px]  md:h-[350px]'
              src={TradeWithUs}
              alt='why trade with us'
              height={400}
              width={400}
            />
          </div>
        </section>
      </section>
      <Team/>
    
      <Faqs />
    </>
  )
}
