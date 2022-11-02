import Head from "next/head";
import {FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube} from "react-icons/fa";
import {RiWhatsappFill} from 'react-icons/ri'

export default function Home() {
  return (
    <>
    <Head>
      <title>Tchinda | Videaste</title>
    </Head>
      <div className="w-screen flex-col h-screen relative overflow-hidden flex items-center justify-center">
      <img src="/jeremy-perkins-FsK54FVNRfM-unsplash.jpg" className="w-full h-full object-cover"/>
      <div className="absolute flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl sm:text-5xl lg:text-8xl uppercase text-gray-100">Coming Soon</h1>
      {/* <h3 className="uppercase mt-10 text-gray-200">under construction new website</h3> */}
      <div className="text-white mt-10 lg:text-3xl flex items-center focus-visible:outline-none">
              <a target="_blank" href={'https://www.youtube.com/c/tchinda'}><FaYoutube className={'ml-5 hover:text-gray-600 cursor-pointer'}/></a>
              <a target="_blank" href={'https://www.instagram.com/tchindax'}><FaInstagram className={'ml-5 hover:text-gray-600 cursor-pointer'}/></a>
              <a target="_blank" href={'https://www.facebook.com/tchindax'}><FaFacebook className={'hover:text-gray-600 ml-5 cursor-pointer'}/></a>
              <a target="_blank" href={'https://www.tiktok.com/@tchinda_'}><FaTiktok className={'hover:text-gray-600 ml-5 cursor-pointer'}/></a>
              <a target="_blank" href={'https://www.twitter.com/tchinda_'}><FaTwitter className={'ml-7 hover:text-gray-600 cursor-pointer'}/></a>
          </div>
      </div>
    </div>
    </>
  )
}
