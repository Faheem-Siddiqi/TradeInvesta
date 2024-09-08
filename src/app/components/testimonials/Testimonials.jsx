// Import necessary dependencies
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Sohail ",
            pfp: "/assets/images/testimonials/user.png",
            designation: "Mid-Level Trader ",
            subject: "Comprehensive Market Analysis and Actionable Insights",
            message: "As an experienced trader, I’ve tried various platforms, but Trade Investa stands out for its comprehensive market analysis and actionable insights. The in-depth research and daily updates keep me ahead of market trends, allowing me to capitalize on opportunities I might have otherwise missed. Their approach to combining technical analysis with the latest economic news has significantly improved my trading performance. Trade Investa is truly a valuable resource for traders at any level."
        },
        {
            name: "Afroz",
            pfp: "/assets/images/testimonials/Afroz.jpg",
            designation: "Beginner Trader ",
            subject: "A Game-Changer for My Trading Journey!",
            message: "Joining Trade Investa was a game-changer for my trading journey. As a beginner, I was overwhelmed by the complexity of financial markets, but the educational resources and daily market insights provided by Trade Investa have empowered me to make informed decisions with confidence. The team’s dedication to breaking down complex concepts into easily digestible information has made all the difference. Thanks to their guidance, I’m now navigating the markets with a clear strategy and achieving consistent results."
        },
        {
            name: "Gaurav",
            pfp: "/assets/images/testimonials/Gauriv.jpg",
            designation: "Aspiring Professional Trader",
            subject: "Instrumental in My Development as a Trader",
            message: "Trade Investa has been instrumental in my development as a trader. The tutorials and guides provided have deepened my understanding of trading strategies, and the real-time market analysis has been crucial in helping me make timely decisions. What sets them apart is their commitment to educating their community, making sure even the most complex topics are accessible. I highly recommend Trade Investa to anyone serious about improving their trading skills."
        },


        {
            name: "Saquib",
            pfp: "/assets/images/testimonials/Saquib.jpg",
            designation: "Aspiring Professional Trader",
            subject: "Instrumental in My Development as a Trader",
            message: "Joining Trade Investa has greatly enhanced my trading strategies. Their comprehensive resources, including detailed guides and expert market insights, have helped me refine my approach and consistently make better trading decisions. The community-focused approach and continuous education efforts make Trade Investa an invaluable platform for both new and seasoned traders alike. I highly recommend it to anyone looking to elevate their trading skills and stay ahead in the market."
        },

        {
            name: "Sohail ",
            pfp: "/assets/images/testimonials/user.png",
            designation: "Mid-Level Trader ",
            subject: "Comprehensive Market Analysis and Actionable Insights",
            message: "As an experienced trader, I’ve tried various platforms, but Trade Investa stands out for its comprehensive market analysis and actionable insights. The in-depth research and daily updates keep me ahead of market trends, allowing me to capitalize on opportunities I might have otherwise missed. Their approach to combining technical analysis with the latest economic news has significantly improved my trading performance. Trade Investa is truly a valuable resource for traders at any level."
        },
        {
            name: "Afroz",
            pfp: "/assets/images/testimonials/Afroz.jpg",
            designation: "Beginner Trader ",
            subject: "A Game-Changer for My Trading Journey!",
            message: "Joining Trade Investa was a game-changer for my trading journey. As a beginner, I was overwhelmed by the complexity of financial markets, but the educational resources and daily market insights provided by Trade Investa have empowered me to make informed decisions with confidence. The team’s dedication to breaking down complex concepts into easily digestible information has made all the difference. Thanks to their guidance, I’m now navigating the markets with a clear strategy and achieving consistent results."
        },
        {
            name: "Gaurav",
            pfp: "/assets/images/testimonials/Gauriv.jpg",
            designation: "Aspiring Professional Trader",
            subject: "Instrumental in My Development as a Trader",
            message: "Trade Investa has been instrumental in my development as a trader. The tutorials and guides provided have deepened my understanding of trading strategies, and the real-time market analysis has been crucial in helping me make timely decisions. What sets them apart is their commitment to educating their community, making sure even the most complex topics are accessible. I highly recommend Trade Investa to anyone serious about improving their trading skills."
        },


        {
            name: "Saquib",
            pfp: "/assets/images/testimonials/Saquib.jpg",
            designation: "Aspiring Professional Trader",
            subject: "Instrumental in My Development as a Trader",
            message: "Joining Trade Investa has greatly enhanced my trading strategies. Their comprehensive resources, including detailed guides and expert market insights, have helped me refine my approach and consistently make better trading decisions. The community-focused approach and continuous education efforts make Trade Investa an invaluable platform for both new and seasoned traders alike. I highly recommend it to anyone looking to elevate their trading skills and stay ahead in the market."
        },

    ];
    return (
        <>

<h1 className='text-3xl font-Poppins-Bold mb-2 md:px-10 md:mt-10 mt-5 px-5 text-DarkBlue '>
                    Testimonials
                </h1>
                <p className='text-xl font-Poppins-Medium md:px-10 px-5 text-DarkBlue '>
                    What Our Clients Have to Say?
                </p>
  <section className= "md:my-10">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        effect="coverflow"
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className=""
      >







{testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="relative  p-5 sm:!h-[29rem] sm:!w-[25rem] text-white !border-white  !border-2  body-gradient2  border-white/10 rounded-[0.7rem] overflow-hidden ">



{/* <div className='absolute  right-5 top-5 -z-10'>
<svg width="104" height="102" xmlns="http://www.w3.org/2000/svg"><path d="M104 102V59.727H84.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C95.01 25.86 98.909 22.257 104 19.375V0c-9.758 4.27-17.712 9.874-23.864 16.813-6.151 6.939-10.712 14.545-13.681 22.818C63.485 47.904 62 59.941 62 75.74V102h42zm-62 0V59.727H22.114c0-5.871.689-11.182 2.068-15.933 1.379-4.75 3.42-9.287 6.125-13.61C33.01 25.86 36.909 22.257 42 19.375V0c-9.652 4.27-17.58 9.874-23.784 16.813C12.01 23.752 7.424 31.358 4.455 39.631 1.485 47.904 0 59.941 0 75.74V102h42z" fill="#01C38E" fill-rule="nonzero"/></svg>
</div> */}


                            <div className="flex md:flex-row flex-col  gap-3 md:items-center mb-3">
                            <div className='rounded-full border border-white p-1 w-[90px] h-[90px] '>
                            <Image
                                    className='w-full h-full object-cover rounded-full'
                                    src={testimonial.pfp}
                                    alt={`${testimonial.name}`}
                                    width={800}
                                    height={800}
                                />
                            </div>
 
                                <div className='flex flex-col  font-Poppins-Regular'>
                                    <p className=" font-Poppins-Bold  max-w-[350px] break-all  text-lg"><strong>{testimonial.name}</strong></p>
                                    <p className="   ">{testimonial.designation}</p>
                                </div>
                            </div>
                            <div className="">
                                <p className="font-Poppins-SemiBold mb-2  text-left"><>{`"${testimonial.subject}"`}</></p>
                                <p className=" md:text-justify text-left">{`"${testimonial.message}"`}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    
      
      </Swiper>
    </section>
            {/* <div className='md:px-10 p-5 '>

                <h1 className='text-3xl font-Poppins-Bold mb-2'>
                    Testimonials
                </h1>
                <p className='text-xl font-Poppins-Medium'>
                    What Our Clients Have to Say?
                </p>
                <div className=" grid md:grid-cols-2 grid-cols-1  py-5 md:p-10  md:gap-20 gap-14">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-[#92D7C4] bg-opacity-[40%] border relative overflow-hidden  transform transition duration-500 hover:shadow-lg   justify-self-center block  rounded-lg shadow-sm p-5">


                        

                            <div className="flex md:flex-row flex-col gap-5 md:items-center mb-3">
                                <Image
                                    className='rounded-full min-w-[76px] max-w-[76px] min-h-[76px] max-h-[76px] '
                                    src={testimonial.pfp}
                                    alt={`${testimonial.name}`}
                                    width={800}
                                    height={800}
                                />
                                <div className='flex flex-col gap-1 font-Poppins-Regular'>
                                    <p className=" text-Green450 font-bold max-w-[350px] break-all text-xl md:text-2xl"><strong>{testimonial.name}</strong></p>
                                    <p className="text-Green475  font-semibold">{testimonial.designation}</p>
                                </div>
                            </div>
                            <div className="font-Lexend-Regular">
                                <p className="font-semibold  mb-2"><>{`"${testimonial.subject}"`}</></p>
                                <p className=" md:text-justify">{`"${testimonial.message}"`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    )
}
