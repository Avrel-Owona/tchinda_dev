import Slider from "../components/Slider";
import { FiAlignLeft, FiArrowLeft, FiArrowRight, FiPlay } from "react-icons/fi";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="h-screen w-full -mt-28 overflow-hidden relative flex justify-center items-center bgg-home">
    <div className="flex flex-col z-30 justify-center gap-x-10 items-start pl-72 xl:pl-20">
                <img src="/logo-white.png" className="w-2/6"/>
                <div className="w-2/6 xl:w-3/6 mt-10 flex flex-col">
                <p className="text-white font-light text-base">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus.</p>
                <a className="font-thin text-base text-center flex mt-6 lg:mt-14 text-gray-200 items-center border  w-max py-5 px-14">A propos de moi <FiArrowRight className="ml-4"/></a>
                </div>
                <div className="flex w-2/6 gap-x-5 justify-center text-2xl mt-16">
              </div>
            </div>
    </div>
    {/* <Slider/> */}
    <section className="relative">
    <div className="flex mb-20 xl:mb-64 xl:mt-72 flex-wrap justify-center lg:gap-x-64">
      <div className="flex flex-col xl:mt-20 items-start w-full xl:w-1/3 border sm:mx-10 xl:mx-0 xl:items-center relative mb-52 xl:mb-0">
          <div className="text-stroke text-xl text-start uppercase">About</div>
          <div className="text-gray-100 flex flex-col items-start absolute top-9 left-4 lg:left-12">
            <span className="font-thin text-3xl mb-8">portfolio</span>
            <h3 className="font-normal text-3xl lg:text-3xl uppercase mt-2">colors and vibrant work</h3>
            <a className="font-thin text-base text-center flex mt-6 lg:mt-8 text-gray-300 items-center uppercase">Voir la vidéo <FiArrowRight className="ml-4"/></a>
          </div>
      </div>
      <a href={'/'} className="w-2/6 border relative flex items-center justify-center">
        <img src="/main-port-2.jpeg" className=" grayscale"/>
        <FiPlay className="text-gray-100 text-7xl absolute"/>
      </a>
      </div>
      <div className="flex mb-20 xl:mb-64 xl:mt-72 flex-wrap justify-center lg:gap-x-64">
      <a href={'/'} className="w-2/6 border relative flex items-center justify-center">
        <img src="/main-port-2.jpeg" className=" grayscale"/>
        <FiPlay className="text-gray-100 text-7xl absolute"/>
      </a>
      <div className="flex flex-col xl:mt-20 items-start w-full xl:w-max sm:mx-10 xl:mx-0 xl:items-center relative mb-52 xl:mb-0">
          <div className="text-stroke text-xl text-start uppercase">About</div>
          <div className="text-gray-100 flex flex-col items-start absolute top-9 xl:top-14 left-4 lg:left-12">
            <span className="font-thin text-3xl mb-8">portfolio</span>
            <h3 className="font-normal text-3xl lg:text-5xl uppercase mt-2">colors and vibrant work</h3>
            <a className="font-thin text-base lg:text-xl text-center flex mt-6 lg:mt-8 text-gray-300 items-center uppercase"><FiArrowLeft className="mr-4"/> Voir la vidéo</a>
          </div>
      </div>
      </div>
      <div className="flex mb-20 xl:mb-64 xl:mt-72 flex-wrap justify-center lg:gap-x-64">
      <div className="flex flex-col xl:mt-20 items-start w-full xl:w-max sm:mx-10 xl:mx-0 xl:items-center relative mb-52 xl:mb-0">
          <div className="text-stroke text-xl text-start uppercase">About</div>
          <div className="text-gray-100 flex flex-col items-start absolute top-9 xl:top-14 left-4 lg:left-12">
            <span className="font-thin text-3xl mb-8">portfolio</span>
            <h3 className="font-normal text-3xl lg:text-5xl uppercase mt-2">colors and vibrant work</h3>
            <a className="font-thin text-base lg:text-xl text-center flex mt-6 lg:mt-8 text-gray-300 items-center uppercase">Voir la vidéo <FiArrowRight className="ml-4"/></a>
          </div>
      </div>
      <a href={'/'} className="w-2/6 border relative flex items-center justify-center">
        <img src="/main-port-2.jpeg" className=" grayscale"/>
        <FiPlay className="text-gray-100 text-7xl absolute"/>
      </a>
      </div>
    {/* <div className="px-5 flex flex-col items-start">
    <div className="flex flex-col items-center xl:items-start relative w-max">
    <div className="text-stroke text-xl text-start uppercase">Contact</div>
          <div className="text-gray-100 flex flex-col items-start absolute top-9 xl:top-14 left-4 lg:left-12">
            <span className="font-thin text-3xl mb-8">suivez-moi</span>
          </div>
      </div>
      <div className="flex flex-wrap mt-20 xl:mt-32 xl:gap-x-64"> 
      <div className="text-gray-100 flex flex-col items-start">
                <h3 className="font-normal text-4xl xl:text-5xl uppercase">Réseaux sociaux</h3>
                <div className="flex flex-col mt-8 text-base text-gray-300 lg:text-xl font-thin lg:font-extraligh">
                    <a>YouTube</a>
                    <a>Instagram</a>
                    <a>Tiktok</a>
                    <a>Facebook</a>
                </div>
          </div>
          <div className="text-gray-100 sm:ml-32 xl:ml-0 flex flex-col items-start mt-14 sm:mt-0">
                <h3 className="font-normal text-4xl xl:text-5xl uppercase">Email & phone</h3>
                <div className="flex flex-col mt-8 text-base text-gray-300 lg:text-xl font-thin lg:font-extralight">
                    <a>contact@tchinda.com</a>
                    <a>632-454-545</a>
                </div>
          </div>
      </div>
    </div> */}
    </section>
    </>
  )
}
