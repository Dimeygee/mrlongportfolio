



export const ArrowDown = ({isDark}) => {

    const color = isDark ? "white" : "#2F80ED"

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18"  className="svg">
            <path opacity="0.4" d="M4.80969 5.20248L4.48254 1.50325C4.48254 0.673083 5.16218 0 6.00044 0C6.8387 0 7.51834 0.673083 7.51834 1.50325L7.19119 5.20248C7.19119 5.85375 6.65805 6.38174 6.00044 6.38174C5.34173 6.38174 4.80969 5.85375 4.80969 5.20248Z" fill={color}/>
            <path d="M4.86984 17.6247C4.81146 17.5669 4.56471 17.3509 4.35983 17.148C3.07656 15.9644 0.978153 12.8739 0.335965 11.2572C0.233523 11.0117 0.0154213 10.391 0 10.0583C0 9.74082 0.0738021 9.43755 0.219203 9.14846C0.422985 8.78737 0.74463 8.49938 1.12355 8.34011C1.38572 8.23865 2.17331 8.07938 2.18763 8.07938C3.04792 7.9212 4.44685 7.83502 5.99339 7.83502C7.46503 7.83502 8.80668 7.9212 9.68129 8.05102C9.69671 8.0652 10.6738 8.22447 11.0086 8.39792C11.6211 8.71537 12 9.33609 12 10.0005V10.0583C11.9857 10.4914 11.6057 11.4012 11.5924 11.4012C10.9502 12.9317 8.95319 15.9491 7.62585 17.1622C7.62585 17.1622 7.28438 17.5047 7.07178 17.6531C6.76556 17.8844 6.38663 18 6.00771 18C5.58473 18 5.19148 17.8702 4.86984 17.6247Z" fill={color}/>
        </svg>
    )

}

export const MenuSvg = ({isDark}) => {

    const color = isDark ? "white" : "#391484"

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  className="svg">
            <rect x="4" y="11" width="16" height="2" rx="1"  fill={color} />
            <g opacity="0.5">
            <path className="dark:text-white" fillRule="evenodd" clipRule="evenodd" d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H11C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5H5ZM13 17C12.4477 17 12 17.4477 12 18C12 18.5523 12.4477 19 13 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H13Z" fill={color}/>
            </g>
        </svg>
    )

}


export const Symblosvg = ({isDark}) => {

    const color = isDark ? "white" : "#2F80ED"

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  className="svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM16.6716 9.17157L14.8284 7.32843C13.2663 5.76633 10.7337 5.76633 9.17157 7.32843L7.32843 9.17157C5.76633 10.7337 5.76633 13.2663 7.32843 14.8284L9.17157 16.6716C10.7337 18.2337 13.2663 18.2337 14.8284 16.6716L16.6716 14.8284C18.2337 13.2663 18.2337 10.7337 16.6716 9.17157Z" fill={color}/>
        </svg>
    )

} 

export const Close = ({isDark}) => {

    const color = isDark ? "white" : "#2F80ED" 

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path xmlns="http://www.w3.org/2000/svg" d="M15.5467 13.9531C15.6516 14.0576 15.7348 14.1818 15.7916 14.3186C15.8484 14.4553 15.8776 14.6019 15.8776 14.75C15.8776 14.8981 15.8484 15.0447 15.7916 15.1814C15.7348 15.3182 15.6516 15.4424 15.5467 15.5469C15.3344 15.7564 15.0481 15.8739 14.7498 15.8739C14.4515 15.8739 14.1653 15.7564 13.953 15.5469L7.99983 9.59375L2.04671 15.5469C1.83441 15.7564 1.54812 15.8739 1.24983 15.8739C0.951541 15.8739 0.665253 15.7564 0.452958 15.5469C0.348078 15.4424 0.264861 15.3182 0.20808 15.1814C0.151299 15.0447 0.12207 14.8981 0.12207 14.75C0.12207 14.6019 0.151299 14.4553 0.20808 14.3186C0.264861 14.1818 0.348078 14.0576 0.452958 13.9531L6.40608 8L0.452958 2.04687C0.241613 1.83553 0.122881 1.54888 0.122881 1.25C0.122881 1.10201 0.152031 0.955461 0.208665 0.818733C0.2653 0.682005 0.348311 0.557771 0.452958 0.453123C0.557605 0.348476 0.681839 0.265466 0.818567 0.208831C0.955295 0.152196 1.10184 0.123047 1.24983 0.123047C1.54872 0.123047 1.83536 0.241779 2.04671 0.453123L7.99983 6.40625L13.953 0.453123C14.1643 0.241779 14.4509 0.123047 14.7498 0.123047C15.0487 0.123047 15.3354 0.241779 15.5467 0.453123C15.7581 0.664468 15.8768 0.951112 15.8768 1.25C15.8768 1.54888 15.7581 1.83553 15.5467 2.04687L9.59358 8L15.5467 13.9531Z" fill={color}/>
        </svg>
    )

}



export const Moon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 0C7.21996 0 5.47991 0.527841 3.99986 1.51677C2.51982 2.50571 1.36627 3.91131 0.685081 5.55585C0.00389189 7.20038 -0.174338 9.00998 0.172929 10.7558C0.520196 12.5016 1.37736 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24418 17.8271C8.99001 18.1743 10.7996 17.9961 12.4441 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 8.54 17.96 8.08 17.9 7.64C17.4003 8.34066 16.7401 8.91146 15.9746 9.30465C15.2091 9.69784 14.3606 9.90198 13.5 9.9C12.3552 9.90003 11.24 9.53643 10.3152 8.86166C9.3904 8.18689 8.70384 7.23581 8.35453 6.14561C8.00522 5.05541 8.01122 3.88243 8.37166 2.79586C8.7321 1.70928 9.42835 0.765281 10.36 0.0999999C9.92 0.0399999 9.46 0 9 0V0Z" fill="black"/>
        </svg>
    )
}

export const Sun = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 14C11.8333 14 12.5417 13.7083 13.125 13.125C13.7083 12.5417 14 11.8333 14 11C14 10.1667 13.7083 9.45833 13.125 8.875C12.5417 8.29167 11.8333 8 11 8C10.1667 8 9.45833 8.29167 8.875 8.875C8.29167 9.45833 8 10.1667 8 11C8 11.8333 8.29167 12.5417 8.875 13.125C9.45833 13.7083 10.1667 14 11 14ZM11 16C9.61667 16 8.43767 15.5123 7.463 14.537C6.48767 13.5623 6 12.3833 6 11C6 9.61667 6.48767 8.43733 7.463 7.462C8.43767 6.48733 9.61667 6 11 6C12.3833 6 13.5627 6.48733 14.538 7.462C15.5127 8.43733 16 9.61667 16 11C16 12.3833 15.5127 13.5623 14.538 14.537C13.5627 15.5123 12.3833 16 11 16ZM1 12C0.716667 12 0.479333 11.904 0.288 11.712C0.096 11.5207 0 11.2833 0 11C0 10.7167 0.096 10.479 0.288 10.287C0.479333 10.0957 0.716667 10 1 10H3C3.28333 10 3.521 10.0957 3.713 10.287C3.90433 10.479 4 10.7167 4 11C4 11.2833 3.90433 11.5207 3.713 11.712C3.521 11.904 3.28333 12 3 12H1ZM19 12C18.7167 12 18.4793 11.904 18.288 11.712C18.096 11.5207 18 11.2833 18 11C18 10.7167 18.096 10.479 18.288 10.287C18.4793 10.0957 18.7167 10 19 10H21C21.2833 10 21.5207 10.0957 21.712 10.287C21.904 10.479 22 10.7167 22 11C22 11.2833 21.904 11.5207 21.712 11.712C21.5207 11.904 21.2833 12 21 12H19ZM11 4C10.7167 4 10.4793 3.904 10.288 3.712C10.096 3.52067 10 3.28333 10 3V1C10 0.716667 10.096 0.479 10.288 0.287C10.4793 0.0956666 10.7167 0 11 0C11.2833 0 11.521 0.0956666 11.713 0.287C11.9043 0.479 12 0.716667 12 1V3C12 3.28333 11.9043 3.52067 11.713 3.712C11.521 3.904 11.2833 4 11 4ZM11 22C10.7167 22 10.4793 21.904 10.288 21.712C10.096 21.5207 10 21.2833 10 21V19C10 18.7167 10.096 18.4793 10.288 18.288C10.4793 18.096 10.7167 18 11 18C11.2833 18 11.521 18.096 11.713 18.288C11.9043 18.4793 12 18.7167 12 19V21C12 21.2833 11.9043 21.5207 11.713 21.712C11.521 21.904 11.2833 22 11 22ZM4.65 6.05L3.575 5C3.375 4.81667 3.279 4.58333 3.287 4.3C3.29567 4.01667 3.39167 3.775 3.575 3.575C3.775 3.375 4.01667 3.275 4.3 3.275C4.58333 3.275 4.81667 3.375 5 3.575L6.05 4.65C6.23333 4.85 6.325 5.08333 6.325 5.35C6.325 5.61667 6.23333 5.85 6.05 6.05C5.86667 6.25 5.63767 6.34567 5.363 6.337C5.08767 6.329 4.85 6.23333 4.65 6.05ZM17 18.425L15.95 17.35C15.7667 17.15 15.675 16.9127 15.675 16.638C15.675 16.3627 15.7667 16.1333 15.95 15.95C16.1333 15.75 16.3627 15.6543 16.638 15.663C16.9127 15.671 17.15 15.7667 17.35 15.95L18.425 17C18.625 17.1833 18.721 17.4167 18.713 17.7C18.7043 17.9833 18.6083 18.225 18.425 18.425C18.225 18.625 17.9833 18.725 17.7 18.725C17.4167 18.725 17.1833 18.625 17 18.425ZM15.95 6.05C15.75 5.86667 15.6543 5.63733 15.663 5.362C15.671 5.08733 15.7667 4.85 15.95 4.65L17 3.575C17.1833 3.375 17.4167 3.279 17.7 3.287C17.9833 3.29567 18.225 3.39167 18.425 3.575C18.625 3.775 18.725 4.01667 18.725 4.3C18.725 4.58333 18.625 4.81667 18.425 5L17.35 6.05C17.15 6.23333 16.9167 6.325 16.65 6.325C16.3833 6.325 16.15 6.23333 15.95 6.05ZM3.575 18.425C3.375 18.225 3.275 17.9833 3.275 17.7C3.275 17.4167 3.375 17.1833 3.575 17L4.65 15.95C4.85 15.7667 5.08767 15.675 5.363 15.675C5.63767 15.675 5.86667 15.7667 6.05 15.95C6.25 16.1333 6.346 16.3627 6.338 16.638C6.32933 16.9127 6.23333 17.15 6.05 17.35L5 18.425C4.81667 18.625 4.58333 18.7207 4.3 18.712C4.01667 18.704 3.775 18.6083 3.575 18.425Z" fill="white"/>
        </svg>
    )
}