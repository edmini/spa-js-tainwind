
import { SetPage } from "../../core/Creators.js"
import headerTree from "./headerElTree.js"

const Header = new SetPage(headerTree.headerElTree)
Header.listElement("products", headerTree.productList.length, headerTree.productListElTree)
Header.listElement("link", headerTree.linkList.length, headerTree.spaLinkElTree)
Header
	.append("main.header", "main.nav")
	.append("main.nav", "main.logoDiv")
	.append("main.logoDiv", "main.logoA")
	.append("main.logoA", "main.company")
	.append("main.logoA", "main.logoImg")
	.append("main.nav", "main.toggleDiv")
	.append("main.toggleDiv", "main.toggleBtn")
	.append("main.toggleBtn", "main.openSpan")
	.append("main.openSpan", "main.toggleSvg")
	.append("main.nav", "main.menusDiv")
	.append("main.menusDiv", "main.subMenuDiv")
	.append("main.subMenuDiv", "main.productBtn")
	.append("main.productBtn", "main.productSvg")
	.append("main.productSvg", "main.productPath")
	.append("main.subMenuDiv", "main.productDiv0")
	.append("main.productDiv0", "main.productDiv1")
	.append("main.productDiv1", "main.productDiv2")
	.append("main.productDiv2", "main.productDiv3")
	.append("main.productDiv3", "main.productDivSvg")
	.append("main.productDivSvg", "main.productPath1")
	.append("main.productDivSvg", "main.productPath2")
	.append("main.productDiv2", "main.analyDiv")
	.append("main.analyDiv", "main.analyA")
	.append("main.analyA", "main.analySpan")
	.append("main.analyDiv", "main.analyP")
	.append("main.nav", "main.loginDiv")
	.append("main.loginDiv", "main.loginA")
	.append("main.loginA", "main.loginSpan")


Header.page.products.map((product, i) => {
	product.divPath.element.setAttribute("d", headerTree.productList[i].path)
	product.a.element.innerText = headerTree.productList[i].title
	product.p.element.innerText = headerTree.productList[i].content
	Header
		.append(product.div2.element, product.div3.element)
		.append(product.div3.element, product.divSvg.element)
		.append(product.divSvg.element, product.divPath.element)
		.append(product.div2.element, product.div31.element)
		.append(product.div31.element, product.a.element)
		.append(product.a.element, product.span.element)
		.append(product.div31.element, product.p.element)
		.append(Header.page.main.productDiv1.element, product.div2.element)
})
Header.page.link.map((link, i) => {
	link.spaLink.element.innerText = headerTree.linkList[i].text
	link.spaLink.element.setAttribute("href", headerTree.linkList[i].href)
	Header.append(Header.page.main.menusDiv.element, link.spaLink.element)
})

export default Header

