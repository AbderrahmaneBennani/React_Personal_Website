import "./Navbar.css"
import logo from "../assets/code.png"

function Navbar() {
    return (
      <div className="Navbar">
       <img href="#" className="Navbar--logo" src={logo} />
        <nav>
            <ul className="Navbar--links">
                <li><a href="#">Projects</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
       </nav>
       <a href="#"><button className="Navbar--button">Hire me</button></a>
      </div>
    )
  }
  
  export default Navbar