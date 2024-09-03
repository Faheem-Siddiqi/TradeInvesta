import React from 'react';
import Image from 'next/image';
export default function Team() {
  const testimonials = [
    {
      name: "Mihir Shah SHAH",
      pfp: "/assets/images/team/MahirShah.jpg",
      designation: "General Manager",
      message: "Mihir Shah specializes in technical charts and market indicators at Trade Investa. He manages the company’s social media presence and produces daily videos on market trends and sentiment analysis, ensuring our content effectively reaches and resonates with our audience."
    },
    {
      name: "Sweety Mihir Shah",
      pfp: "/assets/images/team/SweetyShah.jpg",
      designation: "Founder & Investor",
      message: "Sweety Mihir Shah, the driving force behind Trade Investa, brings over a decade of experience in trading equities, forex, indices, and commodities. Her deep expertise in price analysis sets her apart as a successful consultant, providing unique stock market insights and guiding the company's strategic direction."
    },
  ];
  return (
    <>
      <div className='bg-DarkBlue md:p-10 p-5  font-Poppins-Regular'>
        <h2 className="text-3xl font-Poppins-Bold mb-4 text-[#DBFFFF]">Team Members</h2>
        <p className='font-Poppins-Medium my-2 text-white'>Meet Our Team</p>
        <section className=''>
          <div className="grid md:grid-cols-2 grid-cols-1 py-5 text-black md:gap-20 gap-14">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative overflow-hidden bg-[#92D7C4] bg-opacity-[45%] transform transition duration-500 justify-self-center block rounded-lg p-5">
                <div className="flex md:flex-row flex-col gap-5 items-center mb-1">
                  <Image
                    className='rounded-full min-w-[76px] max-w-[76px] min-h-[76px] max-h-[76px] '
                    src={testimonial.pfp}
                    alt={testimonial.name}
                    width={1000}
                    height={1000}
                  />
                  <div className='flex flex-col gap-1 font-Poppins-Regular'>
                    <p className=" font-bold max-w-[350px] text-justify  md:break-words break-all  text-xl md:text-2xl"><strong>{testimonial.name}</strong></p>
                    <p className=" md:text-start text-center font-Poppins-SemiBold">{testimonial.designation}</p>
                  </div>
                </div>
                <div className="font-Lexend-Regular">
                  <p className="font-Poppins-Light text-justify ">{`${testimonial.message}`}</p>
                </div>
                <Image
                  className='rounded-full -bottom-4  -right-16 w-full h-full absolute'
                  src={'/assets/images/team/shape.png'}
                  alt={testimonial.name}
                  width={96}
                  height={96}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
