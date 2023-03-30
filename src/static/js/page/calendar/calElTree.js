import actions from "./actions.js"

const calendarElTree = {
    calMonthElTree : {
        mainEl : {
            element : "div",
            classes : ["lg:container", "mx-auto", "lg:px-20", "py-3", "h-[calc(100vh-80px)]"]//, "h-[calc(100vh-130px)]"
        },
        monMainEl : {
            element : "div",
            classes : ["overflow-hidden", "bg-white shadow", "sm:rounded-lg"]
        },
        monOuterDivEl : {
            element : "div",
            classes : ["lg:flex", "lg:items-center", "lg:justify-between", "p-5"]
        },
        monInnerDivEl : {
            element : "div",
            classes : ["flex", "flex-col", "flex-grow"]
        },
        titleDivEl : {
            element : "div",
            classes : ["min-w-0", "flex-1"]
        },
        titleEl : {
            element : "h1",
            classes : ["text-2xl", "font-bold leading-7", "text-gray-800", "sm:truncate", "sm:text-3xl", "sm:tracking-tight"],
            text : ""
        },
        btnGroupEl : {
            element : "div",
            classes : ["inline-flex", "rounded-md", "shadow-sm"]
        },
        prevBtnEl : {
            element : "button",
            classes : ["px-4", "pt-2.5", "text-sm", "font-medium", "text-gray-500", "bg-white", "border", "border-gray-200", "rounded-l-lg", "hover:bg-gray-100", "hover:text-blue-700", "focus:z-10", "focus:ring-2", "focus:ring-blue-700", "focus:text-blue-700", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white", "dark:hover:text-white", "dark:hover:bg-gray-600", "dark:focus:ring-blue-500", "dark:focus:text-white"],
        },
        prevSvgEl : {
            element : "svg",
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
        todayBtnEl : {
            element : "button",
            classes : ["px-4", "py-2", "text-sm", "font-medium", "text-gray-500", "bg-white border-t", "border-b", "border-gray-200", "hover:bg-gray-100", "hover:text-blue-700", "focus:z-10", "focus:ring-2", "focus:ring-blue-700", "focus:text-blue-700", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white", "dark:hover:text-white", "dark:hover:bg-gray-600", "dark:focus:ring-blue-500", "dark:focus:text-white"],
            text : "TODAY"
        },
        nextBtnEl : {
            element : "button",
            classes : ["px-4", "pt-2.5", "text-sm", "font-medium", "text-gray-500", "bg-white", "border", "border-gray-200", "rounded-r-md", "hover:bg-gray-100", "hover:text-blue-700", "focus:z-10", "focus:ring-2", "focus:ring-blue-700", "focus:text-blue-700", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white", "dark:hover:text-white", "dark:hover:bg-gray-600", "dark:focus:ring-blue-500", "dark:focus:text-white"],
        },
        nextSvgEl : {
            element : "svg",
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
        weekNameDivEl : {
            element : "div",
            classes : ["grid", "w-full", "h-10", "grid-cols-7", "gap-px", "pt-px", "bg-gray-300"]
        },
        monGridDivEl : {
            element : "div",
            classes : ["grid","flex-grow", "w-full", "h-auto", "grid-cols-7", "grid-rows-6", "gap-px", "pt-px", "mt-1", "bg-gray-300", "rounded-sm"]
        },
        eventInputModalEl : {
            element : "div",
            classes : ["hidden", "absolute", "w-2/4", "h-1/2", "bg-gray-500", "z-10"]
        }
    
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
            classes : ["relative", "overflow-y-auto", "flex", "h-[120px]", "flex-col", "bg-white", "group", "text-gray-800", "rounded-sm", "drag-zone"],
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
            classes : ["flex", "justify-between", "text-xs", "-m-1", "mb-3", "mx-1", "px-2"],
            attrs : {
                draggable : true,
            },
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

    weekName : ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    monName : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    
}

export default calendarElTree