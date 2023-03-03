
import Home, {Home3} from "../home/Home.js"

const actions = {
    showHome2Click(e){
        Home.page.main.home.element.appendChild(Home3.page.main.main.element)
        // console.log(Home3)
    }
}

export default actions

