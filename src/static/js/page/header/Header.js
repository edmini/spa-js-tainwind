
import { SetPage } from "../../core/Creators.js"
import headerTree from "./headerElTree.js"


const Header = new SetPage(headerTree.headerElTree)

document.addEventListener("scroll", () =>{
	let currentScroll = null
	currentScroll = document.documentElement.scrollTop
	if(currentScroll > 100){
		Header.page.main.header.element.classList.add("backdrop-blur-sm", "bg-white/60", "shadow-md")
	}
	if(currentScroll < 100){
		Header.page.main.header.element.classList.remove("backdrop-blur-sm", "bg-white/60", "shadow-md")
	}
})

Header.listElement("products", headerTree.productList.length, headerTree.productListElTree)
Header.listElement("link", headerTree.linkList.length, headerTree.spaLinkElTree)
Header
	.append("main.header", "main.nav", "main.logoDiv", "main.logoA")
	.append("main.logoA", "main.company")
	.append("main.logoA", "main.logoImg")
	.append("main.nav", "main.toggleDiv", "main.toggleBtn", "main.openSpan")
	.append("main.toggleBtn", "main.toggleSvg", "main.togglePath")
	.append("main.nav", "main.menusDiv", "main.subMenuDiv", "main.productBtn", "main.productSvg", "main.productPath")
	.append("main.subMenuDiv", "main.productDiv0", "main.productDiv1", "main.productDiv2", "main.productDiv3", "main.productDivSvg")
	.append("main.productDivSvg", "main.productPath1")
	.append("main.productDivSvg", "main.productPath2")
	.append("main.productDiv2", "main.analyDiv", "main.analyA", "main.analySpan")
	.append("main.analyDiv", "main.analyP")
	.append("main.nav", "main.loginDiv", "main.loginA", "main.loginSpan")

Header.page.products.map((product, i) => {
	product.divPath.element.setAttribute("d", headerTree.productList[i].path)
	product.a.element.innerText = headerTree.productList[i].title
	product.p.element.innerText = headerTree.productList[i].content
	Header
		.append(product.div2.element, product.div3.element, product.divSvg.element, product.divPath.element)
		.append(product.div2.element, product.div31.element, product.a.element, product.span.element)
		.append(product.div31.element, product.p.element)
		.append(Header.page.main.productDiv1.element, product.div2.element)
})
Header.page.link.map((link, i) => {
	link.spaLink.element.innerText = headerTree.linkList[i].text
	link.spaLink.element.setAttribute("href", headerTree.linkList[i].href)
	Header.append(Header.page.main.menusDiv.element, link.spaLink.element)
})

export const MobileHeader = new SetPage(headerTree.mobileElTree)
MobileHeader.listElement("link", headerTree.linkList.length, headerTree.mobileLinkElTree)
MobileHeader.listElement("products", headerTree.productList.length, headerTree.mobileProductLinkElTree)
MobileHeader
	.append("main.mobile", "main.outer1")
	.append("main.mobile", "main.outer2", "main.logoDiv", "main.logoA", "main.logoSpan")
	.append("main.logoA", "main.logoImg")
	.append("main.logoDiv", "main.closeBtn", "main.closeSpan")
	.append("main.closeBtn", "main.closeSvg", "main.closePath")
	.append("main.outer2", "main.menusDiv", "main.menusInner", "main.menusSpace", "main.btnDiv", "main.productBtn", "main.productSvg", "main.productPath")
	.append("main.btnDiv", "main.productLinkDiv")
	.append("main.menusInner", "main.loginDiv", "main.loginA")

MobileHeader.page.link.map((item, i) => {
	item.spaLinkA.element.innerText = headerTree.linkList[i].text
	item.spaLinkA.element.setAttribute("href", headerTree.linkList[i].href)
	MobileHeader.append(MobileHeader.page.main.menusSpace.element, item.spaLinkA.element)
})
MobileHeader.page.products.map((product, i) => {
	// product.productLinkA.element.setAttribute("href", headerTree.productList[i].href)
	product.productLinkA.element.innerText = headerTree.productList[i].title
	MobileHeader.append(MobileHeader.page.main.btnDiv.element, product.productLinkA.element)
})


Header.page.main.header.element.appendChild(MobileHeader.page.main.mobile.element)


export default Header

