import actionsGroup from "./actions.js"


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
            },
            actions : {
                click : actionsGroup.showMobileMenuClick,
            }
        },
        toggleSpanEl : {
            element : "span",
            classes : ["sr-only"],
            text : "Open main menu"
        },
        closeSvgEl : {
            element : "svg",
            classes : ["hidden", "h-6", "w-6"],
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
            classes : ["h-6", "w-6"],
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
        logoAEl : {
            element : "a",
            classes : ["spa-link"],
            attrs : {
                href : "/"
            }
        },
        logoImgEl : {
            element : "img",
            classes : ["h-8", "w-auto"],
            attrs : {
                src : "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",
                alt : "...logo"
            }
        },
        linkOuterDivEl : {
            element : "div",
            classes : ["hidden", "sm:ml-6", "sm:block"]
        },
        linkInnerDivEl : {
            element : "div",
            classes : ["flex", "space-x-4"]
        },
        bellDivEl : {
            element : "div",
            classes : ["absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-2", "sm:static", "sm:inset-auto", "sm:ml-6", "sm:pr-0"]
        },
        bellBtnEl : {
            element : "button",
            classes : ["rounded-full", "bg-gray-800", "p-1", "text-gray-400", "hover:text-white", "focus:outline-none", "focus:ring-2", "focus:ring-white", "focus:ring-offset-2", "focus:ring-offset-gray-800"]
        },
        bellSpanEl : {
            element : "span",
            classes : ["sr-only"],
            text : "View notifications"
        },
        bellSvgEl : {
            element : "svg",
            classes : ["h-6", "w-6"],
            attrsNS : {
                fill : "none",
                viewBox : "0 0 24 24",
                "stroke-width" : "1.5",
                stroke : "currentColor",
                "aria-hidden" : true
            }
        },
        bellPathEl : {
            element : "path",
            attrsNS : {
                "stroke-linecap" : "round",
                "stroke-linejoin" : "round",
                d : "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            }
        },
        profileDivEl : {
            element : "div",
            classes : ["relative", "ml-3"]
        },
        profileInnerDivEl : {
            element : "div"
        },
        profileBtnEl : {
            element : "button",
            classes : ["flex", "rounded-full", "bg-gray-800", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-white", "focus:ring-offset-2", "focus:ring-offset-gray-800"],
            id : "user-menu-button",
            attrs : {
                "aria-expanded" : false,
                "aria-haspopup" : true
            },
            actions : {
                click : actionsGroup.showProfileClick,
            }
        },
        profileSpanEl : {
            element : "span",
            classes : ["sr-only"],
            text : "Open user menu"
        },
        profileImgEl : {
            element : "img",
            classes : ["h-8", "w-8", "rounded-full"],
            attrs : {
                src : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                alt : "profile img"
            }
        },
        profileSubDivEl : {
            element : "div",
            classes : ["hidden", "absolute", "right-0", "z-10", "mt-2", "w-48", "origin-top-right", "rounded-md", "bg-white", "py-1", "shadow-lg", "ring-1", "ring-black", "ring-opacity-5", "focus:outline-none"],
            attrs : {
                role : "menu",
                "aria-orientation" : "vertical",
                "aria-labelledby" : "user-menu-button",
                tabindex : -1
            }
        },
        mobileDivEl : {
            element : "div",
            classes : ["sm:hidden"],
            id : "mobile-menu"
        },
        mobileLinkDivEl : {
            element : "div",
            classes : ["space-y-1", "px-2", "pt-2", "pb-3"]
        },
        

    },
    linkListElTree : {
        mainLinkAEl : {
            element : "a",
            classes : ["text-gray-300", "hover:bg-gray-700", "hover:text-white", "rounded-md", "px-3", "py-2", "text-sm", "font-medium", "spa-link"]
        }
    }
    ,
    profileListElTree : {
        profileAEl : {
            element : "a",
            classes : ["block", "px-4", "py-2", "text-sm", "text-gray-700", "spa-link"],
            text : "",
            attrs : {
                role : "menuitem",
                tabindex : -1,
                id : ""
            },
            actions : {
                click : actionsGroup.showProfileClick
            }
        }
    }
    ,
    mobileListElTree : {
        mobileLinkAEl : {
            element : "a",
            classes : ["text-gray-300", "hover:bg-gray-700", "hover:text-white", "block", "rounded-md", "px-3", "py-2", "text-base", "font-medium", "spa-link"]
        }
    },
    linkList : [
        {
            text : "Dashboard",
            href : "/dashboard"
        },
        {
            text : "Team",
            href : "/team"
        },
        {
            text : "Projects",
            href : "/projects"
        },
        {
            text : "Calendar",
            href : "/calendar"
        }
    ],
    profileList : [
        {
            text : "Your Profile",
            href : "/profile"
        },
        {
            text : "Settings",
            href : "/settings"
        },
        {
            text : "Sign out",
            href : "/signout"
        }
    ],

}


export default headerTree