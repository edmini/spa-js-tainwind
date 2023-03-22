import actions from "./actions.js"

const calendarElTree = {
    calMonthElTree : {
        mainEl : {
            element : "div",
            classes : ["lg:container", "mx-auto", "lg:px-20"]
        },
        monOuterDivEl : {
            element : "div",
            classes : ["flex", "flex-grow", "w-full", "h-[calc(100vh-80px)]","overflow-auto", "pb-10"]
        },
        monInnerDivEl : {
            element : "div",
            classes : ["flex", "flex-col", "flex-grow"]
        },
        titleDivEl : {
            element : "div",
            classes : ["h-20", "text-center"]
        },
        titleEl : {
            element : "h1",
            classes : ["pt-3", "pb-3", "text-gray-600", "text-4xl", "bg-white"],
            text : ""
        },
        weekNameDivEl : {
            element : "div",
            classes : ["grid", "w-full", "h-10", "grid-cols-7", "gap-px", "pt-px", "bg-gray-300"]
        },
        monGridDivEl : {
            element : "div",
            classes : ["grid", "flex-grow", "w-full", "h-auto", "grid-cols-7", "grid-rows-6", "gap-px", "pt-px", "mt-1", "bg-gray-300", "rounded-sm"]
        },
    
    },
    calWeekTitleElTree : {
        weekTitleDivEl : {
            element : "div",
            classes : ["relative", "flex", "flex-col", "group", "bg-white", "xl:pl-3", "pt-2"]
        },
        weekTitleEl : {
            element : "p",
            classes : ["text-sm"],
            text : ""
        }
    },
    calMonCellElTree : {
        monCellDivEl : {
            element : "div",
            classes : ["relative", "flex", "flex-col", "bg-white", "group", "text-gray-800", "rounded-sm", "drag-zone"],
            actions : {
                dblclick : actions.newSchedule,
            }
        },
        monCellTitleEl : {
            element : "h1",
            classes : ["m-1.5", "p-1.5", "rounded-full", "w-7", "text-xs", "font-bold"],
            text : ""
        }
    },
    calItemElTree : {
        itemDivEl : {
            element : "div",
            classes : ["flex", "justify-between", "text-xs", "-mt-2", "mb-3", "mx-1", "px-2"],
            attrs : {
                draggable : true,
            },
            actions : {
                click : actions.editSchedule,
            }
        },
        itemCircleEl : {
            element : "span",
            classes : ["w-3", "h-3", "rounded-full"]
        },
        itemPEl : {
            element : "p",
            classes : ["truncate", "w-20"],
            text : ""
        },
        itemSpanEl : {
            element : "span",
            classes : ["hidden", "lg:block"],
            text : ""
        },
    },

    //Mobile
    calMobileElTree : {
        mobileMainEl : {
            element : "div",
            classes : ["flex", "items-center", "justify-center", "py-8", "px-4"]
        },
        outerDivEl : {
            element : "div",
            classes : ["max-w-sm", "w-full", "shadow-lg"]
        },
        innerCalDivEl : {
            element : "div",
            classes : ["md:p-8", "p-5", "dark:bg-gray-800", "bg-white", "rounded-t"]
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
                stroke : "none", 
                fill : "none",
                d : "M0 0h24v24H0z"
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
                stroke : "none",
                d : "M0 0h24v24H0z",
                fill : "none",
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
            classes : ["flex", "items-center", "justify-between", "pt-12", "overflow-x-auto"]
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
            classes : ["md:py-8", "py-5", "md:px-16", "px-5", "dark:bg-gray-700", "bg-gray-50", "rounded-b"]
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
            text : ""
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

    weekName : ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    mobileWeekName : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monName : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    
}

export default calendarElTree