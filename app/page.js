'use client'

import { Header } from "../components/header"
import { Main } from "../components/main"
import { Loader } from "../components/loader"


function Home(){


    return(
        <div id="Home">
            <Loader />
            <Header />
            <Main />
        </div>
    )

}

export default Home