
import { SetPage } from "../../core/Creators.js"
import headerTree from "./header2ElTree.js"

const Header2 = new SetPage(headerTree.headerElTree)
Header2.listElement("links", headerTree.linkList.length, headerTree.linkListElTree)
Header2.listElement("profiles", headerTree.profileList.length, headerTree.profileListElTree)
Header2.listElement("mobilelinks", headerTree.linkList.length, headerTree.mobileListElTree)

Header2.append("main.nav", "main.outerDiv", "main.innerDiv", "main.toggleDiv", "main.toggleBtn", "main.toggleSpan")
Header2.append("main.toggleBtn", "main.closeSvg", "main.closePath")
Header2.append("main.toggleBtn", "main.openSvg", "main.openPath")
Header2.append("main.innerDiv", "main.logoOuterDiv", "main.logoDiv", "main.logoA", "main.logoImg")
Header2.append("main.logoOuterDiv", "main.linkOuterDiv", "main.linkInnerDiv")
Header2.append("main.innerDiv", "main.bellDiv", "main.bellBtn", "main.bellSpan")
Header2.append("main.bellBtn", "main.bellSvg", "main.bellPath")
Header2.append("main.bellDiv", "main.profileDiv", "main.profileInnerDiv", "main.profileBtn", "main.profileSpan")
Header2.append("main.profileBtn", "main.profileImg")
Header2.append("main.profileInnerDiv", "main.profileSubDiv")
Header2.append("main.nav", "main.mobileDiv", "main.mobileLinkDiv")

Header2.page.links.map((link, i) => {
    link.mainLinkA.element.innerText = headerTree.linkList[i].text
    link.mainLinkA.element.setAttribute("href", headerTree.linkList[i].href)
    Header2.append(Header2.page.main.linkInnerDiv.element, link.mainLinkA.element)
})
Header2.page.profiles.map((profile, i) => {
    profile.profileA.element.innerText = headerTree.profileList[i].text
    profile.profileA.element.setAttribute("href", headerTree.profileList[i].href)
    Header2.append(Header2.page.main.profileSubDiv.element, profile.profileA.element)
})
Header2.page.mobilelinks.map((link, i) => {
    link.mobileLinkA.element.innerText = headerTree.linkList[i].text
    link.mobileLinkA.element.setAttribute("href", headerTree.linkList[i].href)
    Header2.append(Header2.page.main.mobileLinkDiv.element, link.mobileLinkA.element)
})


export default Header2


