'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../../../public/assets/images/logo/Logo.png'
export default function Disclaimer() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className={`${toggle && ('hidden')} max-h-screen  min-h-screen backdrop-blur-sm   bg-opacity-70 fixed top-0  w-full z-20 bg-black`}>
                <div className='bg-white absolute translate-y-[35vh] overflow-y-auto xl:h-[40vh] h-[35vh] xl:left-[16rem] xl:mx-0 mx-5 xl:w-[50rem] xl:p-10 p-5 rounded'>
                    <div className='flex'>
                        <div className='flex flex-col gap-1 items-center'>
                            <Image
                                className='w-[40px] h-[40px]'
                                src={Logo}
                                alt='logo image'
                                height={400}
                                width={400}
                            />
                            <h2 className="text-Green1 text-sm  md:font-Poppins-SemiBold">Trade Investa </h2>
                        </div>
                    </div>
                    <hr className='mt-5 w-[99%]' />
                    <div className='font-Poppins-Light text-justify text-base mt-5'>
                        <span className='font-Poppins-SemiBold'>Surplus/Deficit Disclaimer:</span>
                        {`
  This website and its content, including business strategies, stock/forex market strategies, and marketing methods, are provided for informational purposes only. Results may vary and are not guaranteed. Tradeinvesta.com makes no express or implied guarantees that following the advice or content on this site will result in financial gain or improved profits. Outcomes depend on various factors, including the nature of your business, market conditions, individual experience, and other uncontrollable elements. `}
                        <div className='h-[8px]'></div>
                        {`The information on this website is general advice only. It does not take into account your financial objectives, situation or needs. We recommend you seek professional advice from an independent financial advisor before trading on or through our platforms.`}
                        <div className='h-[8px]'></div>
                        {`
 By using this website or its content, you assume all risks associated with applying the advice provided. You are solely responsible for any outcomes resulting from your actions, regardless of your interpretation of the information.
Our company is not liable for the success or failure of your business based on the information provided. It is your responsibility to conduct due diligence and seek professional advice when making business, financial, or tax decisions.
`}
                        <div className='h-[8px]'></div>
                        <span className='font-Poppins-SemiBold'>
                            {`"We make no guarantees of income or success from applying this information, which is intended solely for educational and informational purposes."  `}
                        </span>
                    </div>
                    <button
                        onClick={() => { setToggle(!toggle) }}
                        className="mt-5 before:ease relative h-12 w-40 overflow-hidden border border-DarkBlue bg-DarkBlue text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-DarkBlue hover:before:-translate-x-40">
                        <span relative="relative z-10">I Agree</span>
                    </button>
                </div>
            </div>
        </>
    )
}
