import calendarElTree from "./calElTree.js"
import { SetPage } from "../../core/Creators.js"

const Calendar = new SetPage(calendarElTree.calMonthElTree)

Calendar.listElement("days", 31, calendarElTree.calMonCellElTree)
Calendar.append("main.main", "main.monOuterDiv", "main.monInnerDiv", "main.monGridDiv")

Calendar.page.days.map((day, i) => {
    day.monCellTitle.element.innerText = i+1
    Calendar
        .append(day.monCellDiv.element, day.monCellTitle.element)
        .append(Calendar.page.main.monGridDiv.element, day.monCellDiv.element)
})


console.log(Calendar)



export default Calendar
