
import { SetPage } from "../../core/Creators.js";
import homeTree from "./homeElTree.js"

export const Home = new SetPage(homeTree.homeElTree)
Home.append("main.home", "main.main", "main.outer", "main.top", "main.readmore", "main.readmoreA", "main.readmoreSpan")
	.append("main.outer", "main.titleDiv", "main.titleH1")
	.append("main.titleDiv", "main.titleP")
	.append("main.outer", "main.linkGroupDiv")
	.append("main.linkGroupDiv", "main.startBtn")
	.append("main.linkGroupDiv", "main.moreA", "main.moreSpan")
Home.page.main.readmoreSpan.element.after(" Readmore →")

const Home2 = new SetPage(homeTree.contentElTree)
Home2.listElement("contents", homeTree.contentList.length, homeTree.contentDlElTree)
Home2.append("main.main", "main.content", "main.outerDiv", "main.deployDiv")
	.append("main.deployDiv", "main.deployH2")
	.append("main.deployDiv", "main.deployP")
	.append("main.deployDiv", "main.deployP2")
	.append("main.outerDiv", "main.dlDiv", "main.dl")

Home2.page.contents.map((content, i) => {
	content.path.element.setAttribute("d", homeTree.contentList[i].path)
	content.dd.element.innerText = homeTree.contentList[i].dd
	Home2.append(content.div.element, content.dt.element, content.dtDiv.element, content.svg.element, content.path.element)
		.append(content.div.element, content.dd.element)
		.append(Home2.page.main.dl.element, content.div.element)
	content.dtDiv.element.after(homeTree.contentList[i].text)
})

export const Home3 = new SetPage(homeTree.featureElTree)
Home3.append("main.main", "main.feature", "main.outer", "main.grid", "main.inner", "main.deployDiv", "main.deployH2")
	.append("main.deployDiv", "main.betterP", "main.contentP")
	.append("main.deployDiv", "main.dl", "main.pushDiv", "main.pushDt", "main.pushSvg", "main.pushPath")
	.append("main.pushDiv", "main.pushDd")
	.append("main.dl", "main.sslDiv", "main.sslDt", "main.sslSvg", "main.sslPath")
	.append("main.sslDiv", "main.sslDd")
	.append("main.dl", "main.dbDiv", "main.dbDt", "main.dbSvg", "main.dbPath1")
	.append("main.dbSvg", "main.dbPath2")
	.append("main.dbDiv", "main.dbDd")
	.append("main.grid", "main.img")

Home3.page.main.pushSvg.element.after("Push to Deploy.")
Home3.page.main.sslSvg.element.after("SSL certificates.")
Home3.page.main.dbSvg.element.after("Database backups.")

Home.page.main.home.element.appendChild(Home2.page.main.main.element)

document.addEventListener("scroll", () => {
	let currentScroll = document.documentElement.scrollTop
	if(currentScroll > 700){
		Home.page.main.home.element.appendChild(Home3.page.main.main.element)
	}
})




export default Home


