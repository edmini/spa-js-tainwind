import Header from "./Header.js"
import Home from "../home/Home.js"

const actions = {
    productBtnClick : () => {
        Header.page.main.productDiv0.element.classList.toggle("hidden")
    },
    menuCloseClick : () => {
        console.log(Header.page.main.header.element.lastChild)
        Header.page.main.header.element.lastChild.classList.add("hidden")
    },
    mobildShowClick : () => {
        console.log("Hello world")
        Header.page.main.header.element.lastChild.classList.remove("hidden")
    },
    showHome2Click : () => {
        Home.page.main.home.element.appendChild(Home3.page.main.main.element)
    }
}

export default actions

