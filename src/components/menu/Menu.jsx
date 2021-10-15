import "./menu.scss"
import List from "../list/List"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
          <ul>
            <List setMenuOpen={setMenuOpen} item={"intro"} nameItem={"Home"}/>
            <List setMenuOpen={setMenuOpen} item={"portfolio"} nameItem={"Portfolio"}/>
            <List setMenuOpen={setMenuOpen} item={"works"} nameItem={"Projetos"}/>
            <List setMenuOpen={setMenuOpen} item={"contact"} nameItem={"Contato"}/>
          </ul>
        </div>
    )
}
