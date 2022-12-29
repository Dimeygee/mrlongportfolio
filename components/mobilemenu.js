'use client'

import { Logo } from "../components/logo" 
import {NavLink} from "./navlink"
import { Button } from "./button"
import { useContext } from "react"
import { MenuContext } from "./menucontext"
import {motion} from "framer-motion"
import { usePathname } from "next/navigation"
import { Close } from "./icons/icons"


export const MobileMenu = () => {

    const context = useContext(MenuContext)

    const { open, setOpen, theme } = context

    const isDark = theme === "dark" ? true : false

    const pathname = usePathname()

    const linksArray = [
        { name: "Home", active: pathname === "/", to: "/" },
        { name: "About", active: pathname === "/about", to: "/about" },
        { name: "Dribble", active: pathname === "#dribble", to: "#dribble" },
        { name: "Behance", active: pathname === "#behance", to: "#behance" },
    ]

    
    return(
        <motion.div
        initial={{ y: "-100%" }}
        animate={open ? { y: 0 } : { y:"-100%"  }}
        transition={{ duration: .5 }}
        className="fixed bg-white dark:bg-[#2D3748] top-0 left-0 w-[100%] h-[100vh] z-[200] px-[25px] py-[32px]">
            <div className="flex justify-between">
                <div className="w-[56px] h-[56px]"></div>
                <Logo />
                <span className="rounded-default border-2 w-[56px] md:order-first order-2 h-[56px] flex items-center justify-center dark:border-[#F7FAFC] dark:border-opacity-10 border-mrlongblue border-opacity-10" onClick={() => setOpen(!open)}>
                    <Close isDark={isDark} />
                </span>
            </div>
            <div className="mt-[107px]">
                <motion.ul 
                    initial={{ opacity: 0, y: 200}}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1  }}
                    class='flex items-center gap-[40px] md:flex-row flex-col md:mt-0 mt-[42px]'>
                    {linksArray.map(link => {
                            return (
                                <li>
                                    <NavLink open={open} setOpen={setOpen} text={link.name} to={link.to} active={link.active} darkTheme={isDark} />
                                </li>
                            )
                        })}
                    <div  className="flex gap-[24px] lg:flex-row flex-col lg:w-[100%] w-[250px] mx-auto">
                        <Button text="View resume" bgcolor="#2F80ED" color="white" px="40px" py="15px" fontWeight="700" ifDark resume={true} />
                        <Button text="Send me a mail" color="#2F80ED" px="32px" py="15px" fontWeight="700" mail={true}  />
                    </div>
                </motion.ul>
            </div>
        </motion.div>
    )

}