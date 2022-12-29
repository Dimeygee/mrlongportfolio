
'use client'

import {MenuContext} from "./menucontext"
import { useContext } from "react"


export const Button = ({ color, bgcolor, text, px, py, opacity, fontWeight, ifDark, ifSectionStyle, resume, mail, seemore }) => {

    
    const { theme } = useContext(MenuContext)

    const style = { 
        color: theme === 'dark' ? "#F7FAFC" : color,
        backgroundColor: theme === 'dark' ? "transparent" : bgcolor,
        padding:`${py} ${px}`,
        fontWeight: fontWeight,
        border: theme === 'dark' ?  "2px solid rgb(247, 250, 252, 0.1)" : ""
    }

    const darkStyle = {
        backgroundColor: "#F7FAFC",
        border: "2px solid #F7FAFC",
        padding:`${py} ${px}`,
        fontWeight: fontWeight,
        color:"#1A202C"
    }

    const sectionDarkStyle = {
        border:"1px solid #F7FAFC",
        padding:`${py} ${px}`,
        fontWeight: fontWeight,
        color: theme === 'dark' ? "#F7FAFC" : color,
    }


    return(
        <>
            {resume ? (
                <a className="border-opacity-10 rounded-[28px] text-center text-base font-outfit tracking-[-0.36px] border-2 border-mrlongblue dark:border-transparent`" href="../assets/OdebiyiRidwanResume.pdf" target="__blank" style={(theme === 'dark' && ifDark) ? darkStyle : (theme === 'dark' && ifSectionStyle) ? sectionDarkStyle  : style}>{text}</a>
            ) : mail ? (
                <a className="border-opacity-10 rounded-[28px] text-center text-base font-outfit tracking-[-0.36px] border-2 border-mrlongblue dark:border-transparent`" href="mailto:Odebiyiridwan@gmail.com" target="__blank" style={(theme === 'dark' && ifDark) ? darkStyle : (theme === 'dark' && ifSectionStyle) ? sectionDarkStyle  : style}>{text}</a>
            ) : seemore ? (
                <a className="border-opacity-10 rounded-[28px] text-base text-center font-outfit tracking-[-0.36px] border-2 border-mrlongblue dark:border-transparent`" href="https://dribbble.com/mrlong007" target="__blank" style={(theme === 'dark' && ifDark) ? darkStyle : (theme === 'dark' && ifSectionStyle) ? sectionDarkStyle  : style}>{text}</a>
            ) : (
                <button className={` ${opacity ? "work" : ""} border-opacity-10 rounded-[28px] text-base font-outfit tracking-[-0.36px] border-2 border-mrlongblue dark:border-transparent`} style={(theme === 'dark' && ifDark) ? darkStyle : (theme === 'dark' && ifSectionStyle) ? sectionDarkStyle  : style}>{text}</button>
            )}
        </>
    )

}