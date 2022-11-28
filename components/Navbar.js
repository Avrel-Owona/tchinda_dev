import Link from "next/link"
import { useEffect, useState } from "react"
import {
	FiFacebook,
	FiInstagram,
	FiShoppingBag,
	FiTwitter,
	FiYoutube,
} from "react-icons/fi"
import { NavItems } from "../app/utils"

const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	useEffect(() => {
		const set = () => {
			if (window.scrollY >= "100") {
				setToggle(false)
			}
		}
		window.addEventListener("scroll", set)
	}, [])
	return (
		<div className="relative flex items-center justify-between z-50 px-5 lg:px-10 py-10">
			<Link href="/">
				<FiShoppingBag className="text-gray-100 text-3xl lg:text-2xl" />
			</Link>
			{/* <nav>
                <ol className="gap-x-16 text-base text-gray-100 hidden lg:flex">
                    {NavItems.map((item, index)=>{
                        return (
                            <li key={index} className='relative'>
                            <a href={item.path} className='item-nav-active'>
                                 {item.title}
                            </a>
                        </li>
                        )
                    })}
                </ol>
            </nav> */}
			<div className="relative">
				<div
					className="w-20 lg:w-32 h-16 -top-9 absolute menu-button right-0 flex flex-col justify-center items-center"
					style={{ zIndex: "1111" }}
					onClick={() => setToggle(!toggle)}
				>
					<span
						className={`w-16 lg:w-5/12 z-40 h-1 bg-white text-6xl text-white ${
							toggle
								? "toggle-span-1 left-auto absolute"
								: "translate-x-2 span-1"
						}`}
					></span>
					<span
						className={`w-16 lg:w-5/12 mt-1.5 h-1 bg-white text-6xl text-white ${
							toggle
								? "toggle-span-2 left-auto absolute"
								: "-translate-x-2 span-2"
						}`}
					></span>
				</div>
			</div>
			<div
				className={`h-screen blacky overflow-x-hidden fixed w-full lg:w-2/6 blacky flex items-center justify-center transi top-0 ${
					toggle ? "right-0" : "-right-full"
				}`}
				style={{ zIndex: "111" }}
			>
				<div className="flex w-full flex-col items-center">
					<nav>
						<ol className="gap-y-16 text-2xl text-gray-100 flex flex-col">
							{NavItems.map((item, index) => {
								return (
									<li key={index} className="relative text-base text-center">
										<a href={item.path} className="item-nav-active">
											{item.title}
										</a>
									</li>
								)
							})}
						</ol>
					</nav>
					<div className="flex w-full gap-x-10 absolute bottom-20 text-gray-100 justify-center text-xl mt-16">
						<a href="" target="_blank">
							<FiYoutube />
						</a>
						<a href="" target="_blank">
							<FiInstagram />
						</a>
						<a href="" target="_blank">
							<FiTwitter />
						</a>
						<a href="" target="_blank">
							<FiFacebook />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Navbar
