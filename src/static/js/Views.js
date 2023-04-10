
const views = {

	Home : async () => {
		const {default : Home} = await import("./page/home/Home.js")
		return Home.page.main.main
	},
	Todos : async () => {
		const title = { element : document.createElement("h1") }
		title.element.innerText = "Hello World Todo"
		return title
	},
	Calendar : async (params) => {
		let resutlEl = null
		if(params.type === "mobile"){
			const { CalMobile } = await import("./page/calendar/CalMobile.js")
			resutlEl = CalMobile
		}else{
			const { Calendar } = await import("./page/calendar/Calendar.js")
			//Loading...
			// Calendar.page.main.monMain.element.classList.remove("opacity-20")
			// Calendar.page.main.loadingDiv.element.remove()
			resutlEl = Calendar

		}

		return resutlEl.page.main.main
	}

}


export default views


