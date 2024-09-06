'use client'
import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
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

    document.querySelector('.tradingview-widget-container__widget').appendChild(script);

    return () => {
      document.querySelector('.tradingview-widget-container__widget').removeChild(script);
    };
  }, []);

  return (
    <>
      <div className='h-screen md:p-10 p-5 relative overflow-hidden'>
        <div className=''>
          {/* TradingView Widget Container */}
          <div className='tradingview-widget-container'>
            <div className='tradingview-widget-container__widget'></div>
            <div className='tradingview-widget-copyright'>
              <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                <span className='blue-text'>Track all markets on TradingView</span>
              </a>
            </div>
          </div>
        </div>
        
        <iframe
          src="https://tool.fastbull.com/calendar?theme=white&ftToken=d889d042337044cda9f76dc4a7a3041a"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ marginTop: '3rem' }}
        ></iframe>
      </div>
    </>
  );
}
