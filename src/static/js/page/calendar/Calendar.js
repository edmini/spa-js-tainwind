import calendarElTree from "./calElTree.js"
import { SetPage } from "../../core/Creators.js"
import calDatas from "./calData.js"

const date = new Date()
const TODAY = date.getDate()
const MONTH = date.getMonth() + 1
const YEAR = date.getFullYear()
const STARTWEEK = new Date(YEAR, MONTH-1, 1).getDay()
const NEXTMONWEEK = new Date(YEAR, MONTH, 1).getDay()
const LASTALLDAY = new Date(YEAR, MONTH-1, 0).getDate()
const THISALLDAY = new Date(YEAR, MONTH, 0).getDate()

let dragged = null //drag item

const Calendar = new SetPage(calendarElTree.calMonthElTree)

Calendar.page.main.title.element.innerText = `${YEAR}년 ${MONTH}월`
Calendar
    .append("main.main", "main.monOuterDiv", "main.monInnerDiv", "main.titleDiv", "main.title")
    .append("main.monInnerDiv", "main.weekNameDiv")
    .append("main.monInnerDiv", "main.monGridDiv")

Calendar.listElement("days", THISALLDAY, calendarElTree.calMonCellElTree)
Calendar.listElement("weekName", 7, calendarElTree.calWeekTitleElTree)
Calendar.listElement("lastDay", STARTWEEK, calendarElTree.calMonCellElTree)
Calendar.listElement("nextDay", 42-(STARTWEEK+THISALLDAY), calendarElTree.calMonCellElTree)
Calendar.listElement("items", calDatas.length, calendarElTree.calItemElTree)

// Week Name List
Calendar.page.weekName.map((week, i) => {
    i === 0 && week.weekTitle.element.classList.add("text-red-500");
    i === 6 && week.weekTitle.element.classList.add("text-blue-600");
    week.weekTitle.element.innerText = calendarElTree.weekName[i]
    Calendar
        .append(week.weekTitleDiv.element, week.weekTitle.element)
        .append(Calendar.page.main.weekNameDiv.element, week.weekTitleDiv.element)
})

// Last Month
let lastday = LASTALLDAY - STARTWEEK + 1
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
    (STARTWEEK + i + 1) % 7 === 1 && day.monCellTitle.element.classList.add("text-red-500");
    (STARTWEEK + i + 1) % 7 === 0 && day.monCellTitle.element.classList.add("text-blue-600");
    
    (i+1) === TODAY && day.monCellTitle.element.classList.add("bg-blue-500", "text-white")
    let dayNum = 0
    i < 9 ? dayNum = "0"+(i+1) : dayNum = i+1
    day.monCellTitle.element.innerText = dayNum

    //Drag
    day.monCellDiv.element.addEventListener("dragover", (e) => {
        e.preventDefault()
    })
    day.monCellDiv.element.addEventListener("drop", (e) => {
        e.preventDefault()
        if(e.target.classList.contains("drag-zone")){
            e.target.appendChild(dragged)
        }
    })
    Calendar
        .append(day.monCellDiv.element, day.monCellTitle.element)
        .append(Calendar.page.main.monGridDiv.element, day.monCellDiv.element)
})

Calendar.page.nextDay.map((nextday, i)=>{
    (NEXTMONWEEK + i + 1) % 7 === 1 && nextday.monCellTitle.element.classList.add("text-red-400");
    (NEXTMONWEEK + i + 1) % 7 === 0 && nextday.monCellTitle.element.classList.add("text-blue-400");
    
    nextday.monCellDiv.element.classList.remove("bg-white", "text-gray-800")
    nextday.monCellDiv.element.classList.add("bg-gray-100", "text-gray-500")
    let dayNum = 0
    i < 9 ? dayNum = "0"+(i+1) : dayNum = i+1
    nextday.monCellTitle.element.innerText = dayNum
    Calendar
        .append(nextday.monCellDiv.element, nextday.monCellTitle.element)
        .append(Calendar.page.main.monGridDiv.element, nextday.monCellDiv.element)
})

Calendar.page.items.map((item, i) => {
    const startDate = new Date(calDatas[i].start)
    const eventMonth = startDate.getMonth() + 1
    const eventDay = startDate.getDate() - 1

    item.itemDiv.element.addEventListener("dragstart", (e) => {
        dragged = e.target
    })
    item.itemP.element.innerText = calDatas[i].title
    item.itemSpan.element.innerText = `${startDate.getHours()} : ${startDate.getMinutes()}`
    if(eventMonth === MONTH){
        Calendar
            .append(item.itemDiv.element, item.itemCircle.element) // between 처리 예정
            .append(item.itemDiv.element, item.itemP.element)
            .append(item.itemDiv.element, item.itemSpan.element)
            .append(Calendar.page.days[eventDay].monCellDiv.element, item.itemDiv.element)
    }else if(eventMonth === MONTH - 1){
        const thisEventDay = (eventDay - LASTALLDAY) + STARTWEEK // lastMonth
        if(thisEventDay >= 0){
            Calendar
                .append(item.itemDiv.element, item.itemCircle.element)
                .append(item.itemDiv.element, item.itemP.element)
                .append(item.itemDiv.element, item.itemSpan.element)
                .append(Calendar.page.lastDay[thisEventDay].monCellDiv.element, item.itemDiv.element)
        }
    }else if(eventMonth === MONTH + 1){
        if(eventDay < Calendar.page.nextDay.length){
            Calendar
                .append(item.itemDiv.element, item.itemCircle.element)
                .append(item.itemDiv.element, item.itemP.element)
                .append(item.itemDiv.element, item.itemSpan.element)
                .append(Calendar.page.nextDay[eventDay].monCellDiv.element, item.itemDiv.element)
        }
    }
})

// console.log(Calendar)

export default Calendar
