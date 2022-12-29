'use client'

import { Moon, Sun } from "./icons/icons"
import { useContext } from "react"
import { MouseContext } from "./context/mousecontext"
import { MenuContext } from "./menucontext"



export const ThemeToggle = () => {

    
    const { cursorChangeHandler  } = useContext(MouseContext)
    const { theme, changeTheme  } = useContext(MenuContext)

    const handleClick = () => {
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                changeTheme("dark")
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                changeTheme("light")
            }
    
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                changeTheme("light")
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                changeTheme("dark")
            }
        }
        
    }


    return (
        <div className="fixed bottom-[100px] left-[20px] md:left-[200px] z-[100]"
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
        onClick={handleClick}>
            {theme === 'dark' ? <Sun /> : <Moon /> }
        </div>
    )

}