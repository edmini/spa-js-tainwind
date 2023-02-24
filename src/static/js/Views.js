
const views = {

	Home : async () => {
		const title = { element : document.createElement("h1") }
		title.element.innerText = "Hello World"
		return title
	},
}


export default views


