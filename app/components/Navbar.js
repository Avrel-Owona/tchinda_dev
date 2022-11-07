import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NavItems } from "../ultils";
import { ActiveLink } from "./Links";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    useEffect(()=>{
        const set = () => {
            if(window.scrollY >= '100') {
                setToggle(false)
            }
        }
        window.addEventListener('scroll', set)
    },[])
    const Router = useRouter()
    return (
        <div className={`${Router.asPath === '/' ? 'blacky' : null} relative flex items-center justify-between z-50 px-5 lg:px-10 py-6`}>
            <Link href='/'><img src="/logo-white.png" className="w-28"/></Link>
            <div className="hidden lg:block">
                <ul className="text-white flex gap-x-16 text-base" style={{letterSpacing: "2px"}}>
                    {NavItems.map((item, index)=>{
                        return <li key={index} className="li-nav h-6 relative">
                        <ActiveLink href={item.path} activeClassName='item-nav-active'>
                             <Link className="item-nav" href={item.path}>{item.title}</Link>
                        </ActiveLink>
                </li>
                    })}
                </ul>
            </div>
            <div className="relative">
                <div className="w-20 lg:w-32 h-16 -top-9 absolute menu-button right-0 flex flex-col justify-center items-center" style={{zIndex : '1111'}} onClick={()=>setToggle(!toggle)}>
                  <span className={`w-6/12 z-40 h-1 bg-white text-6xl text-white ${toggle ? 'toggle-span-1' : 'translate-x-2 span-1'}`}></span>
                  <span className={`w-6/12 mt-1.5 h-1 bg-white text-6xl text-white ${toggle ? 'toggle-span-2' : '-translate-x-2 span-2'}`}></span>
                </div>
            </div>
            <div className={`h-screen overflow-x-hidden fixed w-full lg:w-2/6 blacky flex items-center justify-center transi top-0 ${toggle ? 'right-0' : '-right-full'}`} style={{zIndex : '111'}}>
            <div className="lg:flex w-full flex-col items-center hidden">
              <img src="/logo-white.png" className="w-4/6"/> 
              <p className="text-base text-gray-100 w-3/6 mt-10 text-center font-thin">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased.</p>
              <div className="flex w-full gap-x-5 justify-center text-2xl mt-16">
                <a href="" target='_blank' className="social-stroke">Yt.</a>
                <a href="" target='_blank' className="social-stroke">Tk.</a>
                <a href="" target='_blank' className="social-stroke">Ig.</a>
                <a href="" target='_blank' className="social-stroke">Tw.</a>
                <a href="" target='_blank' className="social-stroke ">Fb.</a>
              </div>
            </div>
            <div className="lg:hidden flex">
                <ul className="text-white flex gap-y-16 flex-col text-xl" style={{letterSpacing: "2px"}}>
                    {NavItems.map((item, index)=>{
                        return <li key={index} className="li-nav text-center h-6 relative">
                        <ActiveLink href={item.path} activeClassName='item-nav-active'>
                             <Link className="item-nav" href={item.path}>{item.title}</Link>
                         </ActiveLink>
                    </li>
                    })}
                </ul>
            </div>
            </div>
    </div>
    )
}
export default Navbar;