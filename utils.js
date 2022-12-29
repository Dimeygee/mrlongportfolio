import crystpal from "./public/assets/crystpal.png"
import stery from "./public/assets/stery.png"
import groshure from "./public/assets/groshure.png"
import dreams from "./public/assets/dreams.png"
import dreamsmobile from "./public/assets/dreamsmobile.png"
import gmobile from "./public/assets/gmobile.png"
import smobile from "./public/assets/smobile.png"
import cmobile from "./public/assets/cmobile.png"
import gsap from "gsap"


export const tl = gsap.timeline()


export const projects = [
    { 
        id:1,
        title: "Crystpal",
        image: crystpal,
        content: "A crypto app that lets you tag along with latest market trends, news and prices.",
        mobileImg: cmobile
    },
    { 
        id:2,
        title: "Stery",
        image: stery,
        content: "Stery is an art platform for finding and purchasing original art by artists all over the world.",
        mobileImg: smobile
    },
    { 
        id:3,
        title: "Groshure",
        image: groshure,
        content:"A state of art landing page for a groshure delivery app",
        mobileImg: gmobile
    },
    { 
        id:4,
        title: "Dreams & Degrees",
        image: dreams,
        content: "A digital empowerment initiatives for females",
        mobileImg: dreamsmobile
    },
]