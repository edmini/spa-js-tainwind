
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
        },
        // loadingDivEl : {
        //     element : "div",
        //     classes : ["absolute", "z-20", "-translate-x-1/2", "-translate-y-1/2", "top-2/4", "left-1/2"],
        //     attrs : {
        //         role : "status"
        //     }
        // },
        // loadingSvgEl : {
        //     element : "svg",
        //     classes : ["w-8", "h-8", "mr-2", "text-gray-200", "animate-spin", "dark:text-gray-600", "fill-blue-600"],
        //     attrsNS : {
        //         "aria-hidden" : true,
        //         viewBox : "0 0 100 101",
        //         fill : "none",
        //     }
        // },
        // loadingPath1El : {
        //     element : "path",
        //     attrsNS : {
        //         d : "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
        //         fill : "currentColor"
        //     }
        // },
        // loadingPath2El : {
        //     element : "path",
        //     attrsNS : {
        //         d : "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        //         fill : "currentFill"
        //     }
        // },
        // loadingSpanEl : {
        //     element : "span",
        //     classes : ["sr-only"],
        //     text : "Loading...."
        // }
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