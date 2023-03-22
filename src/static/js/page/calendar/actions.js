
export let date = new Date()

const actions = {
    newSchedule : (e) => {
        console.log(e.target)
    },
    editSchedule : (e) => {
        console.log(e.target)
        //event bubbling issue!!
    },
    nextMon : (e) => {
        // console.log(e.target)
        date = new Date("2023-07-01")
        console.log(date)
    }
}



export const TODAY = date.getDate()
export const MONTH = date.getMonth() + 1
export const YEAR = date.getFullYear()
export const STARTWEEK = new Date(YEAR, MONTH-1, 1).getDay()
export const NEXTMONWEEK = new Date(YEAR, MONTH, 1).getDay()
export const LASTALLDAY = new Date(YEAR, MONTH-1, 0).getDate()
export const THISALLDAY = new Date(YEAR, MONTH, 0).getDate()



export default actions