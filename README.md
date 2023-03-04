# Single Page App - Only JS feat tailwind
## 기본동작
...

## files
1. homeElementTree 구성
* ElTreeName 지정
    * mainEl 내부 element 지정 이름에는 abcEl로 지정해야 함
        - element : html element 이름 지정
        - classes : class 이름을 배열로 지정
        - text : innerText 로 지정될 내용
        - id : id 이름 지정
        - attrs : 그외 Attribute는 이 안에 지정
            - svg, path 는 attrsNS 로지정
```js
const homeElementTree = {
    containerEl : {
        element : "div",
        classes : ["container", "bg-white", "className"],
        id : "idName",
        attrs : {
            "aria-data" : "data status",
        }
    },
    titleEl : {
        element : "h1",
        classes : ["text-white", "text-center"],
        text : "innerText Title"
    },
    linkEl : {
        element : "a",
        classes : ["spa-link"],
        text : "my link",
        attrs : {
            href : "/mylink"
        }
    }
}
```

2. Home.js 동작
```js
const Home = new SetPage(homeElementTree)
```
* homeElementTree에 지정한 element가 모두 생성됨
    * Home 객체의 구성
        - Home.page.main.elementName.element
        - elementName 은 homeElementTree 의 El에 이름으로 지정됨
            - 예 : mainEl은 main, titleEl은 title로 생성됨
* 생성된 element를 생성하고픈 형태의 tree로 apendChild 시킴
* SetPage method
```js
append(parent, ...child)
```
```js
Home.append("main.container", "main.title", "main.link")
```
* append(paren, ...child) 동작
    * paren.appendChild.child[0]
    * child[0].appendChild.child[1] 순서대로 앞 element에 뒤 element가 appendChild로 지정됨
