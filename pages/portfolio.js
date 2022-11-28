import {
	FiFacebook,
	FiInstagram,
	FiShoppingBag,
	FiTwitter,
	FiYoutube,
} from "react-icons/fi"

const Portfolio = () => {
	return (
		<div className="w-full items-center flex flex-col pb-20 pt-10">
			<div className="flex flex-wrap-reverse z-30 justify-center gap-y-20">
				<div className="text-white mx-5 lg:mx-10 font-thin text-base w-full sm:w-72 lg:w-2/6">
					<div className="text-gray-50 flex flex-col items-start">
						<h3 className="font-normal text-3xl hidden sm:flex lg:text-5xl capitalize mt-2 mb-12">
							Patrick Tchinda
						</h3>
						<p>
							Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
							Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
							ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
							tempus, tellus eget condimentum rhoncus, sem quam semper libero,
							sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
							vel, luctus.
						</p>
						<p className="mt-7">
							Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
							Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
							ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
							tempus, tellus eget condimentum rhoncus, sem quam semper libero,
							sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
							vel, luctus.
						</p>
						<p className="mt-7">
							Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
							Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
							ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
							tempus, tellus eget condimentum rhoncus, sem quam semper libero,
							sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
							vel, luctus.
						</p>
						<p className="mt-7">
							Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
							Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
							ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
							tempus, tellus eget condimentum rhoncus, sem quam semper libero,
							sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
							vel, luctus.
						</p>
						<p className="mt-7">
							Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
							Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
							ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
							tempus, tellus eget condimentum rhoncus, sem quam semper libero,
							sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
							vel, luctus.
						</p>
						<p className="mt-7">
							Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
							Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
							Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
							ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
							tempus, tellus eget condimentum rhoncus, sem quam semper libero,
							sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
							vel, luctus.
						</p>
						<div className="flex w-full gap-x-10 text-gray-100 justify-start text-xl mt-16">
							<a href="" className="cursor-pointer" target="_blank">
								<FiYoutube />
							</a>
							<a href="" className="cursor-pointer" target="_blank">
								<FiInstagram />
							</a>
							<a href="" className="cursor-pointer" target="_blank">
								<FiTwitter />
							</a>
							<a href="" className="cursor-pointer" target="_blank">
								<FiFacebook />
							</a>
						</div>
					</div>
				</div>
				<div className="text-white relative mx-5 lg:mx-10 font-thin text-base sm:w-72 lg:w-2/6">
					<h3 className="font-normal sm:hidden text-4xl capitalize mt-2 mb-8">
						Patrick Tchinda
					</h3>
					<div className="flex w-full sm:hidden gap-x-10 text-gray-100 justify-start text-xl mb-16">
						<a href="" className="cursor-pointer" target="_blank">
							<FiYoutube />
						</a>
						<a href="" className="cursor-pointer" target="_blank">
							<FiInstagram />
						</a>
						<a href="" className="cursor-pointer" target="_blank">
							<FiTwitter />
						</a>
						<a href="" className="cursor-pointer" target="_blank">
							<FiFacebook />
						</a>
					</div>
					<img src="/IMG_9345.JPG" className="w-full sticky top-0" />
				</div>
			</div>
			{/* <img src="/IMG_9347.JPG" className="absolute -z-50 grayscale w-full top-0 bg-cover" /> */}
			<div className="flex flex-col items-start w-full sm:w-max sm:mx-10 xl:mx-0 sm:items-center relative mb-52 sm:mb-0 mt-40">
				<div className="text-stroke about-stroke text-xl text-start uppercase">
					Instagram
				</div>
				<div className="text-gray-100 flex flex-col items-start absolute top-10 sm:top-14 left-4 sm:left-12">
					<h3 className="font-normal text-4xl sm:text-5xl uppercase mt-2">
						feed
					</h3>
				</div>
			</div>
			<div className="columns-1 w-5/6 sm:columns-2 lg:columns-4 z-50 mt-20 sm:mt-52">
				<div className="cursor-pointer relative mb-4 overflow-hidden post">
					<img className="w-full pics" src="/main-port-2.jpeg" alt="" />
					<div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
				</div>
				<div className="cursor-pointer relative mb-4 overflow-hidden post">
					<img className="w-full pics" src="/IMG_9348.JPG" alt="" />
					<div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
				</div>
				<div className="cursor-pointer relative mb-4 overflow-hidden post">
					<img className="w-full pics" src="/IMG_9348.JPG" alt="" />
					<div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
				</div>
				<div className="cursor-pointer relative mb-4 overflow-hidden post">
					<img className="w-full pics" src="/main-port-2.jpeg" alt="" />
					<div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
				</div>
				<div className="cursor-pointer relative mb-4 overflow-hidden post">
					<img className="w-full pics" src="/main-port-2.jpeg" alt="" />
					<div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
				</div>
				<div className="cursor-pointer relative mb-4 overflow-hidden post">
					<img className="w-full pics" src="/IMG_9348.JPG" alt="" />
					<div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
				</div>
				<div className="cursor-pointer relative mb-4 overflow-hidden post">
					<img className="w-full pics" src="/IMG_9348.JPG" alt="" />
					<div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
				</div>
				<div className="cursor-pointer relative mb-4 overflow-hidden post">
					<img className="w-full pics" src="/main-port-2.jpeg" alt="" />
					<div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
				</div>
				<div className="cursor-pointer relative mb-4 overflow-hidden post">
					<img className="w-full pics" src="/main-port-2.jpeg" alt="" />
					<div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
				</div>
				<div className="cursor-pointer relative mb-4 overflow-hidden post">
					<img className="w-full pics" src="/IMG_9348.JPG" alt="" />
					<div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
				</div>
				<div className="cursor-pointer relative mb-4 overflow-hidden post">
					<img className="w-full pics" src="/main-port-2.jpeg" alt="" />
					<div className="infos-post absolute bottom-0 w-full text-gray-100 blacky left-0 h-28"></div>
				</div>
			</div>
		</div>
	)
}
export default Portfolio
