


const headerTree = {
    headerElTree : {
        navEl : {
            element : "nav",
            classes : ["bg-gray-800"]
        },
        outerDivEl : {
            element : "div",
            classes : ["mx-auto", "max-w-7xl", "px-2", "sm:px-6", "lg:px-8"]
        },
        innerDivEl : {
            element : "div",
            classes : ["relative", "flex", "h-16", "items-center", "justify-between"]
        },
        toggleDivEl : {
            element : "div",
            classes : ["absolute", "inset-y-0", "left-0", "flex", "items-center", "sm:hidden"]
        },
        toggleBtnEl : {
            element : "button",
            classes : ["inline-flex", "items-center", "justify-center", "rounded-md", "p-2", "text-gray-400", "hover:bg-gray-700", "hover:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-inset", "focus:ring-white"],
            attrs : {
                "aria-controls" : "mobile-menu",
                "aria-expanded" : false
            }
        },
        toggleSpanEl : {
            element : "span",
            classes : ["sr-only"],
            text : "Open main menu"
        },
        closeSvgEl : {
            element : "svg",
            classes : ["block", "h-6", "w-6"],
            attrsNS : {
                fill : "noen",
                viewBox : "0 0 24 24",
                "stroke-width" : 1.5,
                stroke : "currentColor",
                "aria-hidden" : true
            }
        },
        closePathEl : {
            element : "path",
            attrsNS : {
                "stroke-linecap" : "round",
                "stroke-linejoin" : "round",
                d : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            }
        },
        openSvgEl : {
            element : "svg",
            classes : ["hidden", "h-6", "w-6"],
            attrsNS : {
                fill : "none",
                viewBox : "0 0 24 24",
                "stroke-width" : 1.5,
                stroke : "currentColor",
                "aria-hidden" : true
            }
        },
        openPathEl : {
            element : "path",
            attrsNS : {
                "stroke-linecap" : "round",
                "stroke-linejoin" : "round",
                d : "M6 18L18 6M6 6l12 12"
            }
        },
        logoOuterDivEl : {
            element : "div",
            classes : ["flex", "flex-1", "items-center", "justify-center", "sm:items-stretch", "sm:justify-start"]
        },
        logoDivEl : {
            element : "div",
            classes : ["flex", "flex-shrink-0", "items-center"]
        },
        blockImgEl : {
            element : "img",
            classes : ["block", "h-8", "w-auto", "lg:hidden"],
            attrs : {
                src : "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
                alt : "...logo"
            }
        },
        hiddenImgEl : {
            element : "img",
            classes : ["hidden", "h-8", "w-auto", "lg:block"],
            attrs : {
                src : "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
                alt : "...logo"
            }
        },
    }
}