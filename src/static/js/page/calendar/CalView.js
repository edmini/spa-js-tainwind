import { Calendar } from "./Calendar.js"
import { catColor } from "./calData.js"

Calendar.page.items.map((item, i) => {
    item.itemDiv.element.addEventListener("dragstart", (e) => {
        dragged = [e.target, events[i].id]
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
