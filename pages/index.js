import { useEffect, useState } from "react"
import { FiArrowRight } from "react-icons/fi";
import { ActiveLink } from "../app/components/Links"
import { ImgSlider, NavItems } from "../app/ultils"

// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


export default function Home() {
  const [toggle, setToggle] = useState(false) 
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);


  return (
    <>
    <div className="blacky"> 
      {domLoaded && (
        <Swiper
        initialSlide={3}
        centeredSlides = {true} 
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
      }}
        loop = {true}
        breakpoints={{
          576: {
            // width: 576,
            // initialSlide: 0,
            slidesPerView: 2,
          },
        //   768: {
        //     // width: 768,
        //     slidesPerView: 3,
        //   },
          1000: {
            // width: 768,
            slidesPerView: 3,
          },
          1080: {
            // width: 768,
            slidesPerView: 4,
          },
        }}
        // onSwiper={setSwiperRef}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper flex flex-col items-center"
      >
          {ImgSlider.map((slide, index)=>{
            return (
              <SwiperSlide key={index}>
                <img src={slide.src} className=""/>
              </SwiperSlide>
            )
          })}
      </Swiper>
      )}
    </div>
    <section className="relative">
    <div className="px-10 lg:px-10 xl:px-0 xl:mt-32 flex xl:gap-x-20 justify-around lg:justify-center flex-wrap mb-44 sm:mb-72 xl:mb-52 -mt-28 xl:-m-0"> 
      <div className="w-4/6 sm:w-2/6 xl:w-56 mt-28 sm:mt-48 xl:mt-0 lg:w-72 flex flex-col items-center relative">
        <div className="text-stroke text-center">02</div>
        <div className="text-gray-100 flex flex-col items-center absolute top-16 lg:top-20">
          <span className="font-thin text-base lg:text-3xl">01</span>
          <h3 className="font-normal text-xl lg:text-4xl uppercase lg:mt-2">Focus</h3>
          <p className="font-thin text-base lg:text-xl text-center lg:mt-3 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className="w-4/6 sm:w-2/6 xl:w-56 mt-28 sm:mt-48 xl:mt-0 lg:w-72 flex flex-col items-center relative">
        <div className="text-stroke text-center">02</div>
        <div className="text-gray-100 flex flex-col items-center absolute top-16 lg:top-20">
          <span className="font-thin text-base lg:text-3xl">01</span>
          <h3 className="font-normal text-xl lg:text-4xl uppercase lg:mt-2">Focus</h3>
          <p className="font-thin text-base lg:text-xl text-center lg:mt-3 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className="w-4/6 sm:w-2/6 xl:w-56 mt-28 sm:mt-48 xl:mt-0 lg:w-72 flex flex-col items-center relative">
        <div className="text-stroke text-center">02</div>
        <div className="text-gray-100 flex flex-col items-center absolute top-16 lg:top-20">
          <span className="font-thin text-base lg:text-3xl">01</span>
          <h3 className="font-normal text-xl lg:text-4xl uppercase lg:mt-2">Focus</h3>
          <p className="font-thin text-base lg:text-xl text-center lg:mt-3 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
      <div className="w-4/6 sm:w-2/6 xl:w-56 mt-28 sm:mt-48 xl:mt-0 lg:w-72 flex flex-col items-center relative">
        <div className="text-stroke text-center">02</div>
        <div className="text-gray-100 flex flex-col items-center absolute top-16 lg:top-20">
          <span className="font-thin text-base lg:text-3xl">01</span>
          <h3 className="font-normal text-xl lg:text-4xl uppercase lg:mt-2">Focus</h3>
          <p className="font-thin text-base lg:text-xl text-center lg:mt-3 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
    <div className="flex items-center mb-20 xl:mb-64 xl:mt-72 flex-wrap justify-center lg:gap-x-64">
      <div className="flex flex-col items-start w-full xl:w-max sm:mx-10 xl:mx-0 xl:items-center relative mb-52 xl:mb-0">
          <div className="text-stroke text-xl text-start uppercase">About</div>
          <div className="text-gray-100 flex flex-col items-start absolute top-10 xl:top-14 left-4 lg:left-12">
            <span className="font-thin text-3xl mb-8">portfolio</span>
            <h3 className="font-normal text-4xl lg:text-5xl uppercase mt-2">colors and vibrant work</h3>
            <a className="font-thin text-base lg:text-xl text-center flex mt-6 lg:mt-8 text-gray-300 items-center uppercase">A propos de moi <FiArrowRight className="ml-4"/></a>
          </div>
      </div>
        <div className="p-10 sm:p-20 lg:p-10 xl:p-0">
           <img src="/IMG_9345.JPG" className="img-about-home"/>
        </div>
      </div>
    <div className="px-10 flex flex-col items-center sm:items-start">
    <div className="flex flex-col items-center xl:items-start relative w-max">
          <div className="text-stroke text-start uppercase">Contact</div>
          <div className="text-gray-100 flex flex-col w-full items-start absolute top-7 xl:top-5">
            <h3 className="font-normal text-xl sm:text-3xl w-full uppercase mt-5">Suivez moi</h3>
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
    </div>
    </section>
    
    </>
  )
}
