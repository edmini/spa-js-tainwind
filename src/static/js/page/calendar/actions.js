
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
        const date = new Date("2023-07-01")
        console.log(date)
    },
    selDay : (e) => {
        console.log(e.target.innerText)
        const num = e.target.innerText - 1
        // console.log(CalMobile.page.td[num])
    }
}



export default actions