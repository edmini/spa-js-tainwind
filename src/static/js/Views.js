
const views = {

	Home : async () => {
		const {default : Home} = await import("./page/home/Home.js")
		return Home.page.main.main
	},
	NFound : async () => {
		const { default : notFound } = await import("./NotFound.js")
		const nfpage = notFound()
		return nfpage.main
	},
	Todos : async () => {
		const title = { element : document.createElement("h1") }
		title.element.classList.add("h-[calc(100vh-80px)]", "text-2xl", "font-bold", "leading-7", "text-gray-800", "text-center", "p-10")
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
			resutlEl = Calendar
		}
		return resutlEl.page.main.main
	}

}


export default views


