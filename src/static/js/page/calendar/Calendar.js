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
Calendar.listElement("weekName", 7, calendarElTree.calWeekTitleElTree)
Calendar.listElement("lastDay", STARTWEEK, calendarElTree.calMonCellElTree)
Calendar.listElement("nextDay", 42-(STARTWEEK+THISALLDAY), calendarElTree.calMonCellElTree)

Calendar.page.main.title.element.innerText = `${YEAR}년 ${MONTH}월`

Calendar
    .append("main.main", "main.monOuterDiv", "main.monInnerDiv", "main.titleDiv", "main.title")
    .append("main.monInnerDiv", "main.weekNameDiv")
    .append("main.monInnerDiv", "main.monGridDiv")

Calendar.page.weekName.map((week, i) => {
    i === 0 && week.weekTitle.element.classList.add("text-red-500");
    i === 6 && week.weekTitle.element.classList.add("text-blue-600");
    week.weekTitle.element.innerText = calendarElTree.weekName[i]
    Calendar
        .append(week.weekTitleDiv.element, week.weekTitle.element)
        .append(Calendar.page.main.weekNameDiv.element, week.weekTitleDiv.element)
})

let lastday = LASTWEEK - STARTWEEK + 1
Calendar.page.lastDay.map((last, i) => {
    i === 0 && last.monCellTitle.element.classList.add("text-red-400")
    i === 6 && last.monCellTitle.element.classList.add("text-blue-400")
    last.monCellDiv.element.classList.remove("bg-white", "text-gray-800")
    last.monCellDiv.element.classList.add("bg-gray-100", "text-gray-500")
    last.monCellTitle.element.innerText = lastday
    lastday++
    Calendar
        .append(last.monCellDiv.element, last.monCellTitle.element)
        .append(Calendar.page.main.monGridDiv.element, last.monCellDiv.element)
})

Calendar.page.days.map((day, i) => {
    ((i+STARTWEEK)/7 === 1 || (i+STARTWEEK)/14 === 1 || (i+STARTWEEK)/21 === 1 || (i+STARTWEEK)/28 === 1 || (i+STARTWEEK)/35 === 1)
        && day.monCellTitle.element.classList.add("text-red-500");
    ((i+STARTWEEK) === 6 || (i+STARTWEEK) === 13 || (i+STARTWEEK) === 20 || (i+STARTWEEK) === 27 || (i+STARTWEEK) === 34)
        && day.monCellTitle.element.classList.add("text-blue-600");
    
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
    ((i+LASTWEEK)/29 === 1 || (i+LASTWEEK)/36 === 1 )
        && nextday.monCellTitle.element.classList.add("text-red-400");
    ((i+LASTWEEK) === 28 || (i+LASTWEEK) === 35)
        && nextday.monCellTitle.element.classList.add("text-blue-400");
    
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
