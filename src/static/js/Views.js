
const views = {

	Home : async () => {
		//const title = { element : document.createElement("p") }
		//title.element.innerText = "Hello World!!"
		//title.element.style.height = "100vh"
		//return title
//		const {default : notFound } = await import("./NotFound.js")
//		const nf = notFound()
//		return nf.main
		const {default : Home} = await import("./Home.js")
		const home = Home()
		console.log(home.element)
		return home.home
	},
	Todos : async () => {
		const title = { element : document.createElement("h1") }
		title.element.innerText = "Hello World Todo"
		return title
	},

}


export default views


