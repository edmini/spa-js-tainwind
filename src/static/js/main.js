
import Header from './page/header/Header.js'
import Header2 from './page/header/Header2.js'
import views from './Views.js'


const main = document.createElement("div")
const app = document.querySelector("#app")
app.setAttribute("class", "bg-gradient-to-tr from-indigo-200 via-red-200 to-yellow-100")//https://hypercolor.dev/
app.appendChild(Header.page.main.header.element)
// app.appendChild(Header2.page.main.nav.element)
app.appendChild(main)

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
		{path : "/404", view : views.NFound},
		{path : "/todos", view : views.Todos},
		{path : "/calendar", view : views.Calendar},
		{path : "/calendar/:type", view : views.Calendar},
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
			route : routes[1],// routes[0] -> "/", rountes[1] -> "/404"
			result : [location.pathname]
		}
	}
	const view = await match.route.view(getParams(match))
	main.replaceChildren(view.element)
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
		// const classNames = e.target.getAttribute("class").split(" ")
		// if( classNames.find((res)=>res==='spa-link') === "spa-link" ){ // e.target.classList.contains("spa-link")
		if(e.target.classList.contains("spa-link")){
			e.preventDefault()
			navigateTo(e.target.href)
		}
	})
	render()
})

//show/hide 
document.addEventListener("click", (e) => {
	if(!Header2.page.main.profileSubDiv.element.contains(e.target)){
		Header2.page.main.profileSubDiv.element.classList.add("hidden")
	}
	if(!Header.page.main.productDiv0.element.classList.contains(e.target)){
		Header.page.main.productDiv0.element.classList.add("hidden")
	}
	if(!Header.page.main.header.element.lastChild.classList.contains(e.target)){
		Header.page.main.header.element.lastChild.classList.add("hidden")
	}
	if(!Header2.page.main.mobileDiv.element.classList.contains(e.target)){
		Header2.page.main.mobileDiv.element.classList.add("hidden")
		Header2.page.main.closeSvg.element.classList.remove("hidden")
		Header2.page.main.openSvg.element.classList.add("hidden")
	}
})

