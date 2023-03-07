
const actionsGroup = {
    productBtnClick : async () => {
        const {default : Header} = await import("./Header.js")
        Header.page.main.productDiv0.element.classList.toggle("hidden")
    },
    menuCloseClick : async () => {
        console.log(Header.page.main.header.element.lastChild)
        const {default : Header} = await import("./Header.js")
        Header.page.main.header.element.lastChild.classList.add("hidden")
    },
    mobildShowClick : async () => {
        const {default : Header} = await import("./Header.js")
        Header.page.main.header.element.lastChild.classList.remove("hidden")
    },
    showHome2Click : async () => {
        const {default : Home} = await import("../home/Home.js")
        Home.page.main.home.element.appendChild(Home3.page.main.main.element)
    },
    showProfileClick : async () => {
        const {default : Header2} = await import("./Header2.js")
        Header2.page.main.profileSubDiv.element.classList.toggle("hidden")
    },
    showMobileMenuClick : async () => {
        const {default : Header2} = await import("./Header2.js")
        Header2.page.main.mobileDiv.element.classList.toggle("hidden")
        Header2.page.main.closeSvg.element.classList.toggle("hidden")
        Header2.page.main.openSvg.element.classList.toggle("hidden")
    }
}

export default actionsGroup

