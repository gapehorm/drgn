import Image from 'next/image'
import Button from './Button'
import Tabs from './Tabs'

export default function Home() {
  return (
    <>
      <button className='absolute scale-75 md:scale-100 md:top-5 md:right-10 md:left-[80%] right-[20%] left-[20%] top-5  border-[#BA4B00] text-[#BA4B00] border-[3px] px-4 py-2 rounded-full text-xl'>Connect Wallet</button>
      <Tabs />
    </>
  )
}
