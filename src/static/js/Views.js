
const views = {

	Home : async () => {
		const {home, Home} = await import("./page/home/Home.js")
		console.log(Home)
		Home.page.main.home.element.appendChild(home.home.element)
		return Home.page.main.home
	},
	Todos : async () => {
		const title = { element : document.createElement("h1") }
		title.element.innerText = "Hello World Todo"
		return title
	},

}


export default views


