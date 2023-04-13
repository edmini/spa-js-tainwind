import {makeTag} from "./core/Creators.js"


const notFound = () => {
	const nfElTree = {
		mainEl : {
			element : "main",
			classes : ["grid", "min-h-full", "place-items-center", "h-[calc(100vh-80px)]", "px-6", "sm:py-32", "lg:px-8"]
		},
		mainDivEl : {
			element : "div",
			classes : ["text-center"]
		},
		fofEl : {
			element : "p",
			classes : ["text-base", "font-semibold", "text-indigo-600"],
			text : "404"
		},
		pnfEl : {
			element : "h1",
			classes : ["mt-4", "text-3xl", "font-bold", "tracking-tight", "text-gray-900", "sm:text-5xl"],
			text : "Page not found"
		},
		contentPEl : {
			element : "p",
			classes : ["mt-6", "text-base", "leading-7", "text-gray-600"],
			text : "Sorry, we couldn't find the page you're looking for."
		},
		btnDivEl : {
			element : "div",
			classes : ["mt-10", "flex", "items-center", "justify-center", "gap-x-6"]
		},
		homeAEl : {
			element : "a",
			classes : ["rounded-md", "bg-indigo-600", "px-3.5", "py-2.5", "text-sm", "font-semibold", "text-white", "shadow-sm", "hover:bg-indigo-500", "focus-visible:outline", "focus-visible:outline-2", "focus-visible:outline-offset-2", "focus-visible:outline-indigo-600", "spa-link"],
			text : "Go back home",
			attrs : {
				href : "/"
			}
		},
		supportAEl : {
			element : "a",
			classes : ["text-sm", "font-semibold", "text-gray-900", "spa-link"],
			text : "Contact support",
			attrs : {
				href : "/support"
			}
		}
	}

	const nfpage = makeTag(nfElTree)

	nfpage.main.element
		.appendChild(nfpage.mainDiv.element)
		.appendChild(nfpage.fof.element)
	nfpage.mainDiv.element
		.appendChild(nfpage.pnf.element)
	nfpage.mainDiv.element
		.appendChild(nfpage.contentP.element)
	nfpage.mainDiv.element
		.appendChild(nfpage.btnDiv.element)
		.appendChild(nfpage.homeA.element)
		.after(nfpage.supportA.element)

	return nfpage



}

export default notFound




