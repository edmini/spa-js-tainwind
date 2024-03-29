import calendarElTree from "./calElTree.js"
import { SetPage, makeTag, Create } from "../../core/Creators.js"
import { catColor } from "./calData.js"
import { delData, getData, postData, putData } from "./fetchData.js"


export const Calendar = new SetPage(calendarElTree.calMonthElTree)
const CalEvent = new SetPage(calendarElTree.eventModalElTree)
Calendar.listElement("weekName", 7, calendarElTree.calWeekTitleElTree)

let dragged = null // dragstart data variable

const apiURL = "/apis/Calendar/F" // apis/SheetName/LastColumn
let events = await getData(apiURL) // get Data from googleSheetApi
const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1) // first letter UpperCase
const keys = Object.keys(events[0]) // events Key
const getFullNum = (num) => num < 10 ? `0${num}` : num//0~9 => 00~09

let date = new Date()
date.getTimezoneOffset()

const YEAR = date.getFullYear()
const MONTH = date.getMonth()+1
const TODAY = date.getDate()
const TIME_ZONE = 9 * 60 * 60 * 1000

//현재 년도 이벤트만!!
events.find((event) => {(new Date(event.start)).getFullYear === YEAR})

let dateObj = {
    tempMon : 0,
    tempYear : 0,
    year : null,
    month : null,
    today : null,
    startWeek : null,
    nextMonWeek : null,
    lastAllDay : null,
    thisAllDay : null,
}

// prev next button handle date
export const dateHandle = (currentYear, currentMon, status) => {
    dateObj.tempYear = dateObj.tempYear === currentYear ? currentYear : dateObj.tempYear
    let calcMon = 0
    if(status === "next"){
        dateObj.tempMon = dateObj.tempMon + 1
        if((parseInt(currentMon) + dateObj.tempMon) === 13 ){
            dateObj.tempYear = dateObj.tempYear + 1
            dateObj.tempMon = (parseInt(currentMon) + dateObj.tempMon) < 13 + parseInt(currentMon) ? (dateObj.tempMon + parseInt(currentMon)) - (parseInt(currentMon) + 12) : dateObj.tempMon + 1
        }
    }else if(status === "prev"){
        dateObj.tempMon = dateObj.tempMon - 1
        if((parseInt(currentMon) + dateObj.tempMon) === 0 ){
            dateObj.tempYear = dateObj.tempYear - 1
            dateObj.tempMon = 12 + dateObj.tempMon
        }
    }else{ // today btn click
        dateObj.tempMon = 0
        dateObj.tempYear = currentYear
    }
    calcMon = parseInt(currentMon) + dateObj.tempMon
    const curDate = new Date(`${dateObj.tempYear}-${calcMon}-${TODAY}`)
    dateObj.year = curDate.getFullYear()
    dateObj.month = curDate.getMonth() + 1
    dateObj.today = curDate.getDate()
    dateObj.startWeek = new Date(dateObj.year, dateObj.month - 1, 1).getDay()
    dateObj.nextMonWeek = new Date(dateObj.year, dateObj.month, 1).getDay()
    dateObj.lastAllDay = new Date(dateObj.year, dateObj.month - 1, 0).getDate()
    dateObj.thisAllDay = new Date(dateObj.year, dateObj.month, 0).getDate()
    nextPrevBtn(dateObj.year, dateObj.month, TODAY, dateObj.startWeek, dateObj.nextMonWeek, dateObj.thisAllDay, dateObj.lastAllDay)
}

Calendar
    .append("main.main", "main.monMain", "main.monOuterDiv", "main.titleDiv", "main.title")
    .append("main.monOuterDiv", "main.btnGroup")
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

// Event Modal Category select box options
let catOpt = []
const catItem = Object.keys(catColor)
catItem.map((item) => {
    catOpt.push({value : item, opt : new Create(calendarElTree.eventModalElTree.eventCategoryOptionEl)})
})
catOpt.map((cat) => {
    cat.opt.element.innerText = cat.value
    cat.opt.element.value = cat.value
    CalEvent.append(CalEvent.page.main.eventCategoryInput.element, cat.opt.element)
})

// prev btn click
Calendar.page.main.prevBtn.element.addEventListener("click", () => {
    dateHandle(YEAR, MONTH, "prev")
})
// today btn click
Calendar.page.main.todayBtn.element.addEventListener("click", () => {
    dateHandle(YEAR, MONTH, "today")
})
// next btn click
Calendar.page.main.nextBtn.element.addEventListener("click", () => {
    dateHandle(YEAR, MONTH, "next")
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

//Modal Form init
const clearEventForm = () => {
    CalEvent.page.main.eventTitle.element.innerText = "New Item"
    keys.map((key) => {
        CalEvent.page.main[`event${capitalize(key)}Input`].element.value = ""
        CalEvent.page.main[`event${capitalize(key)}Input`].element.classList.remove("border-rose-600")
    })
    CalEvent.page.main.eventDelInput.element.checked = false
    CalEvent.page.main.eventDelBtn.element.classList.add("hidden")
    CalEvent.page.main.eventSubmitBtn.element.classList.remove("hidden")
}

// Modal Close Event (x button, cancle button, esc key down)
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
    if(e.key === "Escape"){
        closeModal()
    }
})

// event require check
keys.map((key) => {
    CalEvent.page.main[`event${capitalize(key)}Input`].element.addEventListener("focusout", (e) => {
        if((e.target.value).trim() === ""){
            e.target.value = ""
            e.target.classList.add("border-rose-600")
        }else{
            e.target.classList.remove("border-rose-600")
        }
    })
})

//Event Modal open
const openEventModal = (i) => {
    CalEvent.page.main.eventModalBg.element.classList.remove("hidden")
    if(CalEvent.page.main.eventModalBg.element.getAttribute("aria-hidden")){
        CalEvent.page.main.eventModalBg.element.setAttribute("aria-hidden", false)
    }
    CalEvent.page.main.eventDelDiv.element.classList.remove("hidden")
    CalEvent.page.main.eventTitle.element.innerText = events[i].title
    const startKo = new Date(events[i].start.getTime() + TIME_ZONE).toISOString().replace(' ', 'T').slice(0, -5)
    const endKo = new Date(events[i].start.getTime() + TIME_ZONE).toISOString().replace(' ', 'T').slice(0, -5)
    keys.map((key) => {
        if(key === "start"){
            CalEvent.page.main[`event${capitalize(key)}Input`].element.value = startKo
        }else if(key === "end"){
            CalEvent.page.main[`event${capitalize(key)}Input`].element.value = endKo
        }else{
            CalEvent.page.main[`event${capitalize(key)}Input`].element.value = events[i][key]
        }
    })
}

//Submit button event handler post or put
CalEvent.page.main.eventSubmitBtn.element.addEventListener("click", async (e) => {
    e.preventDefault()

    let eventNum = 0
    let itemElement = null
    let id = CalEvent.page.main.eventIdInput.element.value
    const title = CalEvent.page.main.eventTitleInput.element.value
    const start = new Date(CalEvent.page.main.eventStartInput.element.value)
    const end = new Date(CalEvent.page.main.eventEndInput.element.value)
    const category = CalEvent.page.main.eventCategoryInput.element.value
    const memo = CalEvent.page.main.eventMemoInput.element.value
    const data = [id, start, end, title, category, memo]
    // console.log(new Date(start.getTime() + TIME_ZONE).toISOString().replace(' ', 'T').slice(0, -5))

    const status = id.length > 0 ? "PUT" : "POST"
    let result = null
    if(status === "PUT"){
        result = await putData(apiURL, data)
    }else if(status === "POST"){
        result = await postData(apiURL, data)
    }

    const updateId = await result.match(/\d+/g) // get update id SheetName!A12:G12 -> [12 : 12]
    id = updateId[0]

    if(status === "POST"){
        events.push({ id, start, end, title, category, memo })
        Calendar.page.items.push(makeTag(calendarElTree.calItemElTree))
        itemElement = Calendar.page.items[Calendar.page.items.length - 1]
        eventNum = events.length - 1
    }
    if(status === "PUT"){
        eventNum = events.findIndex( (ev) => ev.id === parseInt(id))
        events[eventNum].title = title
        events[eventNum].start = start
        events[eventNum].end = end
        events[eventNum].category = category
        events[eventNum].memo = memo
        itemElement = Calendar.page.items[eventNum]
        itemElement.itemDiv.element.innerHTML = "" // 기존 내용 초기화
    }
    itemElement.itemP.element.innerText = title
    itemElement.itemCircle.element.classList.add(catColor[category])
    itemElement.itemSpan.element.innerText = `${getFullNum(start.getHours())} : ${getFullNum(start.getMinutes())}`

    itemElement.itemDiv.element.addEventListener("dragstart", (e) => {
        dragged = [e.target, id, eventNum]
    })
    itemElement.itemDiv.element.addEventListener("click", (e) => {
        openEventModal(eventNum)
    })
    Calendar
        .append(itemElement.itemDiv.element, itemElement.itemCircle.element)
        .append(itemElement.itemDiv.element, itemElement.itemP.element)
        .append(itemElement.itemDiv.element, itemElement.itemSpan.element)
        .append(Calendar.page.days[parseInt(start.getDate())-1].monCellDiv.element, itemElement.itemDiv.element)

    closeModal() // close and clear
})

//Delete button event
CalEvent.page.main.eventDelBtn.element.addEventListener("click", async (e) => {
    e.preventDefault()
    const idv = CalEvent.page.main.eventIdInput.element.value
    const delItem = events.findIndex( (ev) => ev.id === parseInt(idv))
    Calendar.page.items[delItem].itemDiv.element.remove()
    // console.log(idv, delItem)
    const gid = 0
    delData(`/apis/Calendar/${gid}/${idv}`)
    closeModal()
})

const nextPrevBtn = (year, month, today, starWeek, nextMonWeek, thisAllDay, lastAllDay) => {
    clearEventForm()

    Calendar.page.main.title.element.innerText = `${calendarElTree.monName[month-1]} ${year}` // caledar title

    Calendar.page.days = null
    Calendar.page.lastDay = null
    Calendar.page.nextDay = null
    Calendar.page.items = null
    Calendar.page.main.monGridDiv.element.innerHTML = ""

    Calendar.listElement("days", thisAllDay, calendarElTree.calMonCellElTree)
    Calendar.listElement("lastDay", starWeek, calendarElTree.calMonCellElTree)
    Calendar.listElement("nextDay", 42-(starWeek+thisAllDay), calendarElTree.calMonCellElTree)
    Calendar.listElement("items", events.length, calendarElTree.calItemElTree)

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
            const selectCurDate = new Date(`${year}-${month}-${dayNum}`)
            CalEvent.page.main.eventStartInput.element.value = new Date(selectCurDate.getTime() + TIME_ZONE).toISOString().replace(' ', 'T').slice(0, -5)
            CalEvent.page.main.eventEndInput.element.value = new Date(selectCurDate.getTime() + TIME_ZONE + 3600000).toISOString().replace(' ', 'T').slice(0, -5)
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

    //day cell
    Calendar.page.items.map((item, i) => {

        const startDate = events[i].start
        const eventYear = startDate.getFullYear()
        const eventMonth = startDate.getMonth() + 1
        const eventDay = startDate.getDate()

        //gragged data
        item.itemDiv.element.addEventListener("dragstart", (e) => {
            dragged = [e.target, events[i].id, i] //current element, eventsId, arrayIndex
        })
        //item click event
        item.itemDiv.element.addEventListener("click", (e)=>{
            openEventModal(i)
        })

        item.itemP.element.innerText = events[i].title
        item.itemCircle.element.classList.add(catColor[events[i].category])
        item.itemSpan.element.innerText = `${getFullNum(startDate.getHours())} : ${getFullNum(startDate.getMinutes())}`

        if(eventYear === year && eventMonth === month){ // this month
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

