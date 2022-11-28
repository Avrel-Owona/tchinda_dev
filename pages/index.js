import Slider from "../components/Slider"
import { FiAlignLeft, FiArrowLeft, FiArrowRight, FiPlay } from "react-icons/fi"
import Link from "next/link"

export default function Home() {
	return (
		<>
			<div className="h-screen w-full -mt-28 overflow-hidden relative flex items-center bgg-home">
				<div
					className=" h-screen w-full absolute"
					style={{ background: "#0000008c" }}
				></div>
				<div className="flex flex-col z-30 justify-center gap-x-10 px-10 sm:px-0 items-center xl:items-start w-full xl:pl-20">
					<img src="/logo-white.png" className="mt-20" />
					<div className="w-full items-center xl:items-start xl:w-3/6 mt-8 sm:mt-10 flex flex-col xl:ml-10">
						<p className="text-gray-300 text-center xl:text-start w-full font-light text-base sm:w-3/6 xl:w-96">
							Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
							Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
							ullamcorper ultricies nisi.
						</p>
						<a className="font-light justify-center sm:justify-start text-base text-center uppercase cursor-pointer flex mt-10 lg:mt-12 text-gray-50 items-center">
							About me <FiArrowRight className="ml-4" />
						</a> 
					</div>
					<div className="flex w-2/6 gap-x-5 justify-center text-2xl mt-16"></div>
				</div>
			</div>
			<section className="relative xl:py-32 pt-20">
				<div className="flex items-start mb-20 flex-wrap justify-center">
					<div className="flex flex-col xl:mt-20 items-start w-full xl:w-1/3 sm:mx-5 xl:items-center relative">
						<div className="text-stroke text-start uppercase">About</div>
						<div className="text-gray-100 flex flex-col items-start absolute top-9 left-4 lg:left-12">
							<span className="font-thin text-xl sm:text-3xl mb-8">
								portfolio
							</span>
							<h3 className="font-normal text-3xl lg:text-5xl uppercase mt-2">
								colors and vibrant work
							</h3>
							<a className="font-thin text-base text-center flex mt-6 lg:mt-8 text-gray-300 items-center uppercase">
								Voir la vidéo <FiArrowRight className="ml-4" />
							</a>
						</div>
					</div>
					<a
						href={"/"}
						className="h-96 sm:mx-5 relative flex mt-52 xl:mt-10 items-center justify-center overflow-hidden"
						style={{ width: "37rem" }}
					>
						<img src="/main-port-2.jpeg" className=" grayscale bg-cover" />
						<FiPlay className="text-gray-100 text-5xl absolute" />
					</a>
				</div>
			</section>
		</>
	)
}
