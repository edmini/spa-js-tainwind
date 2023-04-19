import calendarElTree from "./calElTree.js"
import { SetPage, makeTag, arrToObj } from "../../core/Creators.js"
import { catColor } from "./calData.js"

// apis get fetch
const res = await fetch("/apis/Calendar/F")
const result = await res.json()
let events = []
const menu = result.datas.data.values[0]
result.datas.data.values.shift()
const type = result.datas.data.values[0]
result.datas.data.values.shift()
result.datas.data.values.map((value) => {
	events.push(arrToObj(menu, type, value))
})

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

// Calendar day cell
Calendar.page.days.map((day, i) => {
    (STARTWEEK + i + 1) % 7 === 1 && day.monCellTitle.element.classList.add("text-red-500");
    (STARTWEEK + i + 1) % 7 === 0 && day.monCellTitle.element.classList.add("text-blue-600");
    ((new Date()).getMonth() + 1) === MONTH && (i+1) === TODAY && day.monCellTitle.element.classList.add("bg-blue-500", "text-white")
    const dayNum = getFullNum(i+1)
    day.monCellTitle.element.innerText = dayNum
    day.monCellTitle.element.addEventListener("click", (e) => {
        CalEvent.page.main.eventModalBg.element.classList.toggle("hidden")
        CalEvent.page.main.eventDelDiv.element.classList.add("hidden")
        CalEvent.page.main.eventStartInput.element.value = `${YEAR}-${MONTH}-${dayNum}`
        CalEvent.page.main.eventEndInput.element.value = `${YEAR}-${MONTH}-${dayNum}`
    })
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
            events[dragged[2]].start = moveData.start
            events[dragged[2]].end = moveData.end
            const data = [moveData.id, moveData.start, moveData.end, moveData.title, moveData.category, moveData.memo]
            const putRes = await fetch("/apis/Calendar/F", {
                method : "PUT",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({data})
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

CalEvent
    .append("main.eventModalBg", "main.eventForm", "main.eventModalMain", "main.eventModalOuter", "main.eventModalLogo", "main.eventModalLogoSvg")
    .append("main.eventModalLogoSvg", "main.eventModalLogoPath1")
    .append("main.eventModalLogoSvg", "main.eventModalLogoPath2")
    .append("main.eventModalLogoSvg", "main.eventModalLogoPath3")
    .append("main.eventModalLogo", "main.eventCloseBtn", "main.eventCloseSvg", "main.eventClosePath")
    .append("main.eventModalOuter", "main.eventTitle")
    .append("main.eventModalOuter", "main.eventIdLabel")
    .append("main.eventModalOuter", "main.eventIdInput")
    .append("main.eventModalOuter", "main.eventTitleLabel")
    .append("main.eventModalOuter", "main.eventTitleInput")
    .append("main.eventModalOuter", "main.eventStartLabel")
    .append("main.eventModalOuter", "main.eventStartInput")
    .append("main.eventModalOuter", "main.eventEndLabel")
    .append("main.eventModalOuter", "main.eventEndInput")
    .append("main.eventModalOuter", "main.eventCategoryLabel")
    .append("main.eventModalOuter", "main.eventCategoryInput")
    .append("main.eventModalOuter", "main.eventMemoLabel")
    .append("main.eventModalOuter", "main.eventMemoInput")
    .append("main.eventModalOuter", "main.eventBtnGroup")
    .append("main.eventBtnGroup", "main.eventSubmitBtn")
    .append("main.eventBtnGroup", "main.eventDelBtn")
    .append("main.eventBtnGroup", "main.eventCancleBtn")
    .append("main.eventModalOuter", "main.eventDelDiv")
    .append("main.eventDelDiv", "main.eventDelLabel")
    .append("main.eventDelDiv", "main.eventDelInput")


CalEvent.page.main.eventCloseBtn.element.addEventListener("click", (e) => {
    e.preventDefault()
    CalEvent.page.main.eventModalBg.element.classList.add("hidden")
    CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", true)
    clearEventForm()
})
CalEvent.page.main.eventCancleBtn.element.addEventListener("click", (e) => {
    e.preventDefault()
    CalEvent.page.main.eventModalBg.element.classList.add("hidden")
    CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", true)
    clearEventForm()
})
const clearEventForm = () => {
    CalEvent.page.main.eventTitle.element.innerText = "New Item"
    CalEvent.page.main.eventIdInput.element.value = ""
    CalEvent.page.main.eventTitleInput.element.value = ""
    CalEvent.page.main.eventStartInput.element.value = ""
    CalEvent.page.main.eventEndInput.element.value = ""
    CalEvent.page.main.eventCategoryInput.element.value = ""
    CalEvent.page.main.eventMemoInput.element.value = ""
    CalEvent.page.main.eventDelInput.element.checked = false
    CalEvent.page.main.eventDelBtn.element.classList.add("hidden")
    CalEvent.page.main.eventSubmitBtn.element.classList.remove("hidden")
}

CalEvent.page.main.eventDelInput.element.addEventListener("change", (e) => {
    if(e.target.checked){
        CalEvent.page.main.eventSubmitBtn.element.classList.add("hidden")
        CalEvent.page.main.eventDelBtn.element.classList.remove("hidden")
    }else{
        CalEvent.page.main.eventDelBtn.element.classList.add("hidden")
        CalEvent.page.main.eventSubmitBtn.element.classList.remove("hidden")
    }
})

const openEventModal = (i) => {
    CalEvent.page.main.eventModalBg.element.classList.toggle("hidden")
    if(CalEvent.page.main.eventModalBg.element.getAttribute("aria-hidden")){
        CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", false)
    }
    CalEvent.page.main.eventDelDiv.element.classList.remove("hidden")
    CalEvent.page.main.eventTitle.element.innerText = `${events[i].title}`

    CalEvent.page.main.eventIdInput.element.value = `${events[i].id}`
    CalEvent.page.main.eventTitleInput.element.value = `${events[i].title}`
    CalEvent.page.main.eventStartInput.element.value = `${events[i].start}`
    CalEvent.page.main.eventEndInput.element.value = `${events[i].end}`
    CalEvent.page.main.eventCategoryInput.element.value = `${events[i].category}`
    CalEvent.page.main.eventMemoInput.element.value = `${events[i].memo}`
}



CalEvent.page.main.eventSubmitBtn.element.addEventListener("click", async (e) => {
    e.preventDefault()
    // console.log("submit")
    let id = CalEvent.page.main.eventIdInput.element.value
    const status = id.length > 0 ? "PUT" : "POST"
    const title = CalEvent.page.main.eventTitleInput.element.value
    const start = new Date(CalEvent.page.main.eventStartInput.element.value)
    const end = new Date(CalEvent.page.main.eventEndInput.element.value)
    const category = CalEvent.page.main.eventCategoryInput.element.value
    const memo = CalEvent.page.main.eventMemoInput.element.value
    const data = [id, start, end, title, category, memo]
    
    const res = await fetch("/apis/Calendar/F", {
        method : status,
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({data})
    })
    const {result} = await res.json()
    const updateId = result.match(/\d+/g)
    id = updateId[0]
    events.push({ id, start, end, title, category, memo })
    if(status === "POST"){
        Calendar.page.items.push(makeTag(calendarElTree.calItemElTree))
        const lastItem = Calendar.page.items[Calendar.page.items.length - 1]
        lastItem.itemP.element.innerText = title
        lastItem.itemCircle.element.classList.add(catColor[category])
        lastItem.itemSpan.element.innerText = `${getFullNum(start.getHours())} : ${getFullNum(start.getMinutes())}`
        lastItem.itemDiv.element.addEventListener("dragstart", (e) => {
            dragged = [e.target, id, events.length - 1]
        })
        lastItem.itemDiv.element.addEventListener("click", (e) => {
            openEventModal(events.length - 1)
        })
        Calendar
                .append(lastItem.itemDiv.element, lastItem.itemCircle.element) // between 처리 예정
                .append(lastItem.itemDiv.element, lastItem.itemP.element)
                .append(lastItem.itemDiv.element, lastItem.itemSpan.element)
                .append(Calendar.page.days[parseInt(start.getDate())-1].monCellDiv.element, lastItem.itemDiv.element)
    }
    
    console.log(result)

    CalEvent.page.main.eventModalBg.element.classList.add("hidden")
    CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", true)
    clearEventForm()
})

CalEvent.page.main.eventDelBtn.element.addEventListener("click", async (e) => {
    e.preventDefault()
    const idv = CalEvent.page.main.eventIdInput.element.value
    const delItem = events.findIndex( (ev) => ev.id === parseInt(idv))
    console.log(idv, delItem)
    const gid = 0
    const res = await fetch(`/apis/Calendar/${gid}/${idv}`, {method : "DELETE"})
    const result = await res.json()
    console.log(result)

    Calendar.page.items[delItem].itemDiv.element.remove()

    CalEvent.page.main.eventModalBg.element.classList.add("hidden")
    CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", true)
    clearEventForm()
})

Calendar.page.items.map((item, i) => {
    item.itemDiv.element.addEventListener("dragstart", (e) => {
        dragged = [e.target, events[i].id, i]
    })

    item.itemDiv.element.addEventListener("click", (e)=>{
        openEventModal(i)
        // CalEvent.page.main.eventModalBg.element.classList.toggle("hidden")
        // if(CalEvent.page.main.eventModalBg.element.getAttribute("aria-hidden")){
        //     CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", false)
        // }
        // CalEvent.page.main.eventDelDiv.element.classList.remove("hidden")
        // CalEvent.page.main.eventTitle.element.innerText = `${events[i].title}`

        // CalEvent.page.main.eventIdInput.element.value = `${events[i].id}`
        // CalEvent.page.main.eventTitleInput.element.value = `${events[i].title}`
        // CalEvent.page.main.eventStartInput.element.value = `${events[i].start}`
        // CalEvent.page.main.eventEndInput.element.value = `${events[i].end}`
        // CalEvent.page.main.eventCategoryInput.element.value = `${events[i].category}`
        // CalEvent.page.main.eventMemoInput.element.value = `${events[i].memo}`
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

