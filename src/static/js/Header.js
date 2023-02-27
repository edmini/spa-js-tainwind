import {makeTag} from "./core/Creators.js"

const header = () => {
	const productBtnClick = (e) => {
		header.productDiv0.element.classList.toggle("hidden")
	}

	const headerElTree = {
		headerEl : {
			element : "header",
			classes : ["bg-white"]
		},
		navEl : {
			element : "nav",
			classes : ["mx-auto", "flex", "max-w-7xl", "items-center", "justify-between", "p-6", "lg:px-8"],
			attrs : {
				"aria-label" : "Global"
			}
		},
		logoDivEl : {
			element : "div",
			classes : ["flex", "lg:flex-1"]
		},
		logoAEl : {
			element : "a",
			classes : ["-m-1.5", "p-1.5", "spa-link"],
			attrs : {
				href : "/"
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
		toggleDivEl : {
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
		toggleSvgEl : {
			element : "svg",
			classes : ["h-6", "w-6"],
			attrsNS : {
				fill : "none",
				"viewBox" : "0 0 24 24",
				"stroke-width" : "1.5",
				stroke : "currentColor",
				"aria-hidden" : true,
			},
		},
		togglePathEl : {
			element : "path",
			attrsNS : {
				"stroke-linecap" : "round",
				"stroke-linejoin" : "round",
				d : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			},
		},
		menusDivEl : {
			element : "div",
			classes : ["hidden", "lg:flex", "lg:gap-x-12"]
		},
		subMenuDivEl : {
			element : "div",
			classes : ["relative"]
		},
		productBtnEl : {
			element : "button",
			classes : ["flex", "items-center", "gap-x-1", "text-sm", "font-semibold", "leading-6", "text-gray-900"],
			text : "Product",
			attrs : {
				"aria-expanded" : false,
			},
			actions : {
				click : productBtnClick,
			}
		},
		productSvgEl : {
			element : "svg",
			classes : ["h-5", "w-5", "flex-none", "text-gray-400"],
			attrsNS : {
				viewBox : "0 0 20 20",
				fill : "currentColor",
				"aria-hidden" : true
			},
		},
		productPathEl : {
			element : "path",
			attrsNS : {
				"fill-rule" : "evenodd",
				d : "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
				"clip-rule" : "evenodd"
			},
		},
		productDiv0El : {
			element : "div",
			classes : ["hidden", "absolute", "-left-8", "top-full", "z-10", "mt-3", "w-screen", "max-w-md", "overflow-hidden", "rounded-3xl", "bg-white", "shadow-lg", "ring=1", "ring-gray-900/5"]
		},
		productDiv1El : {
			element : "div",
			classes : ["p-4"]
		},
		productDiv2El : {
			element : "div",
			classes : ["group", "relative", "flex", "items-center", "gap-x-6", "rounded-lg", "p-4", "text-sm", "leading-6", "hover:bg-gray-50"]
		},
		productDiv3El : {
			element : "div",
			classes : ["flex", "h-11", "w-11", "flex-none", "items-center", "justify-center", "rounded-lg", "bg-gray-50", "group-hover:bg-white"]
		},
		productDivSvgEl : {
			element : "svg",
			classes : ["h-6", "w-6", "text-gray-600", "group-hover:text-indigo-600"],
			attrsNS : {
				fill : "none",
				viewBox : "0 0 24 24",
				"stroke-width" : "1.5",
				stroke : "currentColor",
				"aria-hidden" : true,
			}
		},
		productPath1El : {
			element : "path",
			attrsNS : {
				"stroke-linecap" : "round",
				"stroke-linejoin" : "round",
				d : "M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
			}
		},
		productPath2El : {
			element : "path",
			attrsNS : {
				"stroke-linecap" : "round",
				"stroke-linejoin" : "round",
				d : "M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
			}
		},
		analyDivEl : {
			element : "div",
			classes : ["flex-auto"]
		},
		analyAEl : {
			element : "a",
			text : "Analytics",
			classes : ["block", "font-semibold", "text-gray-900"]
		},
		analySapnEl : {
			element : "span",
			classes : ["absolute", "inset-0"]
		},
		analyPEl : {
			element : "p",
			classes : ["mt-1", "text-gary-600"],
			text : "Get a better understanding of your traffic"
		},
		featuresAEl : {
			element : "a",
			classes : ["text-sm", "font-semibold", "leading-6", "text-gray-900", "spa-link"],
			text : "Features",
			attrs : {
				href : "/features"
			}
		},
		marketAEl : {
			element : "a",
			classes : ["text-sm", "font-semibold", "leading-6", "text-gray-900", "spa-link"],
			text : "Marketplace",
			attrs : {
				href : "/marketplace"
			}
		},
		companyAEl : {
			element : "a",
			classes : ["text-sm", "font-semibold", "leading-6", "text-gray-900", "spa-link"],
			text : "Company",
			attrs : {
				href : "/company"
			}
		},
		loginDivEl : {
			element : "div",
			classes : ["hidden", "lg:flex", "lg:flex-1", "lg:justify-end"]
		},
		loginAEl : {
			element : "a",
			classes : ["text-sm", "font-semibold", "leading-6", "text-gray-90", "spa-link"],
			text : "Log in",
			attrs : {
				href : "/login"
			}
		},
		loginSpanEl : {
			element : "span",
			text : "→",
			attrs : {
				"aria-hidden" : true,
			}
		}


	}

	const productListElTree = {
		div2El : {
			element : "div",
			classes : ["group", "relative", "flex", "items-center", "gap-x-6", "rounded-lg", "p-4", "text-sm", "leading-6", "hover:bg-gray-50"]
		},
		div3El : {
			element : "div",
			classes : ["flex", "h-11", "w-11", "flex-none", "items-center", "justify-center", "rounded-lg", "bg-gray-50", "group-hover:bg-white"]
		},
		divSvgEl : {
			element : "svg",
			classes : ["h-6", "w-6", "text-gray-600", "group-hover:text-indigo-600"],
			attrsNS : {
				fill : "none",
				viewBox : "0 0 24 24",
				"stroke-width" : "1.5",
				stroke : "currentColor",
				"aria-hidden" : true,
			}
		},
		divPathEl : {
			element : "path",
			attrsNS : {
				"stroke-linecap" : "round",
				"stroke-linejoin" : "round",
				d : ""
			}
		},
		div31El : {
			element : "div",
			classes : ["flex-auto"]
		},
		aEl : {
			element : "a",
			classes : ["block", "font-semibold", "text-gray-900"],
			text : "",
		},
		spanEl : {
			element : "span",
			classes : ["absolute", "inset-0"]
		},
		pEl : {
			element : "p",
			classes : ["mt-1", "text-gary-600"],
			text : ""
		},
	}


	const productList = [
		{
			path : "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59",
			title : "Engagement",
			content : "Speak directly to your customers",
		},
		{
			path : "M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33",
			title : "Security",
			content : "Your customers’ data will be safe and secure",
		},
		{
			path : "M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z",
			title : "Integrations",
			content : "Connect with third-party tools",
		},
		{
			path : "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
			title : "Automations",
			content : "Build strategic funnels that will convert",
		},

	]


	const header = makeTag(headerElTree)

	let products = []
	productList.map((item, i) => {
		products[i] = makeTag(productListElTree)
		products[i].divPath.element.setAttribute("d", item.path)
		products[i].a.element.innerText = item.title
		products[i].p.element.innerText = item.content
		products[i].div2.element
			.appendChild(products[i].div3.element)
			.appendChild(products[i].divSvg.element)
			.appendChild(products[i].divPath.element)
		products[i].div2.element
			.appendChild(products[i].div31.element)
			.appendChild(products[i].a.element)
			.appendChild(products[i].span.element)
		products[i].div31.element
			.appendChild(products[i].p.element)
	})




	header.header.element
		.appendChild(header.nav.element)
		.appendChild(header.logoDiv.element)
		.appendChild(header.logoA.element)
		.appendChild(header.company.element)
		.after(header.logoImg.element)
	header.nav.element
		.appendChild(header.toggleDiv.element)	
		.appendChild(header.toggleBtn.element)	
		.appendChild(header.openSpan.element)	
		.after(header.toggleSvg.element)	
	header.toggleSvg.element.appendChild(header.togglePath.element)
	header.nav.element
		.appendChild(header.menusDiv.element)
		.appendChild(header.subMenuDiv.element)
		.appendChild(header.productBtn.element)
		.appendChild(header.productSvg.element)
		.appendChild(header.productPath.element)
	header.subMenuDiv.element
		.appendChild(header.productDiv0.element)
		.appendChild(header.productDiv1.element)
		.appendChild(header.productDiv2.element)
		.appendChild(header.productDiv3.element)
		.appendChild(header.productDivSvg.element)
		.appendChild(header.productPath1.element)
		.after(header.productPath2.element)
	products.map((product) => {
		header.productDiv1.element.appendChild(product.div2.element)
	})
	header.productDiv2.element
		.appendChild(header.analyDiv.element)
		.appendChild(header.analyA.element)
		.appendChild(header.analySapn.element)
	header.analyDiv.element
		.appendChild(header.analyP.element)
	header.menusDiv.element.appendChild(header.featuresA.element)
	header.menusDiv.element.appendChild(header.marketA.element)
	header.menusDiv.element.appendChild(header.companyA.element)
	header.nav.element
		.appendChild(header.loginDiv.element)
		.appendChild(header.loginA.element)
		.appendChild(header.loginSpan.element)


	return header.header

}


export default header


