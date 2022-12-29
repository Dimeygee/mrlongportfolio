
'use client';

import Link from "next/link"
import {useContext} from "react"
import {MenuContext} from "./menucontext"
import { MouseContext } from "./context/mousecontext"

export const NavLink = ({ text, to, active, darkTheme, isFooter }) => {

    const { cursorChangeHandler  } = useContext(MouseContext)
    
    const context = useContext(MenuContext)

    const { open, setOpen } = context


    const lightStyle = {
        color: (active && !darkTheme) ? "#2F80ED" : isFooter ? "#A0AEC0" :  "#1A202C",
        fontWeight: (active && !darkTheme) ? 700 : 500
    }

    const darkStyle = {
        color: (active && darkTheme) ? "#F7FAFC" :  "#A0AEC0",
        fontWeight: (active && darkTheme)  ? 700 : 500
    }

    const before = (active && !darkTheme) ? "active" : (active && darkTheme) ? "dark_active" : '' 

    const linkDisplay = darkTheme ? (
        <Link 
            href={`${to}`} 
            style={darkStyle}
            onClick={() => setOpen(!open)} 
            className={`navlink link ${before} font-outfit inline-block text-base tracking-[-0.355556px]`}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            >
                {text}
        </Link>
    ) : (
        <Link 
            href={`${to}`} 
            style={lightStyle}
            onClick={() => setOpen(!open)} 
            className={`navlink link ${before} font-outfit inline-block text-base tracking-[-0.355556px]`}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            >
                {text}
        </Link>
    ) 
 
    return linkDisplay
}

