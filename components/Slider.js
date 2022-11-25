// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import { ImgSlider } from "../app/utils";
import { useEffect, useState } from "react";


const Slider = () => {
    const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

    return (
        <>
            {domLoaded && <Swiper
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
            </Swiper>}
        </>
    )
}
export default Slider;