import React from 'react'
import Image from 'next/image';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
export default function Resources() {
    return (
        <>
            <section className='md:px-10 px-5 md:py-20 py-10 header-gradient'>
                <h2 className='font-Poppins-ExtraBold   text-Green1  text-3xl md:text-4xl'>
                    Resources
                </h2>
                <p className='my-5 text-[#DBFFFF] font-Poppins-Regular sm:text-justify'>
                    {`Trade Investa is dedicated to empowering traders with the knowledge and tools they need to succeed in financial markets. Our purpose is to provide insightful analysis, market trends, and expert guidance tailored to both beginners and experienced traders. Customers will find a wealth of resources, including YouTube tutorials, daily Instagram, LinkedIn, and X (Twitter) posts, all designed to keep them informed and confident in their trading decisions.`}
                </p>
            </section>
            <section className='b1ody-gradient items-center  flex flex-col md:flex-row md:pl-10  '>
                <div className='md:w-[50%]  items-center w-full'>
                    <div>
                        <div className='flex  flex-col md:flex-row gap-2 items-start md:mx-0 m-5'>
                            <div className='flex items-start'>
                                <Image
                                    className='max-w-[70px] max-h-[50px] '
                                    src='/assets/images/resources/youtubeLogo.jpg'
                                    alt='youtube logo'
                                    height={1000}
                                    width={1000}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-5xl  text-red-600   font-Poppins-SemiBold'>
                                    Youtube
                                </h1>
                                <h1 className='text-3xl text-red-600  ml-2  font-Poppins-SemiBold   '>
                                    Tutorials
                                </h1>
                                <p className='font-Poppins-SemiBold text-DarkBlue ml-3 '>
                                <Link
                        href='https://www.youtube.com/'
                        target='blank'
                >
Subscribe
</Link>
                        </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-[50%]  overflow-hidden w-full mt-5 md:mt-20  '>
                    <Link
                        href='https://www.youtube.com/'
                        target='blank'
                    >
                        <Image
                            className='-z-10 relative md:left-[0.5rem]'
                            src='/assets/images/resources/youtubeTutorial.png'
                            alt='Youtube'
                            height={1500}
                            width={1500}
                        />
                    </Link>
                </div>
            </section>
            <section className='md:p-10 p-5 bg-DarkBlue '>
                <h1 className='text-3xl font-Poppins-Bold text-Green1'>
                    Community
                </h1>
                <div className='flex gap-1 items-center flex-wrap my-5 '>
                    <p className='text-Green1 font-Poppins-SemiBold text-lg  '>
                        Join Our Community on
                    </p>
                    <FaXTwitter className='text-Green1 text-2xl' />
                </div>
                <div>
                    <span className='text-white italic font-Poppins-Medium'>
                        <span className='text-Green1 italic font-Poppins-Medium'>
                            {`”`}
                        </span>
                        {`
    Ready to elevate your trading game? At Trade Investa, we empower traders with expert insights, daily market trends, and in-depth analysis. Whether you're a beginner or a pro, joining us means staying ahead in the fast-paced world of trading. 
    `}
                    </span>
                    <span className='text-Green1 italic font-Poppins-Medium'>
                        {`”`}
                    </span>
                    <span className='ml-1 text-Green1 font-Poppins-Light underline'>
                        <Link
                            href='/'
                        >
                            Read More
                        </Link>
                    </span>
                </div>
            </section>
            <section className='body-gradient md:p-10 p-5'>
                <div>
                    <h1 className='text-3xl font-Poppins-Bold text-white'>
                        Posts
                    </h1>
                    <div className='flex gap-1 items-center flex-wrap my-5 '>
                        <p className='text-white font-Poppins-SemiBold text-lg  '>
                            Find Us On
                        </p>
                        <Link href="https://www.linkedin.com/company/bmy-health/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-neutral-200 text-2xl hover:text-white duration-300" />
                        </Link>
                    </div>
                    <span className='text-justify text-white font-Poppins-Regular'>
                        {`Unlock Your Trading Potential with Trade Investa!
In the dynamic world of financial markets, staying informed and making the right decisions is crucial. Trade Investa is here to guide you every step of the way. We provide expert analysis, daily market trends, and actionable insights tailored for traders at all levels.
What is trading? Trading involves buying and selling financial instruments like stocks, forex, or commodities to profit from market movements. Success in trading requires knowledge, strategy, and the ability to analyze market trends.
By associating with Trade Investa, you gain access to a wealth of resources, including YouTube tutorials, and insightful daily content on Instagram, LinkedIn, and X (Twitter). These tools are designed to help you navigate the complexities of trading with confidence and precision.
Join our community today and take your trading skills to the ... `}
                        <span className='ml-1 text-white font-Poppins-Light underline'>
                            <Link
                                href='/'
                            >
                                Read More
                            </Link>
                        </span>
                    </span>
                </div>
            </section>
            <section className='bg-Green1 overflow-hidden justify-around  items-center h-[50vh] lg:h-[70vh]  flex md:flex-row  '>
                <div className='w-fit md:my-0  my-5'>
                    <div className='flex flex-col justify-center '>
                        <h2 className='text-center relative   text-white font-Poppins-SemiBold text-lg md:text-3xl'>
                            Follow Us On
                        </h2>
                        <Link
                            target='_blank'
                            href='https://www.instagram.com/tradeinvestadxb?igsh=MTk2aGk3c3FobzFr&utm_source=qr'>
                            <Image
                                className='md:w-[100%] w-[70%] h-[70%] md:h-[100%] block mx-auto'
                                src='/assets/images/resources/instagramLogoImage.png'
                                alt='Instagram Logo'
                                height={1000}
                                width={1000}
                            />
                        </Link>
                    </div>
                </div>
                <div className='w-fit lg:h-[70vh] h-[50vh] md:block hidden'>
                    <Image
                        className='w-fit h-full block mx-auto'
                        src='/assets/images/resources/Instagram.png'
                        alt='our mission'
                        height={1000}
                        width={1000}
                    />
                </div>
            </section>
        </>
    )
}
