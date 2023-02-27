
const views = {

	Home : async () => {
		const title = { element : document.createElement("p") }
		title.element.innerText = "Hello World!!"
		return title
//		const {default : notFound } = await import("./NotFound.js")
//		const nf = notFound()
//		return nf.main
	},
	Todos : async () => {
		const title = { element : document.createElement("h1") }
		title.element.innerText = "Hello World Todo"
		return title
	},

}


export default views


