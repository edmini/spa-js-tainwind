
import Home, {Home3} from "../home/Home.js"

const actions = {
    showHome2Click : () => {
        if(Home3.page.main.main.element.parentElement){
            Home.page.main.home.element.removeChild(Home3.page.main.main.element)
        }else{
            Home.page.main.home.element.appendChild(Home3.page.main.main.element)
        }
    }
}

export default actions

