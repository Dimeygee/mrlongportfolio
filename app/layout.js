/* eslint-disable @next/next/no-head-element */
import "../styles/globals.css"
import { MenuNav__Footer } from "../components/menunav&footer";
import DotRing from "../components/customcursor";
import MouseContextProvider from "../components/context/mousecontext";
import { MenuContextProvider } from "../components/menucontext";
import { ThemeToggle } from "../components/themetoggle";


export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;400;500&family=Syne:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="dark:bg-[#2D3748] bg-[#FAFCFF] transition duration-[0.1s] delay-[0.1s]">
          <MouseContextProvider>
            <MenuContextProvider>
              <ThemeToggle />
              <MenuNav__Footer>
                  <DotRing />
                  {children}
              </MenuNav__Footer>
            </MenuContextProvider>
          </MouseContextProvider>
      </body>
    </html>
  );
}
