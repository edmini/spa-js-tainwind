
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

    },
    eventModalElTree : {
        eventModalBgEl : {
            element : "div",
            classes : ["hidden", "py-12", "bg-gray-700/60", "transition", "duration-150", "ease-in-out", "z-50", "absolute", "top-0", "right-0", "bottom-0", "left-0", "backdrop-blur-sm", "shadow-md"],
            attrs : {
                id : "eventModal",
                tabindex : "-1",
                "aria-hidden" : true,
            }
        },
        eventFormEl : {
            element : "form"
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
            classes : ["text-gray-400", "bg-transparent", "hover:bg-gray-200", "hover:text-gray-900", "rounded-lg", "text-sm", "p-1.5", "ml-auto", "inline-flex", "items-center", "dark:hover:bg-gray-600", "dark:hover:text-white"],
            attrs : {
                "aria-label" : "close modal",
                "role" : "button",
            }
        },
        eventCloseSvgEl : {
            element : "svg",
            classes : ["w-5", "h-5"],
            attrsNS : {
                fill : "currentColor",
                viewBox : "0 0 20 20"
            }
        },
        eventClosePathEl : {
            element : "path",
            attrsNS : {
                d : "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                "clip-rule" : "evenodd",
                "fill-rule" : "evenodd"
            }
        },
        eventTitleEl : {
            element : "h1",
            classes : ["text-gray-800", "font-lg", "font-bold", "tracking-normal", "leading-tight", "mb-4"],
            text : "New Item"
        },
        eventIdLabelEl : {
            element : "label",
            classes : ["hidden", "text-gray-800", "text-sm", "font-bold", "leading-tight", "tracking-normal"],
            text : "Id",
            attrs : {
                for : "id"
            }
        },
        eventIdInputEl : {
            element : "input",
            classes : ["hidden", "mb-5", "mt-2", "text-gray-600", "focus:outline-none", "focus:border", "focus:border-indigo-700", "font-normal", "w-full", "h-10", "flex", "items-center", "pl-3", "text-sm", "border-gray-300", "rounded", "border"],
            id : "id"
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
            id : "start",
            attrs : {
                type : "datetime-local",
            }
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
            id : "end",
            attrs : {
                type : "datetime-local"
            }
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
            element : "select",
            classes : ["mb-5", "mt-2", "text-gray-600", "focus:outline-none", "focus:border", "focus:border-indigo-700", "font-normal", "w-full", "h-10", "flex", "items-center", "pl-3", "text-sm", "border-gray-300", "rounded", "border"],
            id : "category"
        },
        eventCategoryOptionEl : {
            element : "option"
        },
        eventMemoLabelEl : {
            element : "label",
            classes : ["text-gray-800", "text-sm", "font-bold", "leading-tight", "tracking-normal"],
            text : "Memo",
            attrs : {
                for : "memo"
            }
        },
        eventMemoInputEl : {
            element : "input",
            classes : ["mb-5", "mt-2", "text-gray-600", "focus:outline-none", "focus:border", "focus:border-indigo-700", "font-normal", "w-full", "h-10", "flex", "items-center", "pl-3", "text-sm", "border-gray-300", "rounded", "border"],
            id : "memo"
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
        eventDelBtnEl : {
            element : "button",
            classes : ["hidden", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-indigo-700", "transition", "duration-150", "ease-in-out", "hover:bg-red-600", "bg-red-700", "rounded", "text-white", "px-8", "py-2", "text-sm"],
            text : "DELETE"
        },
        eventCancleBtnEl : {
            element : "button",
            classes : ["focus:outline-none", "focus:ring-2", "focus:ring-offset-2", "focus:ring-gray-400", "ml-3", "bg-gray-100", "transition", "duration-150", "text-gray-600", "ease-in-out", "hover:border-gray-400", "hover:bg-gray-300", "border", "rounded", "px-8", "py-2", "text-sm"],
            text : "CANCLE"
        },
        eventDelDivEl : {
            element : "div",
            classes : ["hidden", "pt-3"]
        },
        eventDelLabelEl : {
            element : "label",
            classes : ["pr-3", "inline-block", "pl-[0.15rem]", "hover:cursor-pointer"],
            text : "Delete Event",
            attrs : {
                for : "del-toggle"
            }
        },
        eventDelInputEl : {
            element : "input",
            classes : ["mr-2", "mt-[0.3rem]", "h-3.5", "w-8", "appearance-none", "rounded-[0.4375rem]", "bg-neutral-300", "before:pointer-events-none", "before:absolute", "before:h-3.5", "before:w-3.5", "before:rounded-full", "before:bg-transparent", "before:content-['']", "after:absolute", "after:z-[2]", "after:-mt-[0.1875rem]", "after:h-5", "after:w-5", "after:rounded-full", "after:border-none", "after:bg-neutral-100", "after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)]", "after:transition-[background-color_0.2s,transform_0.2s]", "after:content-['']", "checked:bg-primary", "checked:after:absolute", "checked:after:z-[2]", "checked:after:-mt-[3px]", "checked:after:ml-[1.0625rem]", "checked:after:h-5", "checked:after:w-5", "checked:after:rounded-full", "checked:after:border-none", "checked:after:bg-primary", "checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)]", "checked:after:transition-[background-color_0.2s,transform_0.2s]", "checked:after:content-['']", "hover:cursor-pointer", "focus:outline-none", "focus:ring-0", "focus:before:scale-100", "focus:before:opacity-[0.12]", "focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)]", "focus:before:transition-[box-shadow_0.2s,transform_0.2s]", "focus:after:absolute", "focus:after:z-[1]", "focus:after:block", "focus:after:h-5", "focus:after:w-5", "focus:after:rounded-full", "focus:after:content-['']", "checked:focus:border-primary", "checked:focus:bg-primary", "checked:focus:before:ml-[1.0625rem]", "checked:focus:before:scale-100", "checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]", "checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]", "dark:bg-neutral-600", "dark:after:bg-neutral-400", "dark:checked:bg-primary", "dark:checked:after:bg-primary", "dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)]", "dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"],
            id : "del-toggle",
            attrs : {
                type : "checkbox",
                checked : false,
            }
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
            classes : ["mx-1.5", "mt-1", "p-1.5", "rounded-full", "w-7", "text-xs", "font-bold", "cursor-pointer"],
            text : ""
        }
    },
    calItemElTree : {
        itemDivEl : {
            element : "div",
            classes : ["flex", "justify-between", "text-xs", "my-0.5", "mx-1", "px-2", "cursor-pointer"],
            attrs : {
                "data-modal-target" : "eventModal",
                "data-modal-toggle" : "eventModal",
                draggable : true,
            },
        },
        itemCircleEl : {
            element : "span",
            classes : ["w-3", "h-3", "rounded-full", "mr-1", "mt-0.5"]
        },
        itemPEl : {
            element : "p",
            classes : ["truncate", "w-20"],
            text : ""
        },
        itemSpanEl : {
            element : "span",
            classes : ["hidden", "lg:block", "ml-auto", "truncate", "w-10"],
            text : ""
        },
    },

    weekName : ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    monName : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    
}

export default calendarElTree