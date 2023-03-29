
const views = {

	Home : async () => {
		const {default : Home} = await import("./page/home/Home.js")
		return Home.page.main.home
	},
	Todos : async () => {
		const title = { element : document.createElement("h1") }
		title.element.innerText = "Hello World Todo"
		return title
	},
	Calendar : async (params) => {
		// console.log(params.type) // mon, week, day, year views
		const { Calendar } = await import("./page/calendar/Calendar.js")
		let resutlEl = null
		if(params.type === "/mobile"){
			const { CalMobile } = await import("./page/calendar/CalMobile.js")
			resutlEl = CalMobile
		}else{
			resutlEl = Calendar
		}

		return resutlEl.page.main.main
	}

}


export default views


