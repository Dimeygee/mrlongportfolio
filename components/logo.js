'use client'

import { Symblosvg } from "./icons/icons"
import { useContext } from "react"
import { MouseContext } from "./context/mousecontext"
import { MenuContext } from "./menucontext"
import Link from "next/link"
import {motion} from "framer-motion"


export const Logo = () => {

    const {  cursorChangeHandler  } = useContext(MouseContext)
    const {  theme  } = useContext(MenuContext)

    const isDark = theme === 'dark' ? true : false

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