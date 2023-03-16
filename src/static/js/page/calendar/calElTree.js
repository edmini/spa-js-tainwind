

const calendarElTree = {
    calMonthElTree : {
        mainEl : {
            element : "div",
            classes : ["lg:container", "mx-auto", "lg:px-20"]
        },
        monOuterDivEl : {
            element : "div",
            classes : ["flex", "flex-grow", "w-full", "h-[calc(100vh-80px)]","overflow-auto"]
        },
        monInnerDivEl : {
            element : "div",
            classes : ["flex", "flex-col", "flex-grow"]
        },
        titleDivEl : {
            element : "div",
            classes : ["h-20", "bg-white", "text-center"]
        },
        titleEl : {
            element : "h1",
            classes : ["pt-5", "text-gray-500", "text-3xl"],
            text : "Calendar"
        },
        weekDivEl : {
            element : "div",
            classes : ["grid", "flex-grow", "w-full", "grid-cold-7", "gap-px", "pt-px", "bg-white"]
        },
        monGridDivEl : {
            element : "div",
            classes : ["grid", "flex-grow", "w-full", "h-auto", "grid-cols-7", "grid-rows-5", "gap-px", "pt-px", "mt-1", "bg-gray-300", "rounded-sm"]
        },
    
    },
    calWeekTitleElTree : {
        weekTitleDivEl : {
            element : "div",
        },
        weekTitleEl : {
            element : "h3",
        }
    },
    calMonCellElTree : {
        monCellDivEl : {
            element : "div",
            classes : ["relative", "flex", "flex-col", "bg-white", "group","text-gray-800", "rounded-sm"]
        },
        monCellTitleEl : {
            element : "h1",
            classes : ["m-1.5", "p-1.5", "rounded-full", "w-7", "text-xs", "font-bold"],
            text : ""
        }
    }
    
}

export default calendarElTree