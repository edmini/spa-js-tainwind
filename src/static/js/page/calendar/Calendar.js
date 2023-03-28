import calendarElTree from "./calElTree.js"
import { SetPage, arrToObj } from "../../core/Creators.js"
import {catColor} from "./calData.js"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const year = urlParams.get('year')
const month = urlParams.get('month')
const day = urlParams.get('day')
// console.log(day);

let date = new Date()
if(year || month || day){
    let y, m, d = null
    year ? y = year : y = date.getFullYear()
    month ? m = month : m = date.getMonth()+1
    day ? d = day : d = date.getDate()
    date = new Date(`${y}-${m}-${d}`)
}

const res = await fetch("/apis")
const result = await res.json()

let events = []
const menu = result.datas.data.values[0]
result.datas.data.values.shift()
const type = result.datas.data.values[0]
result.datas.data.values.shift()
result.datas.data.values.map((value) => {
	events.push(arrToObj(menu, type, value))
})

const TODAY = date.getDate()
const MONTH = date.getMonth() + 1
const YEAR = date.getFullYear()
const STARTWEEK = new Date(YEAR, MONTH-1, 1).getDay()
const NEXTMONWEEK = new Date(YEAR, MONTH, 1).getDay()
const LASTALLDAY = new Date(YEAR, MONTH-1, 0).getDate()
const THISALLDAY = new Date(YEAR, MONTH, 0).getDate()

let dragged = null //drag item

export const Calendar = new SetPage(calendarElTree.calMonthElTree)

Calendar.page.main.title.element.innerText = `${calendarElTree.monName[MONTH-1]} ${YEAR}`
Calendar
    .append("main.main", "main.monOuterDiv", "main.monInnerDiv", "main.titleDiv", "main.title")
    .append("main.monInnerDiv", "main.weekNameDiv")
    .append("main.monInnerDiv", "main.monGridDiv")

Calendar.listElement("days", THISALLDAY, calendarElTree.calMonCellElTree)
Calendar.listElement("weekName", 7, calendarElTree.calWeekTitleElTree)
Calendar.listElement("lastDay", STARTWEEK, calendarElTree.calMonCellElTree)
Calendar.listElement("nextDay", 42-(STARTWEEK+THISALLDAY), calendarElTree.calMonCellElTree)
Calendar.listElement("items", events.length, calendarElTree.calItemElTree)

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
    day.monCellDiv.element.addEventListener("dragover", (e) => {e.preventDefault()})
    day.monCellDiv.element.addEventListener("drop", async(e) => {
        e.preventDefault()
        if(e.target.classList.contains("drag-zone")){
            const moveData = events.find((d)=>d.id === dragged[1])
            // console.log(i)
            // console.log(dayNum, parseInt(dayNum))
            // console.log(moveData.start)
            // 이전달 다음달 처리예정
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

const getFullTimeNum = (time) => {
    if(time < 10){
        return "0"+time
    }
    return time
}

Calendar.page.items.map((item, i) => {
    const startDate = events[i].start
    const eventMonth = startDate.getMonth() + 1
    const eventDay = startDate.getDate() - 1

    item.itemDiv.element.addEventListener("dragstart", (e) => {
        dragged = [e.target, events[i].id]
    })
    item.itemP.element.innerText = events[i].title
    item.itemCircle.element.classList.add(catColor[events[i].category])
    item.itemSpan.element.innerText = `${getFullTimeNum(startDate.getHours())} : ${getFullTimeNum(startDate.getMinutes())}`
    if(eventMonth === MONTH){
        if((eventDay) === 0){
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
    }else if(eventMonth === MONTH - 1){
        const thisEventDay = (eventDay - LASTALLDAY) + STARTWEEK // lastMonth
        if(thisEventDay >= 0){
            Calendar
                .append(item.itemDiv.element, item.itemCircle.element)
                .append(item.itemDiv.element, item.itemP.element)
                .append(item.itemDiv.element, item.itemSpan.element)
                .append(Calendar.page.lastDay[thisEventDay-1].monCellDiv.element, item.itemDiv.element)
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


export const CalMobile = new SetPage(calendarElTree.calMobileElTree)
// Calendar.page.main.main.element.appendChild(CalMobile.page.main.mobileMain.element)
CalMobile.page.main.titleSpan.element.innerText = `${calendarElTree.monName[MONTH-1]} ${YEAR}`
// CalMobile.page.main.nextBtn.element.addEventListener("click", () => {
//     date = new Date("2023-07-05")
//     console.log(date)
// })

CalMobile
    .append("main.main", "main.outerDiv", "main.innerCalDiv", "main.calOuterDiv", "main.titleSpan")
    .append("main.calOuterDiv", "main.prevNextBtnDiv")
    .append("main.prevNextBtnDiv", "main.prevBtn", "main.prevSvg", "main.prevPath")
    // .append("main.prevSvg", "main.prevPolyline")
    .append("main.prevNextBtnDiv", "main.nextBtn", "main.nextSvg", "main.nextPath")
    // .append("main.nextSvg", "main.nextPolyline")
    .append("main.outerDiv", "main.calTableDiv", "main.calTable", "main.calThead", "main.calTheadTr")
    .append("main.calTable", "main.calTbody")
    .append("main.calTbody", "main.calTbodyTr1")
    .append("main.calTbody", "main.calTbodyTr2")
    .append("main.calTbody", "main.calTbodyTr3")
    .append("main.calTbody", "main.calTbodyTr4")
    .append("main.calTbody", "main.calTbodyTr5")
    .append("main.calTbody", "main.calTbodyTr6")
    .append("main.outerDiv", "main.calListDiv", "main.calListInnerDiv")

CalMobile.listElement("th", calendarElTree.mobileWeekName.length, calendarElTree.calMobileTitleElTree)
CalMobile.listElement("prevTd", STARTWEEK, calendarElTree.calMobileNumElTree)
CalMobile.listElement("td", THISALLDAY, calendarElTree.calMobileNumElTree)
CalMobile.listElement("events", )

CalMobile.page.th.map((head, i) => {
    head.calTitleP.element.innerText = calendarElTree.mobileWeekName[i]
    CalMobile.append(head.calTh.element, head.calTitleDiv.element, head.calTitleP.element)
    CalMobile.append(CalMobile.page.main.calTheadTr.element, head.calTh.element)
})

CalMobile.page.prevTd.map((pTd) => {
    CalMobile
        .append(pTd.calTd.element, pTd.calTdDiv.element)
        .append(CalMobile.page.main.calTbodyTr1.element, pTd.calTd.element)
})

CalMobile.page.td.map((day, i) =>{
    if(i+1 === TODAY){
        CalMobile.page.main.calTodayA.element.innerText = i+1
    }else{
        day.calTdP.element.innerText = i+1
    }
    if(i < 7-STARTWEEK){
        if(i+1 === TODAY){
            CalMobile
                .append(day.calTd.element, CalMobile.page.main.calTodayTdDiv.element, CalMobile.page.main.calTodayDiv.element, CalMobile.page.main.calTodayA.element)
        }else{
            CalMobile
                .append(day.calTd.element, day.calTdDiv.element, day.calTdP.element)
        }
        CalMobile
            .append(CalMobile.page.main.calTbodyTr1.element, day.calTd.element)
    }else if(i < 14-STARTWEEK){
        if(i+1 === TODAY){
            CalMobile
                .append(day.calTd.element, CalMobile.page.main.calTodayTdDiv.element, CalMobile.page.main.calTodayDiv.element, CalMobile.page.main.calTodayA.element)
        }else{
            CalMobile
                .append(day.calTd.element, day.calTdDiv.element, day.calTdP.element)
        }
        CalMobile
            .append(CalMobile.page.main.calTbodyTr2.element, day.calTd.element)
    }else if(i < 21-STARTWEEK){
        if(i+1 === TODAY){
            CalMobile
                .append(day.calTd.element, CalMobile.page.main.calTodayTdDiv.element, CalMobile.page.main.calTodayDiv.element, CalMobile.page.main.calTodayA.element)
        }else{
            CalMobile
                .append(day.calTd.element, day.calTdDiv.element, day.calTdP.element)
        }
        CalMobile
            .append(CalMobile.page.main.calTbodyTr3.element, day.calTd.element)
    }else if(i < 28-STARTWEEK){
        if(i+1 === TODAY){
            CalMobile
                .append(day.calTd.element, CalMobile.page.main.calTodayTdDiv.element, CalMobile.page.main.calTodayDiv.element, CalMobile.page.main.calTodayA.element)
        }else{
            CalMobile
                .append(day.calTd.element, day.calTdDiv.element, day.calTdP.element)
        }
        CalMobile
            .append(CalMobile.page.main.calTbodyTr4.element, day.calTd.element)
    }else if(i < 35-STARTWEEK){
        if(i+1 === TODAY){
            CalMobile
                .append(day.calTd.element, CalMobile.page.main.calTodayTdDiv.element, CalMobile.page.main.calTodayDiv.element, CalMobile.page.main.calTodayA.element)
        }else{
            CalMobile
                .append(day.calTd.element, day.calTdDiv.element, day.calTdP.element)
        }
        CalMobile
            .append(CalMobile.page.main.calTbodyTr5.element, day.calTd.element)
    }else if(i < THISALLDAY){
        if(i+1 === TODAY){
            CalMobile
                .append(day.calTd.element, CalMobile.page.main.calTodayTdDiv.element, CalMobile.page.main.calTodayDiv.element, CalMobile.page.main.calTodayA.element)
        }else{
            CalMobile
                .append(day.calTd.element, day.calTdDiv.element, day.calTdP.element)
        }
        CalMobile
            .append(CalMobile.page.main.calTbodyTr6.element, day.calTd.element)
    }
})


// console.log(CalMobile)
