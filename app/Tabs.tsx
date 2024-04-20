import React, { useState } from 'react'; // Import useState from 'react'
import Image from 'next/image';
import Button from './Button';

// Define the types for state and setState props
interface TabsProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

// Functional component Tabs, taking state and setState as props
const Tabs: React.FC<TabsProps> = ({ state, setState }) => {
  return (
    <main className="flex bg z-10 min-h-screen flex-col items-center justify-between">
      {/* Main container */}
      <div className='absolute min-w-[420px] min-h-[600px] scale-[0.6] md:scale-[1.15] bg-black/60 border-4 border-[#BA4B00] rounded-2xl p-4 px-14 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        {/* Buttons for switching between tabs */}
        <div className='flex w-full items-center gap-5 justify-between'>
          {/* Button for Token Links tab */}
          <button 
            onClick={() => setState('Token Links')} // Set state to 'Token Links' when clicked
            className={`flex-1 transition-all duration-300 hover:bg-[#A3531C] hover:text-white hover:border-white text-[#A3531C] border-[3px] text-xl font-bold border-[#BA4B00] rounded-3xl mb-5 py-2 ${state === 'Token Links' ? 'bg-[#A3531C] text-white' : ''}`}
          >
            Token Links
          </button>
          {/* Button for Whitelist tab */}
          <button 
            onClick={() => setState('Tab 2')} // Set state to 'Tab 2' when clicked
            className={`flex-1 transition-all duration-300 hover:bg-[#A3531C] hover:text-white hover:border-white text-[#A3531C] border-[3px] text-xl font-bold border-[#BA4B00] rounded-3xl mb-5 py-2 ${state === 'Tab 2' ? 'bg-[#A3531C] text-white' : ''}`}
          >
            Whitelist
          </button>
        </div>
        {/* Conditional rendering based on the state */}
        {state === 'Token Links' ? (
          <>
            {/* Content for Token Links tab */}
            <div className='flex flex-col justify-center items-center text-center'>
              <Image src={'https://images.guns.lol/KWEJy.png'} className='w-[80px] h-[80px]' width={11111} height={11111} alt='logo' />
              <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#F1740F] to-[#BA4B00] text-4xl font-extrabold'>Dragon Token</p>
              <p className='text-[#A3531C] py-3 font-bold'>0x9Ac74c581a5894eE901Db015c9f86c885fB265EE</p>
              <p className='text-[#A3531C] font-bold max-w-[310px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corrupti ad sequi expedita nam dolorum ipsam. Numquam eveniet impedit harum ratione?</p>
            </div>
            {/* Button container for Token Links tab */}
            <div className='flex py-8 pb-14 justify-center gap-3 items-center flex-col'>
              {/* Button components for links */}
              <Button sitename='Example' sitelink='https://example.com' />
              <Button sitename='Example' sitelink='https://example.com' />
              <Button sitename='Example' sitelink='https://example.com' />
              <Button sitename='Example' sitelink='https://example.com' />
              <Button sitename='Example' sitelink='https://example.com' />
            </div>
          </>
        ) : (
          <>
            {/* Content for Whitelist tab */}
            <div className='flex flex-col justify-center items-center text-center'>
              <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#F1740F] to-[#BA4B00] text-4xl font-extrabold'>Whitelist</p>
              {/* Button for checking whitelist */}
              <button className='bg-[#A3531C] hover:bg-[#BA4B00] text-white py-2 px-6 rounded-xl mt-4'>Check WL</button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Tabs;
