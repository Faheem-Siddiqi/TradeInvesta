'use client'
import React, { useState, useEffect } from 'react'

import Disclaimer from './components/Disclaimer.jsx'

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
      {showDisclaimer && (
        <>
          <Disclaimer />

        

        

        </>
      )}
     
     <div className="w-full
             p-5
             overflow-hidden bg-blue-500">
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>  <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>  <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>  <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>  <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
          <span className="text-white text-lg font-bold mr-8">
            Web Development In Progress
          </span>
        </div>
      </div>
      {/* <Testimonials/> */}
    </div>
  )
}
