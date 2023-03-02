import { makeTag } from "../../core/Creators.js"
import headerTree from "./headerElTree.js"

class HeaderClass {
	headers = {
		main : null,
		products : [],
		link : []
	}
	constructor(elTree){
		this.headers.main = makeTag(elTree)
	}
	
	listElement(key, length, elTree){
		for(let i = 0 ; i < length ; i++){
			this.headers[key][i] = makeTag(elTree)
		}
		return this
	}

	append(parent, child){
		const p = parent.split(".")
		const c = child.split(".")
		console.log(p)
		this.headers[p[0]][p[1]].element.appendChild(this.headers[c[0]][c[1]].element)
		return this
	}

	after(parent, child){
		const p = parent.split(".")
		const c = child.split(".")
		this.headers[p[0]][p[1]].element.after(this.headers[c[0]][c[1]].element)
		return this
	}

	before(parent, child){
		const p = parent.split(".")
		const c = child.split(".")
		this.headers[p[0]][p[1]].element.before(this.headers[c[0]][c[1]].element)
		return this
	}

	setAttr(element, attr, data){
		element.setAttribute(attr, data)
		return this
	}
	setText(element, text){
		element.innerText = text
		return this
	}
}

const myHeader = new HeaderClass(headerTree.headerElTree)
myHeader.listElement("products", headerTree.productList.length, headerTree.productListElTree)
myHeader.listElement("link", headerTree.linkList.length, headerTree.spaLinkElTree)
myHeader
	.append("main.header", "main.nav")
	.append("main.nav", "main.logoDiv")
	.append("main.logoDiv", "main.logoA")
	.append("main.logoA", "main.company")
	.after("main.company", "main.logoImg")

myHeader.headers.products.map((product, i) => {
	product.divPath.element.setAttribute("d", headerTree.productList[i].path)
	product.a.element.innerText = headerTree.productList[i].title
	product.p.element.innerText = headerTree.productList[i].content
	myHeader
		.append(`products[${i}].div2`, `products[${i}].div3`)
		.append(`products[${i}].div3`, `products[${i}].divSvg`)
		.append(`products[${i}].divSvg`, `products[${i}].divPath`)
		.append(`products[${i}].div2`, `products[${i}].div31`)
		.append(`products[${i}].div31`, `products[${i}].a`)
		.append(`products[${i}].a`, `products[${i}].span`)
		.append(`products[${i}].div31`, `products[${i}].p`)
		.append("main.productDiv1", `products[${i}].div2`)
})


console.log(myHeader.headers.main.header.element)


let headers = null

const header = () => {

	headers = makeTag(headerTree.headerElTree)

	
	let products = []
	headerTree.productList.map((item, i) => {
		products[i] = makeTag(headerTree.productListElTree)
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

	headers.header.element
		.appendChild(headers.nav.element)
		.appendChild(headers.logoDiv.element)
		.appendChild(headers.logoA.element)
		.appendChild(headers.company.element)
		.after(headers.logoImg.element)
	headers.nav.element
		.appendChild(headers.toggleDiv.element)	
		.appendChild(headers.toggleBtn.element)	
		.appendChild(headers.openSpan.element)	
		.after(headers.toggleSvg.element)	
	headers.toggleSvg.element.appendChild(headers.togglePath.element)
	headers.nav.element
		.appendChild(headers.menusDiv.element)
		.appendChild(headers.subMenuDiv.element)
		.appendChild(headers.productBtn.element)
		.appendChild(headers.productSvg.element)
		.appendChild(headers.productPath.element)
	headers.subMenuDiv.element
		.appendChild(headers.productDiv0.element)
		.appendChild(headers.productDiv1.element)
		.appendChild(headers.productDiv2.element)
		.appendChild(headers.productDiv3.element)
		.appendChild(headers.productDivSvg.element)
		.appendChild(headers.productPath1.element)
		.after(headers.productPath2.element)

	products.map((product) => {
		headers.productDiv1.element.appendChild(product.div2.element)
	})

	headers.productDiv2.element
		.appendChild(headers.analyDiv.element)
		.appendChild(headers.analyA.element)
		.appendChild(headers.analySapn.element)
	headers.analyDiv.element
		.appendChild(headers.analyP.element)

	let link = []
	headerTree.linkList.map((a, i) => {
		link[i] = makeTag(headerTree.spaLinkElTree)
		link[i].spaLink.element.innerText = a.text
		link[i].spaLink.element.setAttribute("href", a.href)
		headers.menusDiv.element.appendChild(link[i].spaLink.element)
	})
	headers.nav.element
		.appendChild(headers.loginDiv.element)
		.appendChild(headers.loginA.element)
		.appendChild(headers.loginSpan.element)

}

header()


export default headers



