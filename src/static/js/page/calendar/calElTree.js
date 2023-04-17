
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
            classes : ["text-2xl", "font-bold", "leading-7", "text-gray-800", "sm:truncate", "sm:text-3xl", "sm:tracking-tight"],
            text : ""
        },
        btnGroupEl : {
            element : "div",
            classes : ["inline-flex", "rounded-md", "shadow-sm"]
        },
        prevBtnEl : {
            element : "button",
            classes : ["spa-link", "px-4", "pt-2.5", "text-sm", "font-medium", "text-gray-500", "bg-white", "border", "border-gray-200", "rounded-l-lg", "hover:bg-gray-100", "hover:text-blue-700", "focus:z-10", "focus:ring-2", "focus:ring-blue-700", "focus:text-blue-700", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white", "dark:hover:text-white", "dark:hover:bg-gray-600", "dark:focus:ring-blue-500", "dark:focus:text-white"],
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
            classes : ["spa-link", "px-4", "py-2", "text-sm", "font-medium", "text-gray-500", "bg-white border-t", "border-b", "border-gray-200", "hover:bg-gray-100", "hover:text-blue-700", "focus:z-10", "focus:ring-2", "focus:ring-blue-700", "focus:text-blue-700", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white", "dark:hover:text-white", "dark:hover:bg-gray-600", "dark:focus:ring-blue-500", "dark:focus:text-white"],
            text : "TODAY"
        },
        nextBtnEl : {
            element : "button",
            classes : ["spa-link", "px-4", "pt-2.5", "text-sm", "font-medium", "text-gray-500", "bg-white", "border", "border-gray-200", "rounded-r-md", "hover:bg-gray-100", "hover:text-blue-700", "focus:z-10", "focus:ring-2", "focus:ring-blue-700", "focus:text-blue-700", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white", "dark:hover:text-white", "dark:hover:bg-gray-600", "dark:focus:ring-blue-500", "dark:focus:text-white"],
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
    eventModalElTree : {
        eventModalBgEl : {
            element : "div",
            classes : ["hidden", "py-12", "bg-gray-700", "transition", "duration-150", "ease-in-out", "z-20", "absolute", "top-0", "right-0", "bottom-0", "left-0"],
            attrs : {
                id : "eventModal",
                tabindex : "-1",
                "aria-hidden" : true,
            }
        },
        eventModalMainEl : {
            element : "div",
            classes : ["container", "mx-auto", "w-11/12", "md:w-2/3", "max-w-lg"],
        },
        eventModalOuterEl : {
            element : "div",
            classes : ["relative", "py-8", "px-5", "md:px-10", "bg-white", "shadow-md", "rounded", "border", "border-gray-400"]
        },
        eventModalLogoEl : {
            element : "div",
            classes : ["w-full", "flex", "justify-start", "text-gray-600", "mb-3"]
        },
        eventModalLogoSvgEl : {
            element : "svg",
            classes : ["icon", "icon-tabler", "icon-tabler-wallet"],
            attrsNS : {
                width : 52,
                height : 52,
                viewBox : "0 0 24 24",
                "stroke-width" : 1,
                stroke : "currentColor",
                fill : "none",
                "stroke-linecap" : "round",
                "stroke-linejoin" : "round",
            }
        },
        eventModalLogoPath1El : {
            element : "path",
            attrsNS : {
                stroke : "none",
                d : "M0 0h24v24H0z"
            }
        },
        eventModalLogoPath2El : {
            element : "path",
            attrsNS : {
                d : "M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
            }
        },
        eventModalLogoPath3El : {
            element : "path",
            attrsNS : {
                d : "M20 12v4h-4a2 2 0 0 1 0 -4h4"
            }
        },
        eventCloseBtnEl : {
            element : "button",
            classes : ["cursor-pointer", "absolute", "px-2", "top-0", "right-0", "mt-4", "mr-5", "text-gray-400", "hover:text-gray-600", "transition", "duration-150", "ease-in-out", "rounded", "focus:ring-2", "focus:outline-none", "focus:ring-gray-600"],
            text : "x",
            attrs : {
                "aria-label" : "close modal",
                "role" : "button",
            }
        },
        eventTitleEl : {
            element : "h1",
            classes : ["text-gray-800", "font-lg", "font-bold", "tracking-normal", "leading-tight", "mb-4"],
            text : "New Item"
        },
        eventTitleLabelEl : {
            element : "label",
            classes : ["text-gray-800", "text-sm", "font-bold", "leading-tight", "tracking-normal"],
            text : "Title",
            attrs : {
                for : "title"
            }
        },
        eventTitleInputEl : {
            element : "input",
            classes : ["mb-5", "mt-2", "text-gray-600", "focus:outline-none", "focus:border", "focus:border-indigo-700", "font-normal", "w-full", "h-10", "flex", "items-center", "pl-3", "text-sm", "border-gray-300", "rounded", "border"],
            id : "title"
        },
        eventStartLabelEl : {
            element : "label",
            classes : ["text-gray-800", "text-sm", "font-bold", "leading-tight", "tracking-normal"],
            text : "Start Date",
            attrs : {
                for : "start"
            }
        },
        eventStartInputEl : {
            element : "input",
            classes : ["mb-5", "mt-2", "text-gray-600", "focus:outline-none", "focus:border", "focus:border-indigo-700", "font-normal", "w-full", "h-10", "flex", "items-center", "pl-3", "text-sm", "border-gray-300", "rounded", "border"],
            id : "start"
        },
        eventEndLabelEl : {
            element : "label",
            classes : ["text-gray-800", "text-sm", "font-bold", "leading-tight", "tracking-normal"],
            text : "End Date",
            attrs : {
                for : "end"
            }
        },
        eventEndInputEl : {
            element : "input",
            classes : ["mb-5", "mt-2", "text-gray-600", "focus:outline-none", "focus:border", "focus:border-indigo-700", "font-normal", "w-full", "h-10", "flex", "items-center", "pl-3", "text-sm", "border-gray-300", "rounded", "border"],
            id : "end"
        },
        eventCategoryLabelEl : {
            element : "label",
            classes : ["text-gray-800", "text-sm", "font-bold", "leading-tight", "tracking-normal"],
            text : "Category",
            attrs : {
                for : "category"
            }
        },
        eventCategoryInputEl : {
            element : "input",
            classes : ["mb-5", "mt-2", "text-gray-600", "focus:outline-none", "focus:border", "focus:border-indigo-700", "font-normal", "w-full", "h-10", "flex", "items-center", "pl-3", "text-sm", "border-gray-300", "rounded", "border"],
            id : "category"
        },
        eventBtnGroupEl : {
            element : "div",
            classes : ["flex", "items-center", "justify-start", "w-full"]
        },
        eventSubmitBtnEl : {
            element : "button",
            classes : ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-indigo-700", "transition", "duration-150", "ease-in-out", "hover:bg-indigo-600", "bg-indigo-700", "rounded", "text-white", "px-8", "py-2", "text-sm"],
            text : "SUBMIT"
        },
        eventCancleBtnEl : {
            element : "button",
            classes : ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-gray-400", "ml-3", "bg-gray-100", "transition", "duration-150", "text-gray-600", "ease-in-out", "hover:border-gray-400", "hover:bg-gray-300", "border", "rounded", "px-8", "py-2", "text-sm"],
            text : "CANCLE"
        },
        
        

        // eventCloseSvgEl : {
        //     element : "svg",
        //     classes : ["icon", "icon-tabler", "icon-tabler-x"],
        //     attrsNS : {
        //         width : 20,
        //         height : 20,
        //         viewBox : "0 0 24 24",
        //         "stroke-width" : 2.5,
        //         stroke : "currentColor",
        //         fill : "none",
        //         "stroke-linecap" : "round",
        //         "stroke-linejoin" : "round",
        //     }
        // },
        // eventClosePathEl : {
        //     element : "path",
        //     attrsNS : {
        //         stroke : "none",
        //         d : "M0 0h24v24H0z",
        //     }
        // },
        // eventCloseLine1El : {
        //     element : "line",
        //     attrsNS : {
        //         x1 : "18",
        //         y1 : "6",
        //         x2 : "6",
        //         y2 : "18" 
        //     }
        // },
        // eventCloseLine2El : {
        //     element : "line",
        //     attrsNS : {
        //         x1 : "6",
        //         y1 : "6",
        //         x2 : "18",
        //         y2 : "18" 
        //     }
        // },
        eventInputModalEl : {
            element : "div",
            classes : ["relative", "mb-5", "mt-2"],
        },
        eventContentDivEl : {
            element : "div",
            classes : ["relative", "bg-white", "shadow", "dark:bg-gray-700"]
        },
        closeBtnEl : {
            element : "button",
            classes : ["absolute", "top-3", "right-2.5", "text-gray-400", "bg-transparent", "hover:bg-gray-200", "hover:text-gray-900", "rounded-lg", "text-sm", "p-1.5", "ml-auto", "inline-flex", "items-center", "dark:hover:bg-gray-800", "dark:hover:text-white"],
            attrs : {
                "data-modal-hide" : "eventModal"
            }
        },
        closeSvgEl : {
            element : "svg",
            calsses : ["w-5", "h-5"],
            attrsNS : {
                "aria-hidden" : true,
                fill : "currentColor",
                viewBox : "0 0 20 20"
            }
        },
        closePathEl : {
            element : "path",
            attrsNS : {
                "clip-rule" : "evenodd",
                "fill-rule" : "evenodd",
                d : "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            }
        },
        closeSpanEl : {
            element : "span",
            classes : ["sr-only"],
            text : "close modal"
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
            element : "button",
            classes : ["flex", "justify-between", "text-xs", "-m-1", "mb-3", "mx-1", "px-2"],
            attrs : {
                "data-modal-target" : "eventModal",
                "data-modal-toggle" : "eventModal",
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