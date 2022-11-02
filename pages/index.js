import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
import {RiWhatsappFill} from 'react-icons/ri'

export default function Home() {
  return (
    <div className="w-screen flex-col bg-black h-screen overflow-hidden flex items-center justify-center">
      {/* <img src="/IMG_9349.JPG" className="w-full bg-cover"/> */}
      <h1 className="font-bold text-8xl uppercase text-blue-500">Coming Soon</h1>
      <h3 className="uppercase mt-10 text-gray-200">under construction new website</h3>
      <div className="text-white mt-10 text-3xl flex items-center focus-visible:outline-none">
              <a href={'#'}><FaFacebook className={'hover:text-gray-600 cursor-pointer'}/></a>
              <a href={'#'}><FaTwitter className={'ml-7 hover:text-gray-600 cursor-pointer'}/></a>
              <a href={'#'}><FaYoutube className={'ml-5 hover:text-gray-600 cursor-pointer'}/></a>
              <a href={'#'}><RiWhatsappFill className={'ml-5 hover:text-gray-600 cursor-pointer'}/></a>
          </div>
    </div>
  )
}
