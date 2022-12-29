'use client'

import { MenuSvg } from "./icons/icons"
import { NavLink } from "./navlink"
import { Logo } from "./logo"
import {useContext, useEffect} from "react"
import {MenuContext} from "./menucontext"
import { MouseContext } from "./context/mousecontext"
import { MenuContextProvider } from "./menucontext"
import { tl } from "../utils"
import { usePathname } from "next/navigation"



export const MenuNav = () => {

    const context = useContext(MenuContext)
    const mouseContext = useContext(MouseContext)

    const { open, setOpen, theme } = context

    const { cursorChangeHandler  } =  mouseContext


    const pathname = usePathname()

    const isLight = theme === "light" ? "light" : ""
     

    useEffect(() => {
        tl.to(".menucontainer", { opacity: 1, y: 0 })
        tl.to(".btn_container", { opacity: 1, y: 0 })
    },[])


    const darkTheme = theme === 'dark' ? true : false

    const linksArray = [
        { name: "Home", active: pathname === "/", to: "/" },
        { name: "About", active: pathname === "/about", to: "/about" },
        { name: "Dribble", active: pathname === "#dribble", to: "https://dribbble.com/mrlong007" },
        { name: "Behance", active: pathname === "#behance", to: "https://www.behance.net/mrlong007" },
    ]

    return(
        <MenuContextProvider>
            <nav className="py-[22px] flex justify-between items-center">
                <div className="menucontainer opacity-0 translate-y-4 gap-[56px] flex grow md:grow-0 justify-between">
                    <span className="rounded-default border-2 w-[56px] md:order-first order-2 h-[56px] flex items-center justify-center dark:border-[#F7FAFC] border-mrlongblue dark:border-opacity-10 border-opacity-10" 
                    onClick={() => setOpen(!open)}
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                        >
                        <MenuSvg isDark={darkTheme} />
                    </span>
                    <Logo />
                </div>
                <div className="hidden lg:flex gap-[52px] items-center">
                    <ul className="flex gap-[52px] items-center">
                        {linksArray.map(link => {
                            return (
                                <li>
                                    <NavLink open={open} setOpen={setOpen} text={link.name} to={link.to} active={link.active} darkTheme={darkTheme} />
                                </li>
                            )
                        })}
                    </ul>
                    <span className="btn_container opacity-0 translate-y-4 inline-block">
                        <a href="../assets/OdebiyiRidwanResume.pdf" target="__blank"><button className={`font-[700] py-[15px] ${isLight} px-[36px] border-opacity-10 font-outfit`}>View resume</button></a>
                    </span>
                </div>
            </nav>
        </MenuContextProvider>
        
    )

}


