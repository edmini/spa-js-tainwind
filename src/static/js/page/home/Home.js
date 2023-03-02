
import { makeTag } from "../../core/Creators.js";
import homeTree from "./homeElTree.js"


let home = null

const Home = () => {

	home = makeTag(homeTree.homeElTree)
	home.home.element
		.appendChild(home.main.element)
		.appendChild(home.outer.element)
		.appendChild(home.top.element)
		.appendChild(home.readmore.element)
		.appendChild(home.readmoreA.element)
		.appendChild(home.readmoreSpan.element)
		.after(" Readmore →")
	home.outer.element
		.appendChild(home.titleDiv.element)
	home.outer.element
		.appendChild(home.titleH1.element)
	home.outer.element
		.appendChild(home.titleP.element)
	home.outer.element
		.appendChild(home.linkGroupDiv.element)
	home.linkGroupDiv.element
		.appendChild(home.startA.element)
	home.linkGroupDiv.element
		.appendChild(home.moreA.element)
		.appendChild(home.moreSpan.element)


	const contents = makeTag(homeTree.contentElTree)
	contents.main.element
		.appendChild(contents.content.element)
		.appendChild(contents.outerDiv.element)
		.appendChild(contents.deployDiv.element)
		.appendChild(contents.deployH2.element)
	contents.deployDiv.element
		.appendChild(contents.deployP.element)
	contents.deployDiv.element
		.appendChild(contents.deployP2.element)
	contents.outerDiv.element
		.appendChild(contents.dlDiv.element)
		.appendChild(contents.dl.element)

	let conLists = []
	homeTree.contentList.map((list, i) => {
		conLists[i] = makeTag(homeTree.contentdlElTree)
		conLists[i].div.element
			.appendChild(conLists[i].dt.element)
			.appendChild(conLists[i].dtDiv.element)
			.appendChild(conLists[i].svg.element)
			.appendChild(conLists[i].path.element)
		conLists[i].path.element.setAttribute("d", list.path)
		conLists[i].dtDiv.element.after(list.text)
		conLists[i].div.element
			.appendChild(conLists[i].dd.element)
		conLists[i].dd.element.innerText = list.dd
		contents.dl.element
			.appendChild(conLists[i].div.element)
	})


	home.home.element
		.appendChild(contents.main.element)




	const feature = makeTag(homeTree.featureElTree)
	feature.main.element
		.appendChild(feature.feature.element)
		.appendChild(feature.outer.element)
		.appendChild(feature.grid.element)
		.appendChild(feature.inner.element)
		.appendChild(feature.deployDiv.element)
		.appendChild(feature.deployH2.element)
	feature.deployDiv.element
		.appendChild(feature.betterP.element)
	feature.deployDiv.element
		.appendChild(feature.contentP.element)
	feature.deployDiv.element
		.appendChild(feature.dl.element)
		.appendChild(feature.pushDiv.element)
		.appendChild(feature.pushDt.element)
		.appendChild(feature.pushSvg.element)
		.appendChild(feature.pushPath.element)
	feature.pushSvg.element.after("Push to Deploy")
	feature.pushDiv.element
		.appendChild(feature.pushDd.element)
	feature.dl.element
		.appendChild(feature.sslDiv.element)
		.appendChild(feature.sslDt.element)
		.appendChild(feature.sslSvg.element)
		.appendChild(feature.sslPath.element)
	feature.sslSvg.element.after("SSL certificates")
	feature.sslDiv.element
		.appendChild(feature.sslDd.element)
	feature.dl.element
		.appendChild(feature.dbDiv.element)
		.appendChild(feature.dbDt.element)
		.appendChild(feature.dbSvg.element)
		.appendChild(feature.dbPath1.element)
	feature.dbSvg.element
		.appendChild(feature.dbPath2.element)
	feature.dbSvg.element.after("SSL certificates")
	feature.dbDiv.element
		.appendChild(feature.dbDd.element)
	feature.grid.element
		.appendChild(feature.img.element)

	home.home.element
		.appendChild(feature.main.element)


}

Home()


export default home


/*


	const homeElTree = {
		homeEl : {
			element : "main",
			classes : ["z-0"]
		},
		mainEl : {
			element : "div",
			classes : ["relative", "px-6", "lg:px-8"]
		},
		outerEl : {
			element : "div",
			classes : ["mx-auto", "max-w-2xl", "py-32", "sm:py-48", "lg:py-56"]
		},
		topEl : {
			element : "div",
			classes : ["hidden", "sm:mb-8", "sm:flex", "sm:justify-center"]
		},
		readmoreEl : {
			element : "div",
			classes : ["relative", "rounded-full", "py-1", "px-3", "text-sm", "leading-6", "text-gray-600", "ring-1", "ring-gray-900/10", "hover:ring-gray-900/20"],
			text : "Announcing our next round of funding."
		},
		readmoreAEl : {
			element : "a",
			classes : ["font-semibold", "text-indigo-600"],
			attrs : {
				href : "/#"
			}
		},
		readmoreSpanEl : {
			element : "span",
			classes : ["absolute", "inset-0"],
			attrs : {
				"aria-hidden" : true,
			}
		},
		titleDivEl : {
			element : "div",
			classes : ["text-center"]
		},
		titleH1El : {
			element : "h1",
			classes : ["text-4xl", "font-bold", "tracking-tight", "text-gray-900", "sm:text-6xl"],
			text : "Data to enrich your online business"
		},
		titlePEl : {
			element : "p",
			classes : ["mt-6", "text-lg", "leading-8", "text-gray-600"],
			text : "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
		},
		linkGroupDivEl : {
			element : "div",
			classes : ["mt-10", "flex", "items-center", "justify-center", "gap-x-6"]
		},
		startAEl : {
			element : "a",
			classes : ["rounded-md", "bg-indigo-600", "px-3.5", "py-2.5", "text-sm", "font-semibold", "text-white", "shadow-sm", "hover:bg-indigo-500", "focus-visible:outline", "focus-visible:outline-2", "focus-visible:outlin-offset-2", "focus-visible:outline-indigo-600"],
			text : "GET started",
			attrs : {
				href : "#"
			}
		},
		moreAEl : {
			element : "a",
			classes : ["text-sm", "font-semibold", "leading-6", "text-gray-900"],
			text : "Learn more",
			attrs : {
				href : "#"
			}
		},
		moreSpanEl : {
			element : "span",
			attrs : {
				"aria-hidden" : true
			}
		},
	}

	const featureElTree = {
		mainEl : {
			element : "main"
		},
		featureEl : {
			element : "div",
			classes : ["overflow-hidden", "py-24", "sm:py-32"]
		},
		outerEl : {
			element : "div",
			classes : ["mx-auto", "max-w-7xl", "px-6", "lg:px-8"]
		},
		gridEl : {
			element : "div",
			classes : ["mx-auto", "grid", "max-w-2xl", "grid-cols-1", "gap-y-16", "gap-x-8", "sm:gap-y-20", "lg:mx-0", "lg:max-w-none", "lg:grid-cols-2"]
		},
		innerEl : {
			element : "div",
			classes : ["lg:pr-8", "lg:pt-4"]
		},
		deployDivEl : {
			element : "div",
			classes : ["lg:max-w-lg"]
		},
		deployH2El : {
			element : "h2",
			classes : ["text-base", "font-semibold", "leading-7", "text-indigo-600"],
			text : "Deploy faster"
		},
		betterPEl : {
			element : "p",
			classes : ["mt-2", "text-3xl", "font-bold", "tracking-tight", "text-gray-900", "sm:text-4xl"],
			text : "A better workflow"
		},
		contentPEl : {
			element : "p",
			classes : ["mt-6", "text-lg", "leading-8", "text-gray-600"],
			text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
		},
		dlEl : {
			element : "dl",
			classes : ["mt-10", "max-w-xl", "space-y-8", "text-base", "leading-7", "text-gray-600", "lg:max-w-none"]
		},
		pushDivEl : {
			element : "div",
			classes : ["relative", "pl-9"]
		},
		pushDtEl : {
			element : "dt",
			classes : ["inline", "font-semibold", "text-gray-900"]
		},
		pushSvgEl : {
			element : "svg",
			classes : ["absolute", "top-1", "left-1", "h-5", "w-5", "text-indigo-600"],
			attrsNS : {
				viewBox : "0 0 20 20",
				fill : "currentColor",
				"aria-hidden" : true
			}
		},
		pushPathEl : {
			element : "path",
			attrsNS : {
				"fill-rule" : "evenodd",
				d : "M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z",
				"clip-rule" : "evenodd"
			}
		},
		pushDdEl : {
			element : "dd",
			classes : ["inline"],
			text : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
		},
		sslDivEl : {
			element : "div",
			classes : ["relative", "pl-9"]
		},
		sslDtEl : {
			element : "dt",
			classes : ["inline", "font-semibold", "text-gray-900"]
		},
		sslSvgEl : {
			element : "svg",
			classes : ["absolute", "top-1", "left-1", "h-5", "w-5", "text-indigo-600"],
			attrsNS : {
				viewBox : "0 0 20 20",
				fill : "currentColor",
				"aria-hidden" : true
			}
		},
		sslPathEl : {
			element : "path",
			attrsNS : {
				"fill-rule" : "evenodd",
				d : "M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z",
				"clip-rule" : "evenodd"
			}
		},
		sslDdEl : {
			element : "dd",
			classes : ["inline"],
			text : "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo."
		},
		dbDivEl : {
			element : "div",
			classes : ["relative", "pl-9"]
		},
		dbDtEl : {
			element : "dt",
			classes : ["inline", "font-semibold", "text-gray-900"]
		},
		dbSvgEl : {
			element : "svg",
			classes : ["absolute", "top-1", "left-1", "h-5", "w-5", "text-indigo-600"],
			attrsNS : {
				viewBox : "0 0 20 20",
				fill : "currentColor",
				"aria-hidden" : true
			}
		},
		dbPath1El : {
			element : "path",
			attrsNS : {
				d : "M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"
			}
		},
		dbPath2El : {
			element : "path",
			attrsNS : {
				"fill-rule" : "evenodd",
				d : "M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z",
				"clip-rule" : "evenodd"
			}
		},
		dbDdEl : {
			element : "dd",
			classes : ["inline"],
			text : "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
		},
		imgEl : {
			element : "img",
			classes : ["w-[48rem]", "max-w-none", "rounded-xl", "shadow-xl", "ring-1", "ring-gray-400/10", "sm:w-[57rem]", "md:-ml-4", "lg:-ml-0"],
			attrs : {
				src : "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",
				alt : "Product screenshot",
				width : 2432,
				height : 1442
			}
		}
	}

	const contentElTree = {
		mainEl : {
			element : "div",
		},
		contentEl : {
			element : "div",
			classes : ["bg-white", "py-24", "sm:py-32"]
		},
		outerDivEl : {
			element : "div",
			classes : ["mx-auto", "max-w-7xl", "px-6", "lg:px-8"]
		},
		deployDivEl : {
			element : "div",
			classes : ["mx-auto", "max-w-2xl", "lg:text-center"]
		},
		deployH2El : {
			element : "h2",
			classes : ["text-base", "font-semibold", "leading-7", "text-indigo-600"],
			text : "Deploy faster"
		},
		deployPEl : {
			element : "p",
			classes : ["mt-2", "text-3xl", "font-bold", "tracking-tight", "text-gray-900", "sm:text-4xl"],
			text : "Everything you need to deploy your app"
		},
		deployP2El : {
			element : "p",
			classes : ["mt-6", "text-lg", "leading-8", "text-gray-600"],
			text : "Quis tellus eget adipiscing convallis sit sit eget aliquet quis, Suspendisse eget egestas a element pulvinar et feugiat blandit at. In mi viverra elit nunc."
		},
		dlDivEl : {
			element : "div",
			classes : ["mx-auto", "mt-16", "max-w-2xl", "sm:mt-20", "lg:mt-24", "lg:max-w-4xl"]
		},
		dlEl : {
			element : "dl",
			classes : ["grid", "max-w-xl", "grid-cols-1", "gap-y-10", "gap-x-8", "lg:max-w-none", "lg:grid-cols-2", "lg:gap-y-16"]
		}
	}

	const contentdlElTree = {
		divEl : {
			element : "div",
			classes : ["relative", "pl-16"]
		},
		dtEl : {
			element : "dt",
			classes : ["text-base", "font-semibold", "leading-7", "text-gray-900"]
		},
		dtDivEl : {
			element : "div",
			classes : ["absolute", "top-0", "left-0", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-lg",, "bg-indigo-600"]
		},
		svgEl : {
			element : "svg",
			classes : ["h-6", "w-6", "text-white"],
			attrsNS : { fill : "none",
				viewBox : "0 0 24 24",
				"stroke-width" : "1.5",
				stroke : "currentColor",
				"aria-hidden" : true
			}
		},
		pathEl : {
			element : "path",
			attrsNS : {
				"stroke-linecap" : "round",
				"stroke-linejoin" : "round",
				d : ""
			}
		},
		ddEl : {
			element : "dd",
			classes : ["mt-2", "text-base", "leading-7", "text-gray-600"],
			text : ""
		}
	}
	const contentList = [
		{
			path : "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z",
			text : "Push to deploy",
			dd : "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
		},
		{
			path : "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
			text : "SSL certificates",
			dd : "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
		},
		{
			path : "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
			text : "Simple queues",
			dd : "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
		},
		{
			path : "M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33",
			text : "Advanced security",
			dd : "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
		}


	]


*/

