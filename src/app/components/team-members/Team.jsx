import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiLinkedinLogoLight } from "react-icons/pi";

const teamMembers = [
  {
    name: "Sweety Mihir Shah",
    role: "Founder & Investor",
    bio: "Sweety brings over a decade of experience in trading equities, forex, indices, and commodities. Her deep expertise sets her apart as a successful consultant.",
    imgSrc: "/assets/images/team/SweetyShah.jpg",
    linkedinUrl: "https://www.linkedin.com/in/",
    twitterUrl: "https://twitter.com/",
    instagramUrl: "https://instagram.com/"
  },
  {
    name: "Mahir Shah",
    role: "General Manager",
    bio: "Mahir Shah, an expert in technical charts and market indicators at Trade Investa, manages social media and videos on market trends and sentiment analysis to engage the audience.",
    imgSrc: "/assets/images/team/MahirShah.jpg",
    linkedinUrl: "https://www.linkedin.com/",
    twitterUrl: "https://twitter.com/",
    instagramUrl: "https://instagram.com/"
  }
];

export default function Team() {
  return (
    <>
      <div className="md:mt-10 mt-5">
        <div className="container flex justify-center mx-auto">
          <div>
            <p className="text-gray-500 text-lg text-center font-normal pb-3">OUR TEAM</p>
            <h1 className="xl:text-4xl md:text-3xl text-xl text-center text-gray-800 font-extrabold pb-6 w-[95%] md:w-5/6 mx-auto">
              The Talented People Behind the Scenes of the Organization
            </h1>
          </div>
        </div>
        <div className="w-full bg--100 px-5 md:px-10 pt-10">
          <div className="container mx-auto">
            <div role="list" aria-label="Behind the scenes People" className="lg:flex md:flex sm:flex items-center xl:justify-center flex-wrap md:justify-center md:gap-10 gap-5 sm:justify-center lg:justify-center">
              {teamMembers.map((member, index) => (
                <div key={index} role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md card-gradient">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <Image 
                          src={member.imgSrc} 
                          alt={`Display Picture of ${member.name}`} 
                          width={128} 
                          height={128} 
                          className="rounded-full object-cover h-full w-full shadow-md" 
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center text-white mb-1">{member.name}</h1>
                      <p className="text-sm text-center text-white">{member.role}</p>
                      <p className="text-center text-white text-base pt-3 font-normal">{`${member.bio}`}</p>
                      <div className="w-full flex justify-center items-center pt-5 pb-5">
                        <Link 
                         target='_blank'
                        href={member.linkedinUrl} >
                          <p className="mx-5" aria-label="LinkedIn">
                            <PiLinkedinLogoLight className='text-3xl font-light text-stone-300' />
                          </p>
                        </Link>
                        <Link 
                         target='_blank'
                        href={member.twitterUrl} >
                          <p className="mx-5" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d6d3d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                          </p>
                        </Link>
                        <Link 
                        target='_blank'
                        href={member.instagramUrl} >
                          <p className="mx-5" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d6d3d1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
