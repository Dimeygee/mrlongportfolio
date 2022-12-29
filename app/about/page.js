'use client'

import { AboutHeader } from "../../components/aboutheader";
import { AboutContent } from "../../components/aboutcontent";
import {Loader} from "../../components/loader"



export default function About() {


    return(
        <>
            <Loader />
            <AboutHeader />
            <AboutContent />
        </>
    )

}