'use client'

import { Symblosvg } from "./icons/icons"
import { tl } from "../utils"
import { useEffect, useContext } from "react"
import { MenuContext } from "./menucontext"
import {motion} from "framer-motion"



export const Loader = () => {

    useEffect(() => {
        tl.to('.loader', { yPercent: -100, delay: 3})
    },[])


    const { theme } = useContext(MenuContext)

    const isDark = theme === 'dark' ? true : false 

    return(
        <div className="loader fixed top-0 bottom-0 right-0 left-0 dark:bg-[#2D3748] bg-[#FAFCFF] z-20 flex items-center justify-center">
            <span className="flex items-center gap-[8px]">
                <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity }}
                ><Symblosvg isDark={isDark} /></motion.div>
                <span className="text-mrlongblue font-bold text-lg tracking-[-0.355556px] dark:text-white font-syne">mrlong</span>
            </span>
        </div>
    )

}