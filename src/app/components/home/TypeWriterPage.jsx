import React from 'react'
import Typewriter from 'typewriter-effect';
export default function TypeWriterPage() {
  return (
   <div className='font-Poppins-Regular  text-2xl md:text-4xl  text-Green1'>
     <Typewriter
   
   options={{
     strings: ['Financial Trends.', 'Market Analysis.', 'Trading Insights.'],
     autoStart: true,
     loop: true,
   }}
 />
   </div>
  )
}
