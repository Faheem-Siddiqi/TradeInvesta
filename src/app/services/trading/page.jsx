'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
// import { useRouter } from 'next/router';
export default function Page() {
  const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        role: '',
        location: '',
        resumeLink: '',
        coverLetter:''
      });
      const handleInputChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'file' ? files[0] : value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    try {
      setLoading(true)
      console.log(formData);
      const placementInfo = {
        properties: {
         full_name: formData.fullName,
         user_email: formData.email,
         user_phone: formData.phoneNumber,
          role: formData.role,
          location: formData.location,
          cover_letter: formData.coverLetter,
        cv : formData.resumeLink,
        }
      };
      console.log(placementInfo);
      axios.post('/api/contacts', placementInfo)
        .then(response => {
          setLoading(false)
          setFormData({
            ...formData,
            fullName: '',
            email: '',
            phoneNumber: '',
            role: '',
            location: '',
            resumeLink: '',
            coverLetter:''
          });
          console.log(response.data);
          if (response.data.success) {
            toast.success('Response Sent Successfully');
          }
          else {
            console.log('!success')
            toast.error('Failed to send response');
          }
        });
    }
    catch (error) {
      console.error('Error:', error);
    }
  }
    return (
        <>
<Toaster
  position="top-center"
  reverseOrder={false}
/>
<section className={`flex flex-col`}>
            <section className='md:px-10 px-5 md:py-20 py-10 header-gradient'>
                <h2 className='font-Poppins-ExtraBold   text-Green1  text-3xl md:text-4xl'>
                    Services
                </h2>
                <p className='my-5 text-[#DBFFFF] font-Poppins-Regular sm:text-justify'>
                    {`At Trade Investa, we offer expert price analysis, market guidance, and daily reviews to empower traders of all levels. Our comprehensive services include in-depth research, educational resources, and strategic insights via social media, keeping you informed and ahead in the dynamic financial landscape.`}
                </p>
            </section>
            <section className='md:px-10 py-5 px-5 body-gradient'>
                <div className='flex flex-col md:flex-row items-center text-white text-justify'>
                    <div className='md:w-[70%]'>
                        <h2 className='font-Poppins-ExtraBold  text-white  text-3xl md:text-4xl'>
                            Trading Services
                        </h2>
                        <h1 className='text-3xl  mt-5 font-Poppins-Bold text-white'>
                            Forex Trading
                        </h1>
                        <h1 className='font-Poppins-SemiBold mt-2 text-white'>
                            Global Currency Markets at Your Fingertips
                        </h1>
                        <p className='font-Poppins-Light place-content-start mt-4'>
                            {`Engage in the world’s largest financial market with Trade Investa, where you can trade currency pairs like a pro. Gain an edge with access to real-time data and expert insights, empowering you to seize opportunities in fluctuating exchange rates. With over 55 major, cross, and exotic Forex pairs at your fingertips, our platform offers industry-leading tight spreads that maximize your trading potential while keeping costs low. Whether you're hedging against currency risk or capitalizing on market movements, we provide the tools and support you need to thrive in Forex trading.`}
                        </p>
                    </div>
                    <div className='md:w-[30%]'>
                        <Image
                            className='place-content-start w-[40rem]'
                            src='/assets/images/services/forex.png'
                            alt='forex'
                            height={1000}
                            width={1000}
                        />
                    </div>
                </div>
            </section>
            <section className='md:px-10 py-5 px-5 body-gradient'>
                <div className='flex flex-col-reverse md:gap-5 md:flex-row items-center text-white text-justify'>
                    <div className='md:w-[25%]'>
                        <Image
                            className=' w-[35rem] md:h-[20rem] '
                            src='/assets/images/services/indices.png'
                            alt='indices'
                            height={1000}
                            width={1000}
                        />
                    </div>
                    <div className='md:w-[70%]'>
                        <h1 className='text-3xl  mt-5 font-Poppins-Bold text-white'>
                            Indices Trading
                        </h1>
                        <h1 className='font-Poppins-SemiBold mt-2 text-white'>
                            Capture Market Movements
                        </h1>
                        <p className='font-Poppins-Light  mt-4'>
                            {`Expand your investment horizon with Trade Investa by trading leading global indices like the S&P 500, NASDAQ, and Dow Jones. Unlock instant access to major markets worldwide, including the German DAX Index and the US Wall Street 30, allowing you to diversify your portfolio effortlessly. With our advanced analytics and expert strategies, you can gain broad exposure to entire markets or sectors without the need to buy individual stocks, empowering you to make informed decisions and optimize your investment outcomes.`}
                        </p>
                    </div>
                </div>
            </section>
            <section className='md:px-10 py-5 px-5 body-gradient'>
                <div className='flex flex-col md:flex-row justify-center items-center text-white text-justify'>
                    <div className='md:w-[70%]'>
                        <h1 className='text-3xl mt-5 font-Poppins-Bold text-white'>
                            Metals Trading
                        </h1>
                        <h1 className='font-Poppins-SemiBold mt-2 text-white'>
                            Invest in Precious Metals
                        </h1>
                        <p className='font-Poppins-Light  mt-4'>
                            {`Secure your portfolio with investments in precious metals like gold, silver, and platinum, which offer a hedge against inflation and economic uncertainty. Diversify your holdings further by exploring new opportunities through our global network, including trading in other valuable metals. With Trade Investa, you can effortlessly manage and grow your portfolio, supported by comprehensive market analysis and cutting-edge trading tools.`}
                        </p>
                    </div>
                    <div className='md:w-[25%]'>
                        <Image
                            className=' md:w-[35rem]'
                            src='/assets/images/services/metalTrading.png'
                            alt='metal Trading'
                            height={1000}
                            width={1000}
                        />
                    </div>
                </div>
            </section>
            <section className='md:px-10 py-5 px-5 body-gradient'>
                <div className='flex flex-col-reverse md:flex-row items-center text-white text-justify'>
                    <div className='md:w-[25%]'>
                        <Image
                            className=' w-[35rem]'
                            src='/assets/images/services/shares.jpg'
                            alt='shares'
                            height={1000}
                            width={1000}
                        />
                    </div>
                    <div className='md:w-[70%]'>
                        <h1 className='text-3xl  mt-5 font-Poppins-Bold text-white'>
                            Shares Trading
                        </h1>
                        <h1 className='font-Poppins-SemiBold mt-2 text-white'>
                            Own a Piece of Leading Companies
                        </h1>
                        <p className='font-Poppins-Light  mt-4'>
                            {`Get in on the action of buying and selling shares from a vast selection of equities, featuring the world’s largest multinational companies listed on top global stock exchanges. With Trade Investa, you can confidently invest in shares of the world’s top companies and diversify your portfolio. Maximize your returns by leveraging our platform’s robust research tools, expert advice, and real-time tracking of company performance and market trends. Access premier market opportunities and make informed decisions to enhance your investment strategy.`}
                        </p>
                    </div>
                </div>
            </section>
            <section className='md:px-10 py-5 px-5 body-gradient'>
                <div className='flex flex-col md:flex-row justify-center items-center text-white text-justify'>
                    <div className='md:w-[70%]'>
                        <h1 className='text-3xl mt-5 font-Poppins-Bold text-white'>
                            Commodities Trading
                        </h1>
                        <h1 className='font-Poppins-SemiBold mt-2 text-white'>
                            Trade Raw Materials and Agricultural Products
                        </h1>
                        <p className='font-Poppins-Light  mt-4'>
                            {`Expand your portfolio by trading key commodities like energy and grains, leveraging global supply and demand trends to capitalize on market opportunities. With Trade Investa, you can diversify your investments by trading a wide range of commodities such as oil, natural gas, corn, and wheat. Our platform provides access to global commodity markets, enabling you to profit from price fluctuations driven by supply, demand, and geopolitical factors. With real-time market data and expert insights at your fingertips, you can confidently navigate the complexities of commodities trading and achieve strong returns on your investments..`}
                        </p>
                    </div>
                    <div className='md:w-[25%]'>
                        <Image
                            className=' md:w-[35rem]'
                            src='/assets/images/services/CommodityTrade.png'
                            alt='Commodities Trading'
                            height={1000}
                            width={1000}
                        />
                    </div>
                </div>
            </section>
            <section className='md:px-10 py-5 px-5 bg-DarkBlue'>
                <div className='flex flex-col md:flex-row justify-center items-center text-white text-justify'>
                    <div className='md:w-[25%]'>
                        <Image
                            className=' md:w-[35rem]'
                            src='/assets/images/services/Job.png'
                            alt='job'
                            height={1000}
                            width={1000}
                        />
                    </div>
                    <div className='md:w-[70%]'>
                        <h1 className='text-3xl mt-5 font-Poppins-Bold text-left text-white'>
                            Trade Investa Recruitment
                        </h1>
                        <h1 className='font-Poppins-SemiBold mt-2 text-white'>
                            {`  Welcome to Trade Investa Recruitment – Your Gateway to Exceptional Talent`}
                        </h1>
                        <p className=' '>
                            {`At Trade Investa Recruitment, we pride ourselves on being an international recruitment agency with a global footprint, boasting offices in Dubai and strong partnerships in India and Canada. Our mission is to connect top-tier talent with premier employers across a diverse range of industries, from white-collar to blue-collar sectors.`}
                        </p>
                        <h1 className='font-Poppins-SemiBold my-2 text-white'>
                            Our Expertise
                        </h1>
                        <p>
                            {`
                            Our team of recruitment specialists excels in understanding the unique needs of both employers and job seekers. We are adept at matching exceptional permanent staff to employers of choice, ensuring that every placement not only meets but exceeds expectations. Whether you are seeking skilled professionals for senior roles or talented individuals for operational positions, we offer a bespoke recruitment service tailored to your specific requirements.
                            `}
                        </p>
                    </div>
                </div>  <div className='text-white my-8'>
                    <h1 className='font-Poppins-SemiBold my-2 text-white'>
                        Why Choose Trade Investa Recruitment?
                    </h1>
                    <span className='font-Poppins-SemiBold'>1. Global Reach, Local Expertise:</span>{` With a presence in key international markets and strong local networks, we are uniquely positioned to source and place top talent globally while maintaining a deep understanding of local industry nuances.`}
                    <div className='h-[8px]'></div>
                    <span className='font-Poppins-SemiBold'>2. Tailored Solutions:</span> {`We recognize that every organization and job seeker is unique. Our approach is highly customized, ensuring that our recruitment strategies are aligned with your specific needs and objectives.`}
                    <div className='h-[8px]'></div>
                    <span className='font-Poppins-SemiBold'>3. Industry Specialization:</span>
                    {`Our expertise spans a wide range of industries, from finance and technology to manufacturing and healthcare. This specialization allows us to provide targeted and effective recruitment solutions that drive success for both employers and candidates.`}
                    <div className='h-[8px]'></div>
                    <span className='font-Poppins-SemiBold'>4. Commitment to Excellence:</span>
                    {`At Trade Investa Recruitment, we are dedicated to delivering exceptional service. Our team works diligently to ensure that every placement is a perfect fit, fostering long-term success and satisfaction.`}
                </div>
            </section>
            <section className='md:px-10 py-5 px-5 body-gradient'>
      <div className='flex flex-col md:flex-row items-center text-white text-justify'>
        <div className='md:min-w-[50%] w-full'>
          <h1 className='text-3xl mt-5 font-Poppins-Bold text-white'>
            Job Placement
          </h1>
          <h1 className='font-Poppins-SemiBold mt-2 text-white'>
            Please drop your details below
          </h1>
          <form
            className='flex flex-col gap-5 my-5 md:w-[50%] text-white'
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder='Full Name'
              className='outline-0 placeholder-white bg-white bg-opacity-30 px-2 p-3'
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Email'
              className='outline-0 bg-white placeholder-white bg-opacity-30 px-2 p-3'
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder='Phone Number'
              className='outline-0 bg-white placeholder-white bg-opacity-30 px-2 p-3'
            />
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              placeholder='Role'
              className='outline-0 bg-white placeholder-white bg-opacity-30 px-2 p-3'
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder='Location'
              className='outline-0 bg-white placeholder-white bg-opacity-30 px-2 p-3'
            />
            <input
              type="text"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleInputChange}
              placeholder='CV / Resume Link'
              className='outline-0 bg-white placeholder-white bg-opacity-30 px-2 p-3'
            />
<textarea
              type="text"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder='Cover Letter'
              className='outline-0 placeholder-white bg-white bg-opacity-30 px-2 p-3'
            />
            <button
           disabled={loading}
              type='submit'
              className="mt-5 relative h-[3.2rem] w-40 overflow-hidden bg-DarkBlue rounded md:rounded-md border-Green300 bg-Green300 text-white transition-all before:absolute before:right-0 before:top-0 before:h-[3.2rem] before:w-6 before:translate-x-[3.2rem] before:rotate-6 before:bg-white before:opacity-10 before:duration-700 font-Poppins-Regular hover:before:-translate-x-40"
            >
              {loading ? (<>
                Sending
              </>) : (<>
                Send
              </>)}
            </button>
          </form>
        </div>
        <div className='md:w-[25%]'>
          <Image
            className='w-[35rem]'
            src='/assets/images/services/JobPlacement.jpg'
            alt='Job Placement'
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </section>
    </section>
        </>
    )
}
