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
            classes : ["w-3", "h-3", "rounded-full", "bg-blue-300"]
        },
        itemPEl : {
            element : "p",
            classes : ["truncate", "w-20"],
            text : ""
        },
        itemSpanEl : {
            element : "span",
            text : ""
        },
    },

    weekName : ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    
}

export default calendarElTree