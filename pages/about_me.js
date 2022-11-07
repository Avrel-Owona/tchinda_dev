import { FiFacebook } from "react-icons/fi";

const AboutMe = () => {
    return(
        <div className="w-full items-center bgg flex flex-col pb-20">
            <img src="/logo-white.png" className="mb-20 z-50 mt-52 object-cover"/>
            <div className="flex flex-wrap z-30 justify-center gap-x-10 gap-y-20 lg:px-20">
                <p className="text-white font-thin text-base w-2/6">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus.</p>
                <p className="text-white font-thin text-base w-2/6">Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus.</p>
                <div className="flex w-2/6 gap-x-5 justify-center text-2xl mt-16">
                <a href="" target='_blank' className="social-stroke">Yt.</a>
                <a href="" target='_blank' className="social-stroke">Tk.</a>
                <a href="" target='_blank' className="social-stroke">Ig.</a>
                <a href="" target='_blank' className="social-stroke">Tw.</a>
                <a href="" target='_blank' className="social-stroke">Fb.</a>
              </div>
            </div>
            {/* <img src="/IMG_9347.JPG" className="absolute -z-50 grayscale w-full top-0 bg-cover" /> */}
            <div className="flex flex-col items-start w-full xl:w-max sm:mx-10 xl:mx-0 xl:items-center relative mb-52 xl:mb-0 mt-40">
                <div className="text-stroke about-stroke text-xl text-start uppercase">Instagram</div>
                <div className="text-gray-100 flex flex-col items-start absolute top-10 xl:top-14 left-4 lg:left-12">
                    <h3 className="font-normal text-4xl lg:text-5xl uppercase mt-2">feed</h3>
                </div>
             </div>
            <div className='columns-1 w-5/6 sm:columns-2 lg:columns-4 z-50 mt-20'>
                            <div className='cursor-pointer relative mb-4 overflow-hidden post'>
                                <img className='w-full pics' src='/main-port-2.jpeg' alt=""/>
                                <div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
                            </div>
                            <div className='cursor-pointer relative mb-4 overflow-hidden post'>
                                <img className='w-full pics' src='/IMG_9348.JPG' alt=""/>
                                <div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
                            </div>
                            <div className='cursor-pointer relative mb-4 overflow-hidden post'>
                                <img className='w-full pics' src='/IMG_9348.JPG' alt=""/>
                                <div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
                            </div>
                            <div className='cursor-pointer relative mb-4 overflow-hidden post'>
                                <img className='w-full pics' src='/main-port-2.jpeg' alt=""/>
                                <div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
                            </div>
                            <div className='cursor-pointer relative mb-4 overflow-hidden post'>
                                <img className='w-full pics' src='/main-port-2.jpeg' alt=""/>
                                <div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
                            </div>
                            <div className='cursor-pointer relative mb-4 overflow-hidden post'>
                                <img className='w-full pics' src='/IMG_9348.JPG' alt=""/>
                                <div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
                            </div>
                            <div className='cursor-pointer relative mb-4 overflow-hidden post'>
                                <img className='w-full pics' src='/IMG_9348.JPG' alt=""/>
                                <div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
                            </div>
                            <div className='cursor-pointer relative mb-4 overflow-hidden post'>
                                <img className='w-full pics' src='/main-port-2.jpeg' alt=""/>
                                <div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
                            </div>
                            <div className='cursor-pointer relative mb-4 overflow-hidden post'>
                                <img className='w-full pics' src='/main-port-2.jpeg' alt=""/>
                                <div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
                            </div>
                            <div className='cursor-pointer relative mb-4 overflow-hidden post'>
                                <img className='w-full pics' src='/IMG_9348.JPG' alt=""/>
                                <div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
                            </div>
                            <div className='cursor-pointer relative mb-4 overflow-hidden post'>
                                <img className='w-full pics' src='/main-port-2.jpeg' alt=""/>
                                <div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
                            </div>
                </div>
        </div>
    )
}
export default AboutMe;