

const calendarElTree = {
    calMonthElTree : {
        mainEl : {
            element : "main",
            classes : ["container", "mx-auto", "px-4","text-gray-700"]
        },
        monOuterDivEl : {
            element : "div",
            classes : ["flex", "flex-grow", "w-full", "h-[calc(100vh-80px)]","overflow-auto"]
        },
        monInnerDivEl : {
            element : "div",
            classes : ["flex", "flex-col", "flex-grow"]
        },
        monGridDivEl : {
            element : "div",
            classes : ["grid", "flex-grow", "w-full", "h-auto", "grid-cols-7", "grid-rows-5", "gap-px", "pt-px", "mt-1", "bg-gray-200"]
        },
    
    },
    calMonCellElTree : {
        monCellDivEl : {
            element : "div",
            classes : ["relative", "flex", "flex-col", "bg-white", "group"]
        },
        monCellTitleEl : {
            element : "h1",
            classes : ["mx-2", "my-1", "text-xs", "font-bold"],
            text : ""
        }
    }
    
}

export default calendarElTree