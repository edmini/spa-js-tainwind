

export class Create {
	element = null

	constructor(element){
		if(element.element === "svg" || element.element === "path"){
			this.element = document.createElementNS("http://www.w3.org/2000/svg", element.element)
		}else{
			this.element = document.createElement(element.element)
		}

		element.classes && this.setClasses(element.classes)
		element.class && this.setClass(element.class)
		element.id && this.setId(element.id)
		element.text && this.setText(element.text)
		element.attrs && this.setAttrs(element.attrs)
		element.attrsNS && this.setAttrsNS(element.attrsNS)
		element.actions && this.setActions(element.actions)
		element.child && this.setAppendChild(element.child)
	}

	setClasses(classes){
		const tagClass = classes.join(" ")
		this.element.setAttribute("class", tagClass)
	}
	setClass(tagClass){
		this.element.setAttribute("class", tagClass)
	}
	setId(tagId){
		this.element.setAttribute("id", tagId)
	}
	setText(text){
		this.element.innerText = text
	}
	setAttrs(attrs){
		const keys = Object.keys(attrs)
		keys.map((attr) => {
			if(attr === "checked" && attrs[attr] === false){
				return
			}else{
				this.element.setAttribute(attr, attrs[attr])
			}
		})
	}
	setAttrsNS(attrsNS){
		const keys = Object.keys(attrsNS)
		keys.map((attr) => {
			if(attr === "checked" && attrsNS[attr] === false){
				return
			}else{
				this.element.setAttributeNS(null, attr, attrsNS[attr])
			}
		})
	}
	setAppendChild(child){
		const statusKey = Object.keys(child)
		statusKey.map((key) => {
			if(key === "append"){
				this.element.appendChild(child[key].element)
			}else if(key === "after"){
				this.element.after(child[key].element)
			}else if(key === "before"){
				this.element.before(child[key].element)
			}
		})
	}
	setActions(actions){
		const actionKeys = Object.keys(actions)
		actionKeys.map((actionName) => {
			this.element.addEventListener(actionName, (e) => {
				if(e){
					actions[actionName](e)
				}else{
					actions[actionName]()
				}
			})
		})
	}
}

export const makeTag = (treeEl) => {
	let tree = {}
	const elKeys = Object.keys(treeEl)
	elKeys.map((elName) => {
		tree[elName.slice(0,-2)] = new Create(treeEl[elName])
	})
	return tree
}


export class SetPage {
	page = {}
	constructor(elTree){
		this.page.main = makeTag(elTree)
	}
	
	listElement(key, length, elTree){
		this.page[key] = []
		for(let i = 0 ; i < length ; i++){
			this.page[key][i] = makeTag(elTree)
		}
		return this
	}

	append(parent, ...child){

		if(typeof(parent) === "string"){
			const p = parent.split(".")
			let children = []
			child.map((ch, i) => {
				children.push(ch.split("."))
				if(i === 0){
					this.page[p[0]][p[1]].element.appendChild(this.page[children[i][0]][children[i][1]].element)
				}else{
					this.page[children[i-1][0]][children[i-1][1]].element.appendChild(this.page[children[i][0]][children[i][1]].element)
				}
				
			})
		}else{
			let children = []
			for(let i = 0 ; i < child.length ; i++){
				if(i === 0){
					parent.appendChild(child[i])
				}else{
					child[i-1].appendChild(child[i])
				}
			}
		}
		return this
	}

	after(parent, child){
		if(typeof(parent) === "string" && typeof(child) === "string"){
			const p = parent.split(".")
			const c = child.split(".")
			this.page[p[0]][p[1]].element.after(this.page[c[0]][c[1]].element)
		}else{
			parent.appendChild(child)
		}
		return this
	}

	before(parent, child){
		if(typeof(parent) === "string" && typeof(child) === "string"){
			const p = parent.split(".")
			const c = child.split(".")
			this.page[p[0]][p[1]].element.before(this.page[c[0]][c[1]].element)
		}else{
			parent.appendChild(child)
		}
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


const dataToType = {
	String  : (item) => false || item,
	Number  : (item) => false || parseInt(item),
	Date	: (item) => false || new Date(item),
	Boolean : (item) => false || JSON.parse(item.toLowerCase()),
}
export const arrToObj = (menus, types, arrData) => {
	let tempData = {}
	arrData.map((item, i) => {
		tempData[menus[i]] = dataToType[types[i]](item)
	})
	return tempData
}


// Table maker
export const tableBody = (datas) => {
	const TableBodyElTree = {
		trEl : {
			element : "tr"
		},
		thEl : {
			element : "th",
		},
		tdEl : {
			element : "td"
		}
	}

	let headerKeys = {}
	let dataTDs = {}
	let dataTRs = []
	if(datas){
		const dataKeys = Object.keys(datas[0])

		dataKeys.map((key) => {
			headerKeys[key] = new Create(TableBodyElTree.thEl)
			headerKeys[key].element.innerText = key
		})
		datas.map((data, i) => {
			dataTRs.push(new Create(TableBodyElTree.trEl))
			dataTDs[i] = {}
			dataKeys.map((key) => {
				dataTDs[i][key] = new Create(TableBodyElTree.tdEl)
				if(typeof(data[key]) === "object"){
					dataTDs[i][key].element.appendChild(data[key])
				}else{
					dataTDs[i][key].element.innerText = data[key]
				}
			})
		})
		dataTRs.map((tr, i) => {
			dataKeys.map((key) => {
				tr.element.appendChild(dataTDs[i][key].element)
			})
		})
	}
	return {headerKeys, dataTRs, dataTDs}
}


export const makeTable = (tableElTree, datas) => {

	const TableTree = makeTag(tableElTree)
	const tableDataBody = tableBody(datas)

	const header = datas && Object.keys(datas[0])
	datas && header.map((key) => {
		TableTree.tr.element.appendChild(tableDataBody.headerKeys[key].element)
	})

	tableDataBody.dataTRs.map((tr) => {
		TableTree.tbody.element.appendChild(tr.element)
	})

	TableTree.table.element.appendChild(TableTree.thead.element)
	TableTree.table.element.appendChild(TableTree.tbody.element)
	TableTree.thead.element.appendChild(TableTree.tr.element)

	return {table : TableTree, headers : tableDataBody.headerKeys, bodys : tableDataBody.dataTDs}
}


