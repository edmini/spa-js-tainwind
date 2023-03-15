import calendarElTree from "./calElTree.js"
import { SetPage } from "../../core/Creators.js"

const date = new Date()
const TODAY = date.getDate()
const MONTH = date.getMonth()
const YEAR = date.getFullYear()
const LASTWEEK = new Date(YEAR, MONTH, 0).getDate()
const STARTWEEK = new Date(YEAR, MONTH, 1).getDay()
const THISALLDAY = new Date(YEAR, MONTH+1, 0).getDate()


const Calendar = new SetPage(calendarElTree.calMonthElTree)

Calendar.listElement("days", 31, calendarElTree.calMonCellElTree)
Calendar.listElement("lastDay", STARTWEEK, calendarElTree.calMonCellElTree)
Calendar.listElement("nextDay", 35-(STARTWEEK+THISALLDAY), calendarElTree.calMonCellElTree)
Calendar
    .append("main.main", "main.monOuterDiv", "main.monInnerDiv", "main.titleDiv", "main.title")
    .append("main.monInnerDiv", "main.monGridDiv")

let ld = LASTWEEK - STARTWEEK + 1
Calendar.page.lastDay.map((last) => {
    last.monCellDiv.element.classList.remove("bg-white", "text-gray-800")
    last.monCellDiv.element.classList.add("bg-gray-100", "text-gray-500")
    last.monCellTitle.element.innerText = ld
    Calendar
        .append(last.monCellDiv.element, last.monCellTitle.element)
        .append(Calendar.page.main.monGridDiv.element, last.monCellDiv.element)
    ld++
})

Calendar.page.days.map((day, i) => {
    let dayNum = 0
    i < 9 ? dayNum = "0"+(i+1) : dayNum = i+1
    day.monCellTitle.element.innerText = dayNum
    if( (i+1) === TODAY ){
        day.monCellTitle.element.classList.add("bg-blue-500", "text-white")
    }
    Calendar
        .append(day.monCellDiv.element, day.monCellTitle.element)
        .append(Calendar.page.main.monGridDiv.element, day.monCellDiv.element)
})

Calendar.page.nextDay.map((nextday, i)=>{
    nextday.monCellDiv.element.classList.remove("bg-white", "text-gray-800")
    nextday.monCellDiv.element.classList.add("bg-gray-100", "text-gray-500")
    let dayNum = 0
    i < 9 ? dayNum = "0"+(i+1) : dayNum = i+1
    nextday.monCellTitle.element.innerText = dayNum
    Calendar
        .append(nextday.monCellDiv.element, nextday.monCellTitle.element)
        .append(Calendar.page.main.monGridDiv.element, nextday.monCellDiv.element)
})
// console.log(Calendar)


export default Calendar
