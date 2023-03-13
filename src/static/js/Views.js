
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
	Calendar : async () => {
		const {default : Calendar} = await import("./page/calendar/Calendar.js")
		const title = { element : document.createElement("h1") }
		title.element.innerText = "Calendar"
		return Calendar.page.main.main
	}

}


export default views


