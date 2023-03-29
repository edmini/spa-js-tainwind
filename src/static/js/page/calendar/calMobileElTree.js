import actions from "./actions.js"

const calMobileElTree = {

    //Mobile
    calMobileElTree : {
        mainEl : {
            element : "div",
            classes : ["flex", "items-center", "justify-center", "py-8", "px-4"]
        },
        outerDivEl : {
            element : "div",
            classes : ["max-w-sm", "w-full", "shadow-lg"]
        },
        innerCalDivEl : {
            element : "div",
            classes : ["md:p-8", "p-5", "dark:bg-gray-800", "bg-gray-50", "rounded-t"]
        },
        calOuterDivEl : {
            element : "div",
            classes : ["px-4", "flex", "items-center", "justify-between"]
        },
        titleSpanEl : {
            element : "span",
            classes : ["focus:outline-none", "text-base", "font-bold", "dark:text-gray-100", "text-gray-800"],
            attrs : {
                tabindex : 0,
            },
            text : ""
        },
        prevNextBtnDivEl : {
            element : "div",
            classes : ["flex", "items-center"]
        },
        prevBtnEl : {
            element : "button",
            classes : ["focus:text-gray-400", "hover:text-gray-400", "text-gray-800", "dark:text-gray-100"],
            attrs : {
                "aria-label" : "calendar backward"
            }
        },
        prevSvgEl : {
            element : "svg",
            classes : ["icon", "icon-tabler", "icon-tabler-chevron-left"],
            attrsNS : {
                width : 24,
                height : 24,
                viewBox : "0 0 24 24",
                "stroke-width" : 1.5,
                stroke : "currentColor",
                fill : "none",
                "stroke-linecap" : "round",
                "stroke-linejoin" : "round",
            }
        },
        prevPathEl : {
            element : "path",
            attrsNS : {
                fill : "none",
                d : "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            }
        },
        prevPolylineEl : {
            element : "polyline",
            attrsNS : {
                points : "15 6 9 12 15 18"
            }
        },
        nextBtnEl : {
            element : "button",
            classes : ["focus:text-gray-400", "hover:text-gray-400", "ml-3", "text-gray-800", "dark:text-gray-100"],
            attrs : {
                "aria-label" : "calendar forward"
            },
            actions : {
                click : actions.nextMon
            }
        },
        nextSvgEl : {
            element : "svg",
            classes : ["icon", "icon-tabler", "icon-tabler-chevron-right"],
            attrsNS : {
                width : 24,
                height : 24,
                viewBox : "0 0 24 24",
                "stroke-width" : 1.5,
                stroke : "currentColor",
                fill : "none",
                "stroke-linecap" : "round",
                "stroke-linejoin" : "round"
            }
        },
        nextPathEl : {
            element : "path",
            attrsNS : {
                fill : "none",
                d : "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            }
        },
        nextPolylineEl : {
            element : "polyline",
            attrsNS : {
                points : "9 6 15 12 9 18"
            }
        },
        calTableDivEl : {
            element : "div",
            classes : ["flex", "bg-white", "items-center", "justify-between", "pt-12", "overflow-x-auto"]
        },
        calTableEl : {
            element : "table",
            classes : ["w-full"]
        },
        calTheadEl : {
            element : "thead"
        },
        calTheadTrEl : {
            element : "tr"
        },
        calTbodyEl : {
            element : "tbody"
        },
        calTbodyTr1El : {
            element : "tr"
        },
        calTbodyTr2El : {
            element : "tr"
        },
        calTbodyTr3El : {
            element : "tr"
        },
        calTbodyTr4El : {
            element : "tr"
        },
        calTbodyTr5El : {
            element : "tr"
        },
        calTbodyTr6El : {
            element : "tr"
        },
        calTodayTdDivEl : {
            element : "div",
            classes : ["w-full", "h-full"]
        },
        calTodayDivEl : {
            element : "div",
            classes : ["flex", "items-center", "justify-center", "w-full", "rounded-full", "cursor-pointer"]
        },
        calTodayAEl : {
            element : "a",
            classes : ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-indigo-700", "focus:bg-indigo-500", "hover:bg-indigo-500", "text-base", "w-8", "h-8", "flex", "items-center", "justify-center", "font-medium", "text-white", "bg-indigo-700", "rounded-full"],
            attrs : {
                role : "link",
                tabindex : 0,
            }
        },
        calListDivEl : {
            element : "div",
            classes : ["md:py-8", "py-5", "md:px-16", "px-5", "dark:bg-gray-700", "bg-white", "rounded-b"]
        },
        calListInnerDivEl : {
            element : "div",
            classes : ["px-4"]
        },

    },
    calMobileTitleElTree : {
        calThEl : {
            element : "th"
        },
        calTitleDivEl : {
            element : "div",
            classes : ["w-full", "flex", "justify-center"]
        },
        calTitlePEl : {
            element : "p",
            classes : ["text-base", "font-medium", "text-center", "text-gray-800", "dark:text-gray-100"],
            text : ""
        }
    },
    calMobileNumElTree : {
        calTdEl : {
            element : "td",
            classes : ["pt-6"]
        },
        calTdDivEl : {
            element : "div",
            classes : ["px-2", "cursor-pointer", "flex", "w-full", "justify-center"]
        },
        calTdPEl : {
            element : "p",
            classes : ["text-base", "text-gray-500", "dark:text-gray-100", "font-medium"],
            text : "",
            actions : {
                click : actions.selDay
            }
        }
    },
    calContentDivElTree : {
        calContendDivEl : {
            element : "div",
            classes : ["border-b", "pb-4", "border-gray-400", "border-dashed"]
        },
        calContentTimeEl : {
            element : "p",
            classes : ["text-xs", "font-light", "leading-3", "text-gray-500", "dark:text-gray-300"],
            text : ""
        },
        calContetTitleEl : {
            element : "a",
            classes : ["focus:outline-none", "text-lg", "font-medium", "leading-5", "text-gray-800", "dark:text-gray-100", "mt-2"],
            attrs : {
                tabindex : 0
            }
        },
        calContentPEl : {
            element : "p",
            classes : ["text-sm", "pt-2", "leading-4", "leading-none", "text-gray-600", "dark:text-gray-300"],
            text : ""
        }
    },

    mobileWeekName : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monName : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    
}

export default calMobileElTree