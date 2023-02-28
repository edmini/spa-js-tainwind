
import { makeTag } from "./core/Creators.js";

const Home = () => {

	const homeElTree = {
		homeEl : {
			element : "div",
			classes : ["flex", "w-full", "items-stretch", "justify-center"]
		},
		containerEl : {
			element : "div",
			classes : ["lg:w-5/6", "h-5/6", "bg-white", "mt-5", "md:w-full"]
		},
		titleEl : {
			element : "p",
			classes : ["text-black"],
			text : "Hello world"
		}
	}

	const home = makeTag(homeElTree)
	home.home.element
		.appendChild(home.container.element)
		.appendChild(home.title.element)

	return home
}



export default Home




