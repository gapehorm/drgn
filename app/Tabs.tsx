"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';

const Tabs = () => {
  const [state, setState] = useState('Token Links');

  return (
    <main className="flex bg z-10 min-h-screen flex-col items-center justify-between">
      <div className='absolute min-w-[420px] min-h-[600px] scale-[0.6] md:scale-[1.15] bg-black/60 border-4 border-[#BA4B00] rounded-2xl p-4 px-14 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='flex w-full items-center gap-5 justify-between'>
          <button onClick={() => setState('Token Links')} className={`flex-1 transition-all duration-300 hover:bg-[#A3531C] hover:text-white hover:border-white text-[#A3531C] border-[3px] text-xl font-bold border-[#BA4B00] rounded-3xl mb-5 py-2 ${state === 'Token Links' ? 'bg-[#A3531C] text-white border-white' : ''}`}>Token Links</button>
          <button onClick={() => setState('Tab 2')} className={`flex-1 transition-all duration-300 hover:bg-[#A3531C] hover:text-white hover:border-white text-[#A3531C] border-[3px] text-xl font-bold border-[#BA4B00] rounded-3xl mb-5 py-2 ${state === 'Tab 2' ? 'bg-[#A3531C] text-white border-white' : ''}`}>WL Checker</button>
        </div>
        {state === 'Token Links' ? (
          <>
            <div className='flex flex-col justify-center items-center text-center'>
              <Image src={'https://images.guns.lol/KWEJy.png'} className='w-[80px] h-[80px]' width={11111} height={11111} alt='logo'></Image>
              <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#F1740F] to-[#BA4B00] text-4xl font-extrabold'>Dragon Token</p>
              <p className='text-[#A3531C] py-3 font-bold'>cryptocryptocryptocryptocryptocryptocrypto</p>
              <p className='text-[#A3531C] font-bold max-w-[310px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti ad sequi expedita nam dolorum ipsam. Numquam eveniet impedit harum ratione?</p>
            </div>
            <div className='flex py-8 pb-14 justify-center gap-3 items-center flex-col'>
              {/* Add buttons here */}
              <Button sitename='Example' sitelink='https://example.com' />
              <Button sitename='Example' sitelink='https://example.com' />
              <Button sitename='Example' sitelink='https://example.com' />
              <Button sitename='Example' sitelink='https://example.com' />
              <Button sitename='Example' sitelink='https://example.com' />
            </div>
          </>
        ) : state === 'Tab 2' ? (
          <>
            {/* Add button for Tab 2 here */}
            <Button sitename='Button for Tab 2' sitelink='https://example.com/tab2' isTab2 />
          </>
        ) : (
          <div className='flex flex-col justify-center items-center text-center'>
            <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#F1740F] to-[#BA4B00] text-4xl font-extrabold'>Heading</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Tabs;
