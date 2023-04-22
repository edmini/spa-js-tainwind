import calendarElTree from "./calElTree.js"
import { SetPage, makeTag } from "../../core/Creators.js"
import { catColor } from "./calData.js"
import { delData, getData, postData, putData } from "./fetchData.js"


export const Calendar = new SetPage(calendarElTree.calMonthElTree)
const CalEvent = new SetPage(calendarElTree.eventModalElTree)

const apiURL = "/apis/Calendar/F" // apis/SheetName/LastColumn
let events = await getData(apiURL) // get Data from googleSheetApi

//0~9 => 00~09
const getFullNum = (num) => num < 10 ? `0${num}` : num

//url calendar?year=2023&month=03&day=01
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const year = urlParams.get('year')
// const month = urlParams.get('month')
// const day = urlParams.get('day')
//date
let date = new Date()
// if(year || month || day){
//     let y, m, d = null
//     year ? y = year : y = date.getFullYear()
//     month ? m = month : m = date.getMonth()+1
//     day ? d = day : d = date.getDate()
//     date = new Date(`${y}-${m}-${d}`)
// }
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

Calendar
    .append("main.main", "main.monMain", "main.monOuterDiv", "main.titleDiv", "main.title")
    .append("main.monOuterDiv", "main.btnGroup")//"main.monOuterDiv", "main.monInnerDiv", 
    .append("main.btnGroup", "main.prevBtn", "main.prevSvg", "main.prevPath")
    .append("main.btnGroup", "main.todayBtn")
    .append("main.btnGroup", "main.nextBtn", "main.nextSvg", "main.nextPath")
    .append("main.monMain", "main.weekNameDiv")
    .append("main.monMain", "main.monGridDiv")
    .append(Calendar.page.main.main.element, CalEvent.page.main.eventModalBg.element)

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


    //이전, 현재, 다음 월 버튼
    let curYear = YEAR
    let curMon = MONTH
    let curDay = ((new Date()).getDate())
    // nextPrevBtn(YEAR, MONTH, TODAY, STARTWEEK, NEXTMONWEEK, THISALLDAY, LASTALLDAY)

    Calendar.page.main.prevBtn.element.addEventListener("click", () => {
        let date = new Date()
        date.getTimezoneOffset()

        const LMONTH = date.getMonth() + 1
        const LYEAR = date.getFullYear()
        let curYear = LYEAR
        let curMon = LMONTH
        MONTH === 1 ? (curYear =- 1, curMon = 12) : curMon = curMon - 1
        const LSTARTWEEK = new Date(curYear, curMon-1, 1).getDay()
        const LNEXTMONWEEK = new Date(curYear, curMon, 1).getDay()
        const LLASTALLDAY = new Date(curYear, curMon-1, 0).getDate()
        const LTHISALLDAY = new Date(curYear, curMon, 0).getDate()
        nextPrevBtn(curYear, curMon, TODAY, LSTARTWEEK, LNEXTMONWEEK, LTHISALLDAY, LLASTALLDAY)
    })
    Calendar.page.main.todayBtn.element.addEventListener("click", () => {
        nextPrevBtn(YEAR, MONTH, TODAY, STARTWEEK, NEXTMONWEEK, THISALLDAY, LASTALLDAY)
    })
    Calendar.page.main.nextBtn.element.addEventListener("click", () => {
        let date = new Date()
        date.getTimezoneOffset()
        const NMONTH = date.getMonth() + 1
        const NYEAR = date.getFullYear()
        let curYear = NYEAR
        let curMon = NMONTH
        MONTH === 12 ? (curYear = curYear + 1, curMon = 1) : curMon = curMon + 1
        const NSTARTWEEK = new Date(curYear, curMon-1, 1).getDay()
        const NNEXTMONWEEK = new Date(curYear, curMon, 1).getDay()
        const NLASTALLDAY = new Date(curYear, curMon-1, 0).getDate()
        const NTHISALLDAY = new Date(curYear, curMon, 0).getDate()
        nextPrevBtn(curYear, curMon, TODAY, NSTARTWEEK, NNEXTMONWEEK, NTHISALLDAY, NLASTALLDAY)
    })

    Calendar.listElement("weekName", 7, calendarElTree.calWeekTitleElTree)
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
    

const nextPrevBtn = (year, month, today, starWeek, nextMonWeek, thisAllDay, lastAllDay) => {
    console.log(year, month, today, starWeek, nextMonWeek, thisAllDay, lastAllDay)

    Calendar.page.days = null
    Calendar.page.lastDay = null
    Calendar.page.nextDay = null
    Calendar.page.main.monGridDiv.element.innerHTML = ""
    console.log(Calendar)

    Calendar.listElement("days", thisAllDay, calendarElTree.calMonCellElTree)
    Calendar.listElement("lastDay", starWeek, calendarElTree.calMonCellElTree)
    Calendar.listElement("nextDay", 42-(starWeek+thisAllDay), calendarElTree.calMonCellElTree)

    Calendar.page.main.title.element.innerText = `${calendarElTree.monName[month-1]} ${year}`


    // Last Month
    let lastday = lastAllDay - starWeek + 1
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
        (starWeek + i + 1) % 7 === 1 && day.monCellTitle.element.classList.add("text-red-500");
        (starWeek + i + 1) % 7 === 0 && day.monCellTitle.element.classList.add("text-blue-600");
        ((new Date()).getMonth() + 1) === month && (i+1) === today && day.monCellTitle.element.classList.add("bg-blue-500", "text-white")
        const dayNum = getFullNum(i+1)
        day.monCellTitle.element.innerText = dayNum
        day.monCellTitle.element.addEventListener("click", (e) => {
            CalEvent.page.main.eventModalBg.element.classList.toggle("hidden")
            CalEvent.page.main.eventDelDiv.element.classList.add("hidden")
            CalEvent.page.main.eventStartInput.element.value = `${year}-${month}-${dayNum}`
            CalEvent.page.main.eventEndInput.element.value = `${year}-${month}-${dayNum}`
        })
        //Drag & Drop
        day.monCellDiv.element.addEventListener("dragover", (e) => {e.preventDefault()})
        day.monCellDiv.element.addEventListener("drop", async (e) => {
            e.preventDefault()
            if(e.target.classList.contains("drag-zone")){
                const moveData = events.find((d) => d.id === dragged[1])
                if(month != moveData.start.getMonth()+1){
                    moveData.start.setMonth(month-1)
                    moveData.end.setMonth(month-1)
                }
                moveData.start.setDate(parseInt(dayNum))
                moveData.end.setDate(parseInt(dayNum))
                e.target.appendChild(dragged[0])
                events[dragged[2]].start = moveData.start
                events[dragged[2]].end = moveData.end
                const data = [moveData.id, moveData.start, moveData.end, moveData.title, moveData.category, moveData.memo]
                putData(apiURL, data)
            }
        })
        Calendar
            .append(day.monCellDiv.element, day.monCellTitle.element)
            .append(Calendar.page.main.monGridDiv.element, day.monCellDiv.element)
    })
    
    //Next Month
    Calendar.page.nextDay.map((nextday, i) => {
        (nextMonWeek + i + 1) % 7 === 1 && nextday.monCellTitle.element.classList.add("text-red-400");
        (nextMonWeek + i + 1) % 7 === 0 && nextday.monCellTitle.element.classList.add("text-blue-400");
        
        nextday.monCellDiv.element.classList.remove("bg-white", "text-gray-800")
        nextday.monCellDiv.element.classList.add("bg-gray-100", "text-gray-500")
        const dayNum = getFullNum(i+1)
        nextday.monCellTitle.element.innerText = dayNum
        Calendar
            .append(nextday.monCellDiv.element, nextday.monCellTitle.element)
            .append(Calendar.page.main.monGridDiv.element, nextday.monCellDiv.element)
    })
    
    //Modal Form init
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
    // Modal Close Event
    const closeModal = () => {
        CalEvent.page.main.eventModalBg.element.classList.add("hidden")
        CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", true)
        clearEventForm()
    }
    CalEvent.page.main.eventCloseBtn.element.addEventListener("click", (e) => {
        e.preventDefault()
        closeModal()
    })
    CalEvent.page.main.eventCancleBtn.element.addEventListener("click", (e) => {
        e.preventDefault()
        closeModal()
    })
    document.addEventListener("keydown", (e) => {
    // CalEvent.page.main.eventModalBg.element.addEventListener("keydown", (e) => {
        // e.preventDefault()
        if(e.key === "Escape"){
            closeModal()
        }
    })
    //Event Modal open
    const openEventModal = (i) => {
        CalEvent.page.main.eventModalBg.element.classList.toggle("hidden")
        if(CalEvent.page.main.eventModalBg.element.getAttribute("aria-hidden")){
            CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", false)
        }
        CalEvent.page.main.eventDelDiv.element.classList.remove("hidden")
        CalEvent.page.main.eventTitle.element.innerText = events[i].title
        CalEvent.page.main.eventIdInput.element.value = events[i].id
        CalEvent.page.main.eventTitleInput.element.value = events[i].title
        CalEvent.page.main.eventStartInput.element.value = events[i].start
        CalEvent.page.main.eventEndInput.element.value = events[i].end
        CalEvent.page.main.eventCategoryInput.element.value = events[i].category
        CalEvent.page.main.eventMemoInput.element.value = events[i].memo
    }
    
    //Delete switch -> button change
    CalEvent.page.main.eventDelInput.element.addEventListener("change", (e) => {
        if(e.target.checked){
            CalEvent.page.main.eventSubmitBtn.element.classList.add("hidden")
            CalEvent.page.main.eventDelBtn.element.classList.remove("hidden")
        }else{
            CalEvent.page.main.eventDelBtn.element.classList.add("hidden")
            CalEvent.page.main.eventSubmitBtn.element.classList.remove("hidden")
        }
    })
    //Delete button event
    CalEvent.page.main.eventDelBtn.element.addEventListener("click", async (e) => {
        e.preventDefault()
        const idv = CalEvent.page.main.eventIdInput.element.value
        const delItem = events.findIndex( (ev) => ev.id === parseInt(idv))
        console.log(idv, delItem)
        const gid = 0
        delData(`/apis/Calendar/${gid}/${idv}`)
        Calendar.page.items[delItem].itemDiv.element.remove()
        closeModal()
    })
    
    //Submit button event handler post or put
    CalEvent.page.main.eventSubmitBtn.element.addEventListener("click", async (e) => {
        e.preventDefault()
        // console.log("submit")
        let id = CalEvent.page.main.eventIdInput.element.value
        const title = CalEvent.page.main.eventTitleInput.element.value
        const start = new Date(CalEvent.page.main.eventStartInput.element.value)
        const end = new Date(CalEvent.page.main.eventEndInput.element.value)
        const category = CalEvent.page.main.eventCategoryInput.element.value
        const memo = CalEvent.page.main.eventMemoInput.element.value
        const data = [id, start, end, title, category, memo]
        const status = id.length > 0 ? "PUT" : "POST"
        
        let result = null
        if(status === "PUT"){
            result = await putData(apiURL, data)
        }else if(status === "POST"){
            result = await postData(apiURL, data)
        }
    
        const updateId = await result.match(/\d+/g) // get update id SheetName!A12:G12 -> [12 : 12]
        id = updateId[0]
        events.push({ id, start, end, title, category, memo })
    
        let itemElement = null
        if(status === "POST"){
            Calendar.page.items.push(makeTag(calendarElTree.calItemElTree))
            itemElement = Calendar.page.items[Calendar.page.items.length - 1]
        }
        if(status === "PUT"){
            const putNum = events.findIndex( (ev) => ev.id === parseInt(id))
            itemElement = Calendar.page.items[putNum]
        }
        itemElement.itemP.element.innerText = title
        itemElement.itemCircle.element.classList.add(catColor[category])
        itemElement.itemSpan.element.innerText = `${getFullNum(start.getHours())} : ${getFullNum(start.getMinutes())}`
        itemElement.itemDiv.element.addEventListener("dragstart", (e) => {
            dragged = [e.target, id, events.length - 1]
        })
        itemElement.itemDiv.element.addEventListener("click", (e) => {
            openEventModal(events.length - 1)
        })
        if(status === "POST"){
            Calendar
                    .append(itemElement.itemDiv.element, itemElement.itemCircle.element) // between 처리 예정
                    .append(itemElement.itemDiv.element, itemElement.itemP.element)
                    .append(itemElement.itemDiv.element, itemElement.itemSpan.element)
                    .append(Calendar.page.days[parseInt(start.getDate())-1].monCellDiv.element, itemElement.itemDiv.element)
        }
        closeModal()
    })
    
    //day cell
    Calendar.page.items.map((item, i) => {
        //gragged data
        item.itemDiv.element.addEventListener("dragstart", (e) => {
            dragged = [e.target, events[i].id, i] //current element, eventsId, arrayIndex
        })
        //item click event
        item.itemDiv.element.addEventListener("click", (e)=>{
            openEventModal(i)
        })
    
        const startDate = events[i].start
        const eventYear = startDate.getFullYear()
        const eventMonth = startDate.getMonth() + 1
        const eventDay = startDate.getDate()

        console.log(i, events[i].start)
        console.log(eventMonth, eventDay, thisAllDay, starWeek)
    
        item.itemP.element.innerText = events[i].title
        item.itemCircle.element.classList.add(catColor[events[i].category])
        item.itemSpan.element.innerText = `${getFullNum(startDate.getHours())} : ${getFullNum(startDate.getMinutes())}`

        if(eventYear === year && eventMonth === month){ // this month
            console.log(Calendar.page.days[eventDay-1].monCellTitle.element.innerText)

            Calendar
                .append(item.itemDiv.element, item.itemCircle.element)
                .append(item.itemDiv.element, item.itemP.element)
                .append(item.itemDiv.element, item.itemSpan.element)
                .append(Calendar.page.days[eventDay-1].monCellDiv.element, item.itemDiv.element)
        }else if(eventYear === year && eventMonth === month - 1){ // last Month
            const thisEventDay = (eventDay - lastAllDay) + (starWeek-1)
            if(thisEventDay > 0){
                Calendar
                    .append(item.itemDiv.element, item.itemCircle.element)
                    .append(item.itemDiv.element, item.itemP.element)
                    .append(item.itemDiv.element, item.itemSpan.element)
                    .append(Calendar.page.lastDay[thisEventDay].monCellDiv.element, item.itemDiv.element)
            }
        }else if(eventYear === year && eventMonth === month + 1){ // next Month
            if(eventDay < Calendar.page.nextDay.length + 1){
                Calendar
                    .append(item.itemDiv.element, item.itemCircle.element)
                    .append(item.itemDiv.element, item.itemP.element)
                    .append(item.itemDiv.element, item.itemSpan.element)
                    .append(Calendar.page.nextDay[eventDay-1].monCellDiv.element, item.itemDiv.element)
            }
        }
    })
    
}

// Calendar.listElement("days", THISALLDAY, calendarElTree.calMonCellElTree)
// Calendar.listElement("weekName", 7, calendarElTree.calWeekTitleElTree)
// Calendar.listElement("lastDay", STARTWEEK, calendarElTree.calMonCellElTree)
// Calendar.listElement("nextDay", 42-(STARTWEEK+THISALLDAY), calendarElTree.calMonCellElTree)
// Calendar.listElement("items", events.length, calendarElTree.calItemElTree)


// Calendar.page.main.title.element.innerText = `${calendarElTree.monName[MONTH-1]} ${YEAR}`
// //이전, 현재, 다음 월 버튼
// let curYear = YEAR
// let curMon = MONTH
// let curDay = ((new Date()).getDate())
// Calendar.page.main.prevBtn.element.addEventListener("click", () => {
//     MONTH === 1 ? (curYear =- 1, curMon = 12) : curMon = curMon - 1
//     window.location.href = `/calendar?year=${curYear}&month=${curMon}&day=${curDay}`
// })
// Calendar.page.main.todayBtn.element.addEventListener("click", () => {
//     window.location.href = `/calendar`
// })
// Calendar.page.main.nextBtn.element.addEventListener("click", () => {
//     MONTH === 12 ? (curYear = curYear + 1, curMon = 1) : curMon = curMon + 1
//     window.location.href = `/calendar?year=${curYear}&month=${curMon}&day=${curDay}`
// })

// // Week Name List
// Calendar.page.weekName.map((week, i) => {
//     i === 0 && week.weekTitle.element.classList.add("text-red-500");
//     i === 6 && week.weekTitle.element.classList.add("text-blue-600");
//     week.weekTitle.element.innerText = calendarElTree.weekName[i]
//     Calendar
//         .append(week.weekTitleDiv.element, week.weekTitle.element)
//         .append(Calendar.page.main.weekNameDiv.element, week.weekTitleDiv.element)
// })

// // Last Month
// let lastday = LASTALLDAY - STARTWEEK + 1
// Calendar.page.lastDay.map((last, i) => {
//     i === 0 && last.monCellTitle.element.classList.add("text-red-400")
//     i === 6 && last.monCellTitle.element.classList.add("text-blue-400")
//     last.monCellDiv.element.classList.remove("bg-white", "text-gray-800")
//     last.monCellDiv.element.classList.add("bg-gray-100", "text-gray-500")
//     last.monCellTitle.element.innerText = lastday
//     lastday++
//     Calendar
//         .append(last.monCellDiv.element, last.monCellTitle.element)
//         .append(Calendar.page.main.monGridDiv.element, last.monCellDiv.element)
// })

// // Calendar day cell
// Calendar.page.days.map((day, i) => {
//     (STARTWEEK + i + 1) % 7 === 1 && day.monCellTitle.element.classList.add("text-red-500");
//     (STARTWEEK + i + 1) % 7 === 0 && day.monCellTitle.element.classList.add("text-blue-600");
//     ((new Date()).getMonth() + 1) === MONTH && (i+1) === TODAY && day.monCellTitle.element.classList.add("bg-blue-500", "text-white")
//     const dayNum = getFullNum(i+1)
//     day.monCellTitle.element.innerText = dayNum
//     day.monCellTitle.element.addEventListener("click", (e) => {
//         CalEvent.page.main.eventModalBg.element.classList.toggle("hidden")
//         CalEvent.page.main.eventDelDiv.element.classList.add("hidden")
//         CalEvent.page.main.eventStartInput.element.value = `${YEAR}-${MONTH}-${dayNum}`
//         CalEvent.page.main.eventEndInput.element.value = `${YEAR}-${MONTH}-${dayNum}`
//     })
//     //Drag & Drop
//     day.monCellDiv.element.addEventListener("dragover", (e) => {e.preventDefault()})
//     day.monCellDiv.element.addEventListener("drop", async (e) => {
//         e.preventDefault()
//         if(e.target.classList.contains("drag-zone")){
//             const moveData = events.find((d) => d.id === dragged[1])
//             if(MONTH != moveData.start.getMonth()+1){
//                 moveData.start.setMonth(MONTH-1)
//                 moveData.end.setMonth(MONTH-1)
//             }
//             moveData.start.setDate(parseInt(dayNum))
//             moveData.end.setDate(parseInt(dayNum))
//             e.target.appendChild(dragged[0])
//             events[dragged[2]].start = moveData.start
//             events[dragged[2]].end = moveData.end
//             const data = [moveData.id, moveData.start, moveData.end, moveData.title, moveData.category, moveData.memo]
//             putData(apiURL, data)
//         }
//     })
//     Calendar
//         .append(day.monCellDiv.element, day.monCellTitle.element)
//         .append(Calendar.page.main.monGridDiv.element, day.monCellDiv.element)
// })

// //Next Month
// Calendar.page.nextDay.map((nextday, i) => {
//     (NEXTMONWEEK + i + 1) % 7 === 1 && nextday.monCellTitle.element.classList.add("text-red-400");
//     (NEXTMONWEEK + i + 1) % 7 === 0 && nextday.monCellTitle.element.classList.add("text-blue-400");
    
//     nextday.monCellDiv.element.classList.remove("bg-white", "text-gray-800")
//     nextday.monCellDiv.element.classList.add("bg-gray-100", "text-gray-500")
//     const dayNum = getFullNum(i+1)
//     nextday.monCellTitle.element.innerText = dayNum
//     Calendar
//         .append(nextday.monCellDiv.element, nextday.monCellTitle.element)
//         .append(Calendar.page.main.monGridDiv.element, nextday.monCellDiv.element)
// })

// //Modal Form init
// const clearEventForm = () => {
//     CalEvent.page.main.eventTitle.element.innerText = "New Item"
//     CalEvent.page.main.eventIdInput.element.value = ""
//     CalEvent.page.main.eventTitleInput.element.value = ""
//     CalEvent.page.main.eventStartInput.element.value = ""
//     CalEvent.page.main.eventEndInput.element.value = ""
//     CalEvent.page.main.eventCategoryInput.element.value = ""
//     CalEvent.page.main.eventMemoInput.element.value = ""
//     CalEvent.page.main.eventDelInput.element.checked = false
//     CalEvent.page.main.eventDelBtn.element.classList.add("hidden")
//     CalEvent.page.main.eventSubmitBtn.element.classList.remove("hidden")
// }
// // Modal Close Event
// const closeModal = () => {
//     CalEvent.page.main.eventModalBg.element.classList.add("hidden")
//     CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", true)
//     clearEventForm()
// }
// CalEvent.page.main.eventCloseBtn.element.addEventListener("click", (e) => {
//     e.preventDefault()
//     closeModal()
// })
// CalEvent.page.main.eventCancleBtn.element.addEventListener("click", (e) => {
//     e.preventDefault()
//     closeModal()
// })
// document.addEventListener("keydown", (e) => {
// // CalEvent.page.main.eventModalBg.element.addEventListener("keydown", (e) => {
//     // e.preventDefault()
//     if(e.key === "Escape"){
//         closeModal()
//     }
// })
// //Event Modal open
// const openEventModal = (i) => {
//     CalEvent.page.main.eventModalBg.element.classList.toggle("hidden")
//     if(CalEvent.page.main.eventModalBg.element.getAttribute("aria-hidden")){
//         CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", false)
//     }
//     CalEvent.page.main.eventDelDiv.element.classList.remove("hidden")
//     CalEvent.page.main.eventTitle.element.innerText = events[i].title
//     CalEvent.page.main.eventIdInput.element.value = events[i].id
//     CalEvent.page.main.eventTitleInput.element.value = events[i].title
//     CalEvent.page.main.eventStartInput.element.value = events[i].start
//     CalEvent.page.main.eventEndInput.element.value = events[i].end
//     CalEvent.page.main.eventCategoryInput.element.value = events[i].category
//     CalEvent.page.main.eventMemoInput.element.value = events[i].memo
// }

// //Delete switch -> button change
// CalEvent.page.main.eventDelInput.element.addEventListener("change", (e) => {
//     if(e.target.checked){
//         CalEvent.page.main.eventSubmitBtn.element.classList.add("hidden")
//         CalEvent.page.main.eventDelBtn.element.classList.remove("hidden")
//     }else{
//         CalEvent.page.main.eventDelBtn.element.classList.add("hidden")
//         CalEvent.page.main.eventSubmitBtn.element.classList.remove("hidden")
//     }
// })
// //Delete button event
// CalEvent.page.main.eventDelBtn.element.addEventListener("click", async (e) => {
//     e.preventDefault()
//     const idv = CalEvent.page.main.eventIdInput.element.value
//     const delItem = events.findIndex( (ev) => ev.id === parseInt(idv))
//     console.log(idv, delItem)
//     const gid = 0
//     delData(`/apis/Calendar/${gid}/${idv}`)
//     Calendar.page.items[delItem].itemDiv.element.remove()
//     closeModal()
// })

// //Submit button event handler post or put
// CalEvent.page.main.eventSubmitBtn.element.addEventListener("click", async (e) => {
//     e.preventDefault()
//     // console.log("submit")
//     let id = CalEvent.page.main.eventIdInput.element.value
//     const title = CalEvent.page.main.eventTitleInput.element.value
//     const start = new Date(CalEvent.page.main.eventStartInput.element.value)
//     const end = new Date(CalEvent.page.main.eventEndInput.element.value)
//     const category = CalEvent.page.main.eventCategoryInput.element.value
//     const memo = CalEvent.page.main.eventMemoInput.element.value
//     const data = [id, start, end, title, category, memo]
//     const status = id.length > 0 ? "PUT" : "POST"
    
//     let result = null
//     if(status === "PUT"){
//         result = await putData(apiURL, data)
//     }else if(status === "POST"){
//         result = await postData(apiURL, data)
//     }

//     const updateId = await result.match(/\d+/g) // get update id SheetName!A12:G12 -> [12 : 12]
//     id = updateId[0]
//     events.push({ id, start, end, title, category, memo })

//     let itemElement = null
//     if(status === "POST"){
//         Calendar.page.items.push(makeTag(calendarElTree.calItemElTree))
//         itemElement = Calendar.page.items[Calendar.page.items.length - 1]
//     }
//     if(status === "PUT"){
//         const putNum = events.findIndex( (ev) => ev.id === parseInt(id))
//         itemElement = Calendar.page.items[putNum]
//     }
//     itemElement.itemP.element.innerText = title
//     itemElement.itemCircle.element.classList.add(catColor[category])
//     itemElement.itemSpan.element.innerText = `${getFullNum(start.getHours())} : ${getFullNum(start.getMinutes())}`
//     itemElement.itemDiv.element.addEventListener("dragstart", (e) => {
//         dragged = [e.target, id, events.length - 1]
//     })
//     itemElement.itemDiv.element.addEventListener("click", (e) => {
//         openEventModal(events.length - 1)
//     })
//     if(status === "POST"){
//         Calendar
//                 .append(itemElement.itemDiv.element, itemElement.itemCircle.element) // between 처리 예정
//                 .append(itemElement.itemDiv.element, itemElement.itemP.element)
//                 .append(itemElement.itemDiv.element, itemElement.itemSpan.element)
//                 .append(Calendar.page.days[parseInt(start.getDate())-1].monCellDiv.element, itemElement.itemDiv.element)
//     }
//     closeModal()
// })

// //day cell
// Calendar.page.items.map((item, i) => {
//     //gragged data
//     item.itemDiv.element.addEventListener("dragstart", (e) => {
//         dragged = [e.target, events[i].id, i] //current element, eventsId, arrayIndex
//     })
//     //item click event
//     item.itemDiv.element.addEventListener("click", (e)=>{
//         openEventModal(i)
//     })

//     const startDate = events[i].start
//     const eventYear = startDate.getFullYear()
//     const eventMonth = startDate.getMonth() + 1
//     const eventDay = startDate.getDate()

//     item.itemP.element.innerText = events[i].title
//     item.itemCircle.element.classList.add(catColor[events[i].category])
//     item.itemSpan.element.innerText = `${getFullNum(startDate.getHours())} : ${getFullNum(startDate.getMinutes())}`

//     if(eventYear === YEAR && eventMonth === MONTH){ // this month
//         Calendar
//             .append(item.itemDiv.element, item.itemCircle.element)
//             .append(item.itemDiv.element, item.itemP.element)
//             .append(item.itemDiv.element, item.itemSpan.element)
//             .append(Calendar.page.days[eventDay-1].monCellDiv.element, item.itemDiv.element)
//     }else if(eventYear === YEAR && eventMonth === MONTH - 1){ // last Month
//         const thisEventDay = (eventDay - LASTALLDAY) + (STARTWEEK-1)
//         if(thisEventDay > 0){
//             Calendar
//                 .append(item.itemDiv.element, item.itemCircle.element)
//                 .append(item.itemDiv.element, item.itemP.element)
//                 .append(item.itemDiv.element, item.itemSpan.element)
//                 .append(Calendar.page.lastDay[thisEventDay].monCellDiv.element, item.itemDiv.element)
//         }
//     }else if(eventYear === YEAR && eventMonth === MONTH + 1){ // next Month
//         if(eventDay < Calendar.page.nextDay.length + 1){
//             Calendar
//                 .append(item.itemDiv.element, item.itemCircle.element)
//                 .append(item.itemDiv.element, item.itemP.element)
//                 .append(item.itemDiv.element, item.itemSpan.element)
//                 .append(Calendar.page.nextDay[eventDay-1].monCellDiv.element, item.itemDiv.element)
//         }
//     }
// })

