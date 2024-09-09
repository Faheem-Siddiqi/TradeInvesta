'use client'
import React, { useState } from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function Page() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    file: null,
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };
  // form submission down+
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const contactInfo = {
        properties: {
          full_name: formData.name,
          user_email: formData.email,
          user_message: formData.message,
          message_subject: formData.subject,
        }
      };
      console.log(contactInfo);
      axios.post('/api/contacts', contactInfo)
        .then(response => {
          setLoading(false)
          setFormData({
            ...formData,
            name: '',
            email: '',
            subject: '',
            message: '',
            file: null,
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
  //   form submisson up
  const whatsappNumber = '+971527558698'; // Replace with your WhatsApp number (with the '+')
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };
  return (
    <>
      <Toaster />
      <div className='grid md:grid-cols-2 body-gradient grid-cols-1  md:p-10 p-5'>
        <section>
          <div className='flex flex-col gap-4  text-white'>
            <div>
              <h1 className='md:text-xl text-lg font-extrabold  font-Poppins-Regular'>Let{`'`}s Talk</h1>
              <p className=' md:w-[80%] font-light '>
                Elevate your financial future with Trade Investing—let{`'`}s grow your wealth together. Need expert guidance? We{`'`}re here to help.
              </p>
            </div>
            <div>
              <h1 className='md:text-xl text-lg font-extrabold  font-Poppins-Regular'>Email</h1>
              <p className=' md:w-[90%] font-light'>
              ceo@tradeinvesta.com
              </p>
            </div>
            <div>
              <h1 className='md:text-xl text-lg font-extrabold  font-Poppins-Regular'>Phone</h1>
              <p className=' md:w-[90%] font-light'>
            {`+971-52-755-8698`}
              </p>
            </div>
            <div>
              <h1 className='md:text-xl text-lg font-extrabold  font-Poppins-Regular'>Socials</h1>
              <div className="flex gap-3 mt-2 items-center">
                <a href="https://www.facebook.com/BMYHealthPak" target="_blank" rel="noopener noreferrer">
                  <IoLogoFacebook className=" text-3xl text-DarkBlue hover:text-white duration-500" />
                </a>
                <a href="https://www.instagram.com/tradeinvestadxb?igsh=MTk2aGk3c3FobzFr&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className=" text-2xl text-DarkBlue hover:text-white duration-500" />
                </a>
                <a href="https://www.linkedin.com/company/bmy-health/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className=" text-2xl text-DarkBlue hover:text-white duration-500" />
                </a>
                <a href="https://twitter.com/bmyhealth" target="_blank" rel="noopener noreferrer">
                  <BsTwitterX className=" text-2xl ml-1 text-DarkBlue hover:text-white duration-500" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className='md:text-4xl text-xl md:mt-0 mt-5 font-extrabold font-Poppins-Regular  text-white '>Contact Us</h1>
          <p className='text-Green300 font-Lexend-Regular mt-1  text-white '>Get in Touch </p>
          <form onSubmit={handleSubmit}>
            <input
              className='w-full my-3 !text-Green500 font-Satoshi-Black  text-white placeholder-white bg-white bg-opacity-30 rounded outline-none p-4'
              type="text"
              id="name"
              name="name"
              placeholder='Enter Full Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className='w-full my-3 !text-Green500 font-Satoshi-Black  text-white placeholder-white bg-white bg-opacity-30 rounded outline-none p-4'
              type="email"
              id="email"
              name="email"
              placeholder='Enter Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className='w-full my-3 !text-Green500 font-Satoshi-Black text-white  placeholder-white bg-white bg-opacity-30 rounded outline-none p-4'
              type="text"
              id="subject"
              name="subject"
              placeholder='Enter Subject'
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              className='w-full my-3 !text-Green500 font-Satoshi-Black placeholder-white  text-white bg-white bg-opacity-30 rounded outline-none p-4'
              rows={5}
              id="message"
              name="message"
              value={formData.message}
              placeholder='Enter Message'
              onChange={handleChange}
              required
            />
            <button
              disabled={loading}
              type='submit'
              className="mt-5 relative h-[3.2rem] w-40 overflow-hidden  bg-DarkBlue  text-white transition-all before:absolute before:right-0 before:top-0 before:h-[3.1rem] before:w-6 before:translate-x-[3.5rem] before:rotate-6 before:bg-white before:opacity-10 before:duration-700 font-Poppins-Regular hover:before:-translate-x-40">
              {loading ? (<>
                Sending
              </>) : (<>
                Send
              </>)}
            </button>
          </form>
        
          <h1 className='md:text-2xl text-xl font-extrabold mt-5 text-white  font-Poppins-Regular'>WhatsApp</h1>
          <p className='text-Green300 font-Lexend-Regular text-white'>Join us on WhatsApp </p>
          <button
            className="mt-5 relative h-[3.2rem] w-40 overflow-hidden border border-Green300 bg-Green300 text-white transition-all before:absolute before:right-0 before:top-0 before:h-[3.2rem] before:w-6 before:translate-x-[3.2rem] before:rotate-6 before:bg-white before:opacity-10 before:duration-700 font-Poppins-Regular hover:before:-translate-x-40"
            onClick={handleWhatsAppClick}
          >
            <span className='flex items-center  justify-start p-2 gap-2'>
              <BsWhatsapp className='text-3xl  ml-2' />
              Join Now
            </span>
          </button>
        </section>
      </div>
    </>
  );
}
