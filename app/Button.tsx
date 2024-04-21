import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  sitename: string;
  sitelink: string;
  isTab2?: boolean; // New prop to indicate whether the button should be visible only in Tab 2
}

const Button = ({ sitename, sitelink, isTab2 }: ButtonProps) => {
  sitelink = sitelink.replace('https://', '');
  let site = 'https://' + sitelink;

  // Check if the button should be visible only in Tab 2
  if (isTab2 && typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam !== '2') return null; // Return null if it's not Tab 2
  }

  return (
    <div className='flex justify-between border-[2px] rounded-xl py-3 px-1.5 border-[#CE5101] items-center gap-14'>
      <div>
        <p className='text-[#A3531C] text-xs font-bold'>{sitename}</p>
        <Link href={site}>
          <a className='text-[#C24A01] font-extrabold'>{sitelink}</a>
        </Link>
      </div>
      <Link href={site}>
        <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -0.5 25 25">
          <path
            fill="#CE5101"
            d="M12.5 6.25a.75.75 0 000-1.5v1.5zm7.75 6.25a.75.75 0 00-1.5 0h1.5zm-.75-6.25a.75.75 0 000-1.5v1.5zm-4.088-1.5a.75.75 0 000 1.5v-1.5zm4.838.75a.75.75 0 00-1.5 0h1.5zm-1.5 4.141a.75.75 0 001.5 0h-1.5zm1.28-3.61a.75.75 0 00-1.06-1.061l1.06 1.06zm-8.06 5.939a.75.75 0 101.06 1.06l-1.06-1.06zm.53-7.22h-3v1.5h3v-1.5zm-3 0A4.75 4.75 0 004.75 9.5h1.5A3.25 3.25 0 019.5 6.25v-1.5zM4.75 9.5v6h1.5v-6h-1.5zm0 6a4.75 4.75 0 004.75 4.75v-1.5a3.25 3.25 0 01-3.25-3.25h-1.5zm4.75 4.75h6v-1.5h-6v1.5zm6 0a4.75 4.75 0 004.75-4.75h-1.5a3.25 3.25 0 01-3.25 3.25v1.5zm4.75-4.75v-3h-1.5v3h1.5zM19.5 4.75h-4.088v1.5H19.5v-1.5zm-.75.75v4.141h1.5V5.5h-1.5zm.22-.53l-7 7 1.06 1.06 7-7-1.06-1.06z"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default Button;
