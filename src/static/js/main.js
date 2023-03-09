
import Header from './page/header/Header.js'
import Header2 from './page/header/Header2.js'
import views from './Views.js'


const body = document.querySelector("body")
const app = document.querySelector("#app")
body.setAttribute("class", "bg-gradient-to-tr from-indigo-200 via-red-200 to-yellow-100")//https://hypercolor.dev/
// app.before(Header.page.main.header.element)
app.before(Header2.page.main.nav.element)


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

	app.replaceChildren(view.element)
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

//show/hide 
document.addEventListener("click", (e) => {
	if(!Header2.page.main.profileSubDiv.element.contains(e.target)){
		Header2.page.main.profileSubDiv.element.classList.add("hidden")
	}
	if(!Header.page.main.productDiv0.element.classList.contains(e.target)){
		Header.page.main.productDiv0.element.classList.add("hidden")
	}
	if(!Header2.page.main.mobileDiv.element.classList.contains(e.target)){
		Header2.page.main.mobileDiv.element.classList.add("hidden")
		Header2.page.main.closeSvg.element.classList.remove("hidden")
		Header2.page.main.openSvg.element.classList.add("hidden")
	}
})

