import Link from "next/link";
import { FiPlay } from "react-icons/fi";

const Videos = () => {
    return (
        <div className="min-h-screen">
            <div className="relative px-5 lg:px-10 mt-20">
            <div className="text-stroke about-stroke text-xl text-start uppercase">Videos</div>
                <div className="text-gray-100 flex flex-col items-start absolute top-10 xl:top-7 left-4 xl:left-20 lg:left-12">
                    <h3 className="font-normal text-4xl lg:text-5xl uppercase mt-2">post</h3>
                </div>
            </div>
            <div className='columns-2 sm:columns-3 lg:columns-4 xl:columns-5 z-50 mt-20'>
                <div href={''} className="relative overflow-hidden cursor-pointer mb-4  flex items-center justify-center post">
                  <img src="/main-port-2.jpeg" className="w-full h-full pics bg-cover" />
                  <div className="h-full w-full absolute flex justify-center items-center">
                    <FiPlay className="text-7xl text-white z-50"/>
                  </div>
                </div>
                <div href={''} className="relative overflow-hidden cursor-pointer mb-4  flex items-center justify-center post">
                  <img src="/IMG_9346.JPG" className="w-full h-full pics bg-cover" />
                  <div className="h-full w-full absolute flex justify-center items-center">
                    <FiPlay className="text-7xl text-white z-50"/>
                  </div>
                </div>
                <div href={''} className="relative overflow-hidden cursor-pointer mb-4  flex items-center justify-center post">
                  <img src="/main-port-2.jpeg" className="w-full h-full pics bg-cover" />
                  <div className="h-full w-full absolute flex justify-center items-center">
                    <FiPlay className="text-7xl text-white z-50"/>
                  </div>
                </div>
                <div href={''} className="relative overflow-hidden cursor-pointer mb-4  flex items-center justify-center post">
                  <img src="/main-port-2.jpeg" className="w-full h-full pics bg-cover" />
                  <div className="h-full w-full absolute flex justify-center items-center">
                    <FiPlay className="text-7xl text-white z-50"/>
                  </div>
                </div>
                <div href={''} className="relative overflow-hidden cursor-pointer mb-4  flex items-center justify-center post">
                  <img src="/IMG_9346.JPG" className="w-full h-full pics bg-cover" />
                  <div className="h-full w-full absolute flex justify-center items-center">
                    <FiPlay className="text-7xl text-white z-50"/>
                  </div>
                </div>
                <div href={''} className="relative overflow-hidden cursor-pointer mb-4  flex items-center justify-center post">
                  <img src="/IMG_9346.JPG" className="w-full h-full pics bg-cover" />
                  <div className="h-full w-full absolute flex justify-center items-center">
                    <FiPlay className="text-7xl text-white z-50"/>
                  </div>
                </div>
                <div href={''} className="relative overflow-hidden cursor-pointer mb-4  flex items-center justify-center post">
                  <img src="/main-port-2.jpeg" className="w-full h-full pics bg-cover" />
                  <div className="h-full w-full absolute flex justify-center items-center">
                    <FiPlay className="text-7xl text-white z-50"/>
                  </div>
                </div>
                <div href={''} className="relative overflow-hidden cursor-pointer mb-4  flex items-center justify-center post">
                  <img src="/main-port-2.jpeg" className="w-full h-full pics bg-cover" />
                  <div className="h-full w-full absolute flex justify-center items-center">
                    <FiPlay className="text-7xl text-white z-50"/>
                  </div>
                </div>
                
                
            </div>
        </div>
    )
}
export default Videos;