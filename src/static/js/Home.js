import {makeTag} from "./core/Creators.js"

const home = () => {
	const headerElTree = {
		headerEl : {
			element : "header",
			classes : ["bg-white"]
		},
		navEl : {
			element : "nav",
			classes : ["mx-auto", "flex", "max-w-7xl", "items-center", "justify-between", "p-6", "lg:px8"],
			attrs : {
				"aria-label" : "Global"
			}
		},
		firstDivEl : {
			element : "div",
			classes : ["flex", "lg:flex-1"]
		},
		logoAEl : {
			element : "a",
			classes : ["-m-1.5", "p-1.5"],
			attrs : {
				href : "#"
			}
		},
		companyEl : {
			element : "span",
			classes : ["sr-only"],
			text : "My Company"
		},
		logoImgEl : {
			element : "img",
			classes : ["h-8", "w-auto"],
			attrs : {
				src : "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
				alt : "logo"
			}
		},
		secondDivEl : {
			element : "div",
			classes : ["flex", "lg:hidden"]
		},
		toggleBtnEl : {
			element : "button",
			classes : ["-m-2.5", "inline-flex", "items-center", "justify-center", "rounded-md", "P-2.5", "text-gray-700"]
		},
		openSpanEl : {
			element : "span",
			classes : ["sr-only"],
			text : "Open main menu"
		},
		svgEl : {
			element : "svg",
			classes : ["h-6", "w-6"],
			attrs : {
				fill : "none",
				"viewBox" : "0 0 24 24",
				"stroke-width" : "1.5",
				stroke : "currentColor",
				"aria-hidden" : true,
			}
		},
		pathEl : {
			element : "path",
			attrs : {
				"stroke-linecap" : "round",
				"stroke-linejoin" : "round",
				d : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			}
		},
	}


	const header = makeTag(headerElTree)

	header.header.element
		.appendChild(header.nav.element)
		.appendChild(header.firstDiv.element)
		.appendChild(header.logoA.element)
		.appendChild(header.company.element)
		.after(header.logoImg.element)
	header.nav.element
		.appendChild(header.secondDiv.element)	
		.appendChild(header.toggleBtn.element)	
		.appendChild(header.openSpan.element)	
		.after(header.svg.element)	
	header.svg.element.appendChild(header.path.element)

	return header.header

}


export default home



