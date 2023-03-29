import calMobileElTree from "./calMobileElTree.js"
import { SetPage, arrToObj } from "../../core/Creators.js"


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const year = urlParams.get('year')
const month = urlParams.get('month')
const day = urlParams.get('day')

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


export const CalMobile = new SetPage(calMobileElTree.calMobileElTree)
// Calendar.page.main.main.element.appendChild(CalMobile.page.main.mobileMain.element)
CalMobile.page.main.titleSpan.element.innerText = `${calMobileElTree.monName[MONTH-1]} ${YEAR}`

CalMobile
    .append("main.main", "main.outerDiv", "main.innerCalDiv", "main.calOuterDiv", "main.titleSpan")
    .append("main.calOuterDiv", "main.prevNextBtnDiv")
    .append("main.prevNextBtnDiv", "main.prevBtn", "main.prevSvg", "main.prevPath")
    .append("main.prevNextBtnDiv", "main.nextBtn", "main.nextSvg", "main.nextPath")
    .append("main.outerDiv", "main.calTableDiv", "main.calTable", "main.calThead", "main.calTheadTr")
    .append("main.calTable", "main.calTbody")
    .append("main.calTbody", "main.calTbodyTr1")
    .append("main.calTbody", "main.calTbodyTr2")
    .append("main.calTbody", "main.calTbodyTr3")
    .append("main.calTbody", "main.calTbodyTr4")
    .append("main.calTbody", "main.calTbodyTr5")
    .append("main.calTbody", "main.calTbodyTr6")
    .append("main.outerDiv", "main.calListDiv", "main.calListInnerDiv")

CalMobile.listElement("th", calMobileElTree.mobileWeekName.length, calMobileElTree.calMobileTitleElTree)
CalMobile.listElement("prevTd", STARTWEEK, calMobileElTree.calMobileNumElTree)
CalMobile.listElement("td", THISALLDAY, calMobileElTree.calMobileNumElTree)
CalMobile.listElement("events", )

CalMobile.page.th.map((head, i) => {
    head.calTitleP.element.innerText = calMobileElTree.mobileWeekName[i]
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