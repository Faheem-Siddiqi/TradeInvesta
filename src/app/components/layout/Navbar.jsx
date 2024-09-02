import React from 'react'
import Logo from '../../../../public/assets/images/logo/Logo.png'
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  var Nav = [
    {
      link: 'Home',
      href: '/'
    },
    {
      link: 'About',
      href: '/about'
    },
    {
      link: 'Resources',
      href: '/resources'
    },
    {
      link: 'Economic Calender',
      href: '/economic-calendar'
    },
    {
      link: 'Services',
      href: '/services'
    },
    {
      link: 'Contact',
      href: '/contact'
    },
  ]
  return (
    <>
      <nav className='bg-DarkBlue md:px-10 md:py-4 px-5'>
        <section id='desktop' className='flex  justify-between items-center'>
          <Link href='/' className='flex flex-col gap-1 items-center'>
            <Image
              className='w-[40px] h-[40px]'
              src={Logo}
              alt='logo image'
              height={400}
              width={400}
            />
            <h2 className="text-Green1 text-sm  md:font-Poppins-SemiBold">Trade Investa </h2>
          </Link>
          <div className='flex gap-5 items-center'>
            <ul className="list-none flex gap-5  text-Green1 font-Poppins-Light">
              {Nav.map((item, index) => (
                <li
                  key={index}
                  className="relative my-3 w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-Green1 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left list-none"
                >
                  <Link href={item.href}>{item.link}</Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center overflow-hidden text-white gap-1 w-[130px] h-[35px] bg-gradient-to-r from-[#D4B77B] to-[#937A53] rounded-[4px] transition-all duration-900 ease-in-out hover:bg-gradient-to-r hover:from-[#937A53] hover:to-[#D4B77B]">
              <Link href="/" className="text-center cursor-pointer w-full px-3 py-3">
                Open Account
              </Link>
            </div>
          </div>
        </section>
      </nav>
    </>
  )
}
