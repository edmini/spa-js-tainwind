
import header from './Header.js'
import views from './Views.js'


const app = document.querySelector("#app")
const bodySection = document.createElement("div")
bodySection.setAttribute("id", "bodySection")
const nav = header()
app.appendChild(nav.element)
app.appendChild(bodySection)


const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")

const getParams = (match) => {
	const values = match.result.slice(1)
	const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1])
	return Object.fromEntries(keys.map((key, i) => {
		return [key, values[i]]
	}))
}

const render = async () => {
	const routes = [
		{path : "/", view : views.Home},
		{path : "/todos", view : views.Todos},
	]

	const potentialMatchs = routes.map((route) => {
		return {
			route : route,
			result : location.pathname.match(pathToRegex(route.path))
		}
	})
	let match = potentialMatchs.find((potentialMatch) => potentialMatch.result !== null)
	if(!match){
		match = {
			route : routes[0],
			result : [location.pathname]
		}
	}
	const view = await match.route.view(getParams(match))

	bodySection.replaceChildren(view.element)
}


const navigateTo = (url) => {
	history.pushState(null, null, url)
	render()
}

window.addEventListener("popstate", ()=>{
	render()
})

document.addEventListener("DOMContentLoaded", ()=>{
	document.body.addEventListener("click", (e)=>{
		if(e.target.tagName === "INPUT"|| e.target.tagName !== "A"){
			return
		}
		const classNames = e.target.getAttribute("class").split(" ")
		if( classNames.find((res)=>res==='spa-link') === "spa-link" ){
			e.preventDefault()
			navigateTo(e.target.href)
		}
	})
	render()
})



