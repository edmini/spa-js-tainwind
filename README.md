# Single Page App - Only JS feat tailwind

## Demo Page
[Page Link](https://spa-onjs.onrender.com/)
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

3. GoogleApis 연결을 위한 .env 파일

```
TYPE=service_account
PROJECT_ID=project-id
PRIVATE_KEY_ID=privatekey
PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nPrivate_Key....................\n-----END PRIVATE KEY-----\n
CLIENT_EMAIL=client_email@project-id.iam.gserviceaccount.com
CLIENT_ID=client_id
AUTH_URI=https://accounts.google.com/o/oauth2/auth
TOKEN_URI=https://oauth2.googleapis.com/token
AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/gsheet-service-account-id%40eds-gsheet-project-id.iam.gserviceaccount.com
```

TYPE, PROJECT_ID, PRIVATE_KEY_ID, PRIVATE_KEY, CLIENT_EMAIL, CLIENT_ID 를 각각 입력
CLIENT_EMAIL 을 사용할 구글시트 파일 -> 공유 -> 공유 이메일에 해당 메일 입력
