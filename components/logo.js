'use client'

import { Symblosvg } from "./icons/icons"
import { useContext } from "react"
import { MouseContext } from "./context/mousecontext"
import Link from "next/link"
import {motion} from "framer-motion"


export const Logo = () => {

    const {  cursorChangeHandler  } = useContext(MouseContext)

    const isDark = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

    return(
        <Link href="/" className="flex items-center gap-[8px]"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity }}
             ><Symblosvg isDark={isDark} /></motion.div>
            <span className="text-mrlongblue font-bold text-lg tracking-[-0.355556px] dark:text-white font-syne">mrlong</span>
        </Link>
    )

}