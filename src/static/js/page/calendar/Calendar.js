import calendarElTree from "./calElTree.js"
import { SetPage, arrToObj } from "../../core/Creators.js"
import { catColor } from "./calData.js"

// apis get fetch
const res = await fetch("/apis/Calendar/G")
const result = await res.json()
let events = []
const menu = result.datas.data.values[0]
result.datas.data.values.shift()
const type = result.datas.data.values[0]
result.datas.data.values.shift()
result.datas.data.values.map((value) => {
	events.push(arrToObj(menu, type, value))
})

//todos
const todores = await fetch("/apis/Todos/D")
const todoresult = await todores.json()
let todos = []
const tmenu = todoresult.datas.data.values[0]
todoresult.datas.data.values.shift()
const ttype = todoresult.datas.data.values[0]
todoresult.datas.data.values.shift()
todoresult.datas.data.values.map((val) => {
    todos.push(arrToObj(tmenu, ttype, val))
})
console.table(todos)

//url calendar?year=2023&month=03&day=01
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const year = urlParams.get('year')
const month = urlParams.get('month')
const day = urlParams.get('day')

//0~9 => 00~09
const getFullNum = (time) => time < 10 ? `0${time}` : time

//date
let date = new Date()
if(year || month || day){
    let y, m, d = null
    year ? y = year : y = date.getFullYear()
    month ? m = month : m = date.getMonth()+1
    day ? d = day : d = date.getDate()
    date = new Date(`${y}-${m}-${d}`)
}
date.getTimezoneOffset()

const TODAY = date.getDate()
const MONTH = date.getMonth() + 1
const YEAR = date.getFullYear()
const STARTWEEK = new Date(YEAR, MONTH-1, 1).getDay()
const NEXTMONWEEK = new Date(YEAR, MONTH, 1).getDay()
const LASTALLDAY = new Date(YEAR, MONTH-1, 0).getDate()
const THISALLDAY = new Date(YEAR, MONTH, 0).getDate()
//현재 년도 이벤트만!!
events.find((event) => {(new Date(event.start)).getFullYear === YEAR})

let dragged = null //drag item

export const Calendar = new SetPage(calendarElTree.calMonthElTree)

const CalEvent = new SetPage(calendarElTree.eventModalElTree)

Calendar.page.main.title.element.innerText = `${calendarElTree.monName[MONTH-1]} ${YEAR}`
Calendar
    .append("main.main", "main.monMain", "main.monOuterDiv", "main.titleDiv", "main.title")
    .append("main.monOuterDiv", "main.btnGroup")//"main.monOuterDiv", "main.monInnerDiv", 
    .append("main.btnGroup", "main.prevBtn", "main.prevSvg", "main.prevPath")
    .append("main.btnGroup", "main.todayBtn")
    .append("main.btnGroup", "main.nextBtn", "main.nextSvg", "main.nextPath")
    .append("main.monMain", "main.weekNameDiv")
    .append("main.monMain", "main.monGridDiv")
Calendar
    .append(Calendar.page.main.main.element, CalEvent.page.main.eventModalBg.element)

    Calendar.listElement("days", THISALLDAY, calendarElTree.calMonCellElTree)
    Calendar.listElement("weekName", 7, calendarElTree.calWeekTitleElTree)
    Calendar.listElement("lastDay", STARTWEEK, calendarElTree.calMonCellElTree)
    Calendar.listElement("nextDay", 42-(STARTWEEK+THISALLDAY), calendarElTree.calMonCellElTree)
    Calendar.listElement("items", events.length, calendarElTree.calItemElTree)

    //Loading .....
// Calendar.page.main.monMain.element.classList.add("opacity-20")
// Calendar
//     .append("main.main", "main.loadingDiv", "main.loadingSvg")
//     .append("main.loadingSvg", "main.loadingPath1")
//     .append("main.loadingSvg", "main.loadingPath2")
//     .append("main.loadingSvg", "main.loadingSpan")

//이전, 현재, 다음 월 버튼
let curYear = YEAR
let curMon = MONTH
let curDay = ((new Date()).getDate())
Calendar.page.main.prevBtn.element.addEventListener("click", () => {
    MONTH === 1 ? (curYear =- 1, curMon = 12) : curMon = curMon - 1
    window.location.href = `/calendar?year=${curYear}&month=${curMon}&day=${curDay}`
})
Calendar.page.main.todayBtn.element.addEventListener("click", () => {
    window.location.href = `/calendar`
})
Calendar.page.main.nextBtn.element.addEventListener("click", () => {
    MONTH === 12 ? (curYear = curYear + 1, curMon = 1) : curMon = curMon + 1
    window.location.href = `/calendar?year=${curYear}&month=${curMon}&day=${curDay}`
})

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
    ((new Date()).getMonth() + 1) === MONTH && (i+1) === TODAY && day.monCellTitle.element.classList.add("bg-blue-500", "text-white")
    const dayNum = getFullNum(i+1)
    day.monCellTitle.element.innerText = dayNum
    //Drag
    day.monCellDiv.element.addEventListener("dragover", (e) => {e.preventDefault()})
    day.monCellDiv.element.addEventListener("drop", async (e) => {
        e.preventDefault()
        if(e.target.classList.contains("drag-zone")){
            const moveData = events.find((d) => d.id === dragged[1])
            if(MONTH != moveData.start.getMonth()+1){
                moveData.start.setMonth(MONTH-1)
                moveData.end.setMonth(MONTH-1)
            }
            moveData.start.setDate(parseInt(dayNum)+1)
            moveData.end.setDate(parseInt(dayNum)+1)
            e.target.appendChild(dragged[0])
            const putRes = await fetch("/apis", {
                method : "PUT",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({ "data" : moveData })
            })
            const putResult = await putRes.json()
            putResult.error && console.log(putResult.error)
        }
    })
    Calendar
        .append(day.monCellDiv.element, day.monCellTitle.element)
        .append(Calendar.page.main.monGridDiv.element, day.monCellDiv.element)
})

Calendar.page.nextDay.map((nextday, i) => {
    (NEXTMONWEEK + i + 1) % 7 === 1 && nextday.monCellTitle.element.classList.add("text-red-400");
    (NEXTMONWEEK + i + 1) % 7 === 0 && nextday.monCellTitle.element.classList.add("text-blue-400");
    
    nextday.monCellDiv.element.classList.remove("bg-white", "text-gray-800")
    nextday.monCellDiv.element.classList.add("bg-gray-100", "text-gray-500")
    const dayNum = getFullNum(i+1)
    nextday.monCellTitle.element.innerText = dayNum
    Calendar
        .append(nextday.monCellDiv.element, nextday.monCellTitle.element)
        .append(Calendar.page.main.monGridDiv.element, nextday.monCellDiv.element)
})

// Calendar.page.main.main.element.addEventListener("click", (e) => {
//     // CalEvent.page.main.eventInputModal.element.
//     if(e.target){
//         CalEvent.page.main.eventInputModal.element.classList.add("hidden")
//     }
//     console.log(CalEvent.page.main.eventInputModal.element.classList.contains("hidden"))
//     console.log(e.target)
// })

CalEvent
    .append("main.eventModalBg", "main.eventModalMain", "main.eventModalOuter", "main.eventModalLogo", "main.eventModalLogoSvg")
    .append("main.eventModalLogoSvg", "main.eventModalLogoPath1")
    .append("main.eventModalLogoSvg", "main.eventModalLogoPath2")
    .append("main.eventModalLogoSvg", "main.eventModalLogoPath3")
    .append("main.eventModalLogo", "main.eventCloseBtn")//, "main.eventCloseSvg", "main.eventClosePath")
    // .append("main.eventCloseSvg", "main.eventCloseLine1")
    // .append("main.eventCloseSvg", "main.eventCloseLine2")
    // .append("main.eventInputModal", "main.eventContentDiv")
    // .append("main.eventContentDiv", "main.closeBtn", "main.closeSvg", "main.closePath")
    .append("main.eventModalOuter", "main.eventTitle")
    .append("main.eventModalOuter", "main.eventTitleLabel")
    .append("main.eventModalOuter", "main.eventTitleInput")
    .append("main.eventModalOuter", "main.eventStartLabel")
    .append("main.eventModalOuter", "main.eventStartInput")
    .append("main.eventModalOuter", "main.eventEndLabel")
    .append("main.eventModalOuter", "main.eventEndInput")
    .append("main.eventModalOuter", "main.eventCategoryLabel")
    .append("main.eventModalOuter", "main.eventCategoryInput")
    .append("main.eventModalOuter", "main.eventSubmitBtn")
    .append("main.eventModalOuter", "main.eventCancleBtn")

// document.addEventListener("click", (e) => {
//     if(!CalEvent.page.main.eventModalBg.element.getAttribute("aria-hidden")){
//         if(CalEvent.page.main.eventModalBg.element.classList.contains(e.target)){
//             CalEvent.page.main.eventModalBg.element.classList.add("hidden")
//             CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", true)
//         }
//     }
// })
CalEvent.page.main.eventCloseBtn.element.addEventListener("click", (e) => {
    CalEvent.page.main.eventModalBg.element.classList.add("hidden")
    CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", true)
})

Calendar.page.items.map((item, i) => {

    item.itemDiv.element.addEventListener("dragstart", (e) => {
        dragged = [e.target, events[i].id]
    })

    item.itemDiv.element.addEventListener("click", (e)=>{
        CalEvent.page.main.eventModalBg.element.classList.toggle("hidden")
        if(CalEvent.page.main.eventModalBg.element.getAttribute("aria-hidden")){
            CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", false)
        }
        CalEvent.page.main.eventTitle.element.innerText = `${events[i].title}`
        CalEvent.page.main.eventTitleInput.element.value = `${events[i].title}`
        CalEvent.page.main.eventStartInput.element.value = `${events[i].start}`
        CalEvent.page.main.eventEndInput.element.value = `${events[i].end}`
        CalEvent.page.main.eventCategoryInput.element.value = `${events[i].category}`
    })

    const startDate = events[i].start
    const eventYear = startDate.getFullYear()
    const eventMonth = startDate.getMonth() + 1
    const eventDay = startDate.getDate() - 1

    item.itemP.element.innerText = events[i].title
    item.itemCircle.element.classList.add(catColor[events[i].category])
    item.itemSpan.element.innerText = `${getFullNum(startDate.getHours())} : ${getFullNum(startDate.getMinutes())}`
    if(eventYear === YEAR && eventMonth === MONTH){
        if(eventDay === 0){
            Calendar
                .append(item.itemDiv.element, item.itemCircle.element) // between 처리 예정
                .append(item.itemDiv.element, item.itemP.element)
                .append(item.itemDiv.element, item.itemSpan.element)
                .append(Calendar.page.lastDay[STARTWEEK-1].monCellDiv.element, item.itemDiv.element)
        }else{
            Calendar
                .append(item.itemDiv.element, item.itemCircle.element) // between 처리 예정
                .append(item.itemDiv.element, item.itemP.element)
                .append(item.itemDiv.element, item.itemSpan.element)
                .append(Calendar.page.days[eventDay-1].monCellDiv.element, item.itemDiv.element)
        }
    }else if(eventYear === YEAR && eventMonth === MONTH - 1){
        const thisEventDay = (eventDay - LASTALLDAY) + STARTWEEK // lastMonth
        if(thisEventDay >= 0){
            Calendar
                .append(item.itemDiv.element, item.itemCircle.element)
                .append(item.itemDiv.element, item.itemP.element)
                .append(item.itemDiv.element, item.itemSpan.element)
                .append(Calendar.page.lastDay[thisEventDay-1].monCellDiv.element, item.itemDiv.element)
        }
    }else if(eventYear === YEAR && eventMonth === MONTH + 1){
        if(eventDay < Calendar.page.nextDay.length){
            if(eventDay === 0){
                Calendar
                    .append(item.itemDiv.element, item.itemCircle.element) // between 처리 예정
                    .append(item.itemDiv.element, item.itemP.element)
                    .append(item.itemDiv.element, item.itemSpan.element)
                    .append(Calendar.page.days[THISALLDAY-1].monCellDiv.element, item.itemDiv.element)
            }else{
                Calendar
                    .append(item.itemDiv.element, item.itemCircle.element)
                    .append(item.itemDiv.element, item.itemP.element)
                    .append(item.itemDiv.element, item.itemSpan.element)
                    .append(Calendar.page.nextDay[eventDay-1].monCellDiv.element, item.itemDiv.element)
            }
        }
    }
})



    // day.monCellDiv.element.addEventListener("click", (e) => {
    //     const rect = day.monCellDiv.element.getBoundingClientRect()
    //     //modal위치가 전체창의 반 보다 커지면 위치를 이동 X,y 모두 적용해야 함
    //     const cellX = rect.left + (rect.width/2)
    //     const cellY = rect.top + (rect.height/2)
    //     // console.log(cellX, cellY)
    //     Calendar.page.main.eventInputModal.element.style.left = `${cellX}px`
    //     Calendar.page.main.eventInputModal.element.style.top = `${cellY}px`
    //     Calendar.page.main.eventInputModal.element.classList.toggle("hidden")
    //             // console.log(Calendar.page.main.eventInputModal.element)
    // })

