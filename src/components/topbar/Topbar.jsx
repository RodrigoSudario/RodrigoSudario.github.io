import "./topbar.scss"

import {
    WhatsApp,
    Mail,
} from '@material-ui/icons';


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
          <div className="wrapper">
            <div className="left">
              <a href="#intro" className="logo">Portfólio</a>
              <div className="itemContainer">
                <WhatsApp className="icon" />
                <span>+55 85 992868082</span>
              </div>
              <div className="itemContainer">
                <Mail className="icon" />
                <span>monteiro.sudario@gmail.com</span>
              </div>
            </div>
            <div className="right">
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
              </div>
            </div>
          </div>
        </div>
    )
}
