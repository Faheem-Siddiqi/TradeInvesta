'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Disclaimer from './components/Disclaimer';
import Image from 'next/image';
import HeroSection from './components/home/HeroSection';
import Testimonials from './components/testimonials/Testimonials';
import { motion } from 'framer-motion';
export default function Page() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  useEffect(() => {
    const hasSeenDisclaimer = sessionStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true);
      sessionStorage.setItem('hasSeenDisclaimer', 'true');
    }
  }, []);
  return (
    <div>
      {showDisclaimer && <Disclaimer />}
      <HeroSection />

    
      <section className="body-gradient md:p-10 p-5 text-white md:text-justify">
      <motion.div 
                
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0, transition: { type: 'linear', duration: 1 } }}
                viewport={{ once: false }}>
        <h1 className="text-3xl font-Poppins-Bold text-white">Trade Investa</h1>
        <p className="font-Poppins-Regular my-5">
          {`
            Welcome to Trade Investa, your trusted partner in navigating the complex world of financial markets. As expert price analysis consultants, we specialize in providing insightful analysis and guidance across a broad spectrum of markets. Our mission is to empower our trading community by sharing daily market reviews and in-depth research on current trends. Through our social media platforms. We are committed to answering the questions that often remain unaddressed for beginners and mid-level traders. By providing clear and actionable insights, we aim to equip our community with the knowledge and confidence they need to succeed.
          `}
        </p>
        <Link href="https://www.youtube.com/" target="blank" />
        </motion.div>
      </section>
   
      <motion.div 
                
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0, transition: { type: 'linear', duration: 1 } }}
                viewport={{ once: false }}>
      <section className="md:p-10 p-5 text-black md:text-justify">
        <h1 className="text-3xl font-Poppins-Bold text-black">
          Discover Forex Trading with Trade Investa
        </h1>
        <p className="font-Poppins-Regular my-5">
          {`
            Ready to dive into the world of Forex trading? We'll start by breaking down the fundamentals of what Forex trading is and how it operates. Next, we’ll cover essential terminology to ensure you're familiar with the key terms and phrases used in the industry. Whether you're a beginner or looking to sharpen your skills, this guide will set you on the path to confident and informed trading.
          `}
        </p>
        <Link href="https://www.youtube.com/" target="blank" />
      </section>

      </motion.div>
      <header className="body-gradient2 md:p-10 p-5 text-white md:text-justify">
        <h1 className="text-3xl font-Poppins-Bold text-white">
          Can you make Money Trading Forex?
        </h1>
        <section
        
        
        
        className="flex md:flex-row flex-col justify-center gap-5">
          <motion.div 
          
          
          initial={{
            opacity: 0,
           x:   -50
          }}
          whileInView={{
            opacity: 1,
            x: 0, 
            transition: {
              type: 'linear',
              duration: 1 // Animation duration
            }
          }}
          viewport={{ once: false }}
          className="md:w-[50%] w-full md:mt-5">
            <p className="font-Poppins-Regular my-5 md:w-[76%]">
              {`
                Making money in forex trading requires dedication and knowledge. It’s not a quick or easy path to wealth. Success in forex trading depends on understanding the market, having a solid strategy, and committing time to learn and improve.
              `}
            </p>
            <p className="font-Poppins-Regular my-5 md:w-[76%]">
              {`
                Trade Investa guidance provides valuable insights, but ongoing education is key to navigating the forex market effectively. If you have more questions, feel free to reach out to our team for assistance.
              `}
            </p>
          </motion.div >
          <motion.div
          
          initial={{
            opacity: 0,
           x:   50
          }}
          whileInView={{
            opacity: 1,
            x: 0, 
            transition: {
              type: 'linear',
              duration: 1 // Animation duration
            }
          }}
          viewport={{ once: false }}
          className="md:w-[50%] w-full">
            <Image
              className=""
              src="/assets/images/home/MakeEarning.png"
              alt="why trade with us"
              height={600}
              width={600}
            />
          </motion.div>
        </section>
      </header>
      <Testimonials />
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </div>
  );
}
