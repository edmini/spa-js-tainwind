
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
		console.log(params) // mon, week, day, year views
		const {default : Calendar} = await import("./page/calendar/Calendar.js")
		return Calendar.page.main.main
	}

}


export default views


