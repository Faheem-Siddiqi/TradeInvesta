'use client';
import React, { useEffect, useRef } from 'react';

export default function Page() {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Ensure the ref and the element exist before proceeding
    if (!widgetRef.current) return;

    // Create and append the TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
        { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
        { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: 'en'
    });

    widgetRef.current.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      if (widgetRef.current) {
        widgetRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className='h-screen md:m-10 m-5 relative overflow-hidden'>
      <div className='tradingview-widget-container'>
        <div ref={widgetRef} className='tradingview-widget-container__widget'></div>
        <div className='tradingview-widget-copyright'>
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
            <span className='blue-text'>Track all markets on TradingView</span>
          </a>
        </div>
      </div>

      <iframe
        src="https://tool.fastbull.com/calendar?theme=white&ftToken=d889d042337044cda9f76dc4a7a3041a"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ marginTop: '', marginBottom: '3rem' }}
      ></iframe>
    </div>
  );
}
