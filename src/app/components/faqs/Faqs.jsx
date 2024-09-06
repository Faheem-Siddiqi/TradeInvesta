'use client'
import React, { useState } from 'react';
export default function Faqs() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const faqData = [
        {
            question: "What software do professional Forex traders use?",
            answer: "Professional forex traders often use MetaTrader 4 (MT4) and MetaTrader 5 (MT5). These platforms provide advanced charting options, analysis tools, and algorithmic trading capabilities. They are known for their fast order execution and extensive trading features, making them top choices for effective forex trading.",
        },
        {
            question: "What Forex Trading is and How it Works?",
            answer: "In the forex market, you exchange one currency for another, effectively selling one while buying another. The key factor is the exchange rate between the two currencies, which constantly fluctuates due to supply and demand. These fluctuations create opportunities for profit or loss. Millions of traders worldwide participate in the forex market, creating high liquidity. This means there’s always a buyer or seller for any currency, making the market dynamic and highly active Understanding Currency Markets and Pairs. In forex, currencies are traded in pairs, like EUR/USD. The first currency is the 'Base Currency' (EUR), and the second is the 'Counter Currency' (USD). When trading, you'll see two prices: the Sell or 'Bid' price and the Buy or 'Ask' price. Remember, buying or selling always involves the first currency in the pair.",
        },
        {
            question: "What is a Pip?",
            answer: "You’ll need to become very familiar with the term 'Pip' if you’re going to indulge in online forex trading. In forex trading, a 'Pip' (short for 'price in point' or 'percentage in point') is the smallest price movement in currency trading, typically the fourth decimal place (0.0001). Understanding pips is crucial, as spreads the difference between buy and sell prices are quoted in pips. Becoming familiar with this term is key to navigating the forex market effectively."
        },
        {
            question: "What is the Spread?",
            answer: "In forex trading, the spread is the difference between the bid and ask prices of a currency pair. It represents the cost of placing a trade. The bid price is what you receive when selling the base currency, while the ask price is what you pay when buying it. Several factors can influence the spread: 1) The trading instrument Market volatility The broker you use A lower spread generally indicates better trading conditions. 2) Introduce Brokers like Trade Investa offer competitive spreads, though these can widen during high market volatility. 3) A narrower spread usually signifies a more liquid market."
        },
    ];
    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return (
        <div className="md:p-10 p-5  body-gradient ">
            <h2 className="text-3xl font-Poppins-Bold mb-4 text-[#DBFFFF]">Frequently Asked Questions</h2>
            <ul className="space-y-5">
                {faqData.map((faq, index) => (
                    <li key={index} className="bg-white pr-2 bg-opacity-10 rounded ">
                        <div className="flex p-4 justify-between cursor-pointer " onClick={() => handleToggle(index)}>
                            <h3 className="text-lg font-Poppins-SemiBold text-white   ">{`${faq.question}`}</h3>
                            {expandedIndex === index ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6  text-[#DBFFFF]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                </svg>
                            )}
                        </div>
                        {expandedIndex === index && (
                            <p className=" text-white pb-4 mt-1 px-3">{`${faq.answer}`}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
