import picture from "../assets/typemachine.jpg"
import "./Main.css"

function Main() {
    return (
      <div className="container">
        <div className="header">
          <h3 className="header--title">I'm Abderrahmane Bennani</h3>
          <p>an inspiring software developper</p>
        </div>
       <img className="picture" src={picture} alt="a picture of a typemachine" />
      </div>
    )
  }
  
  export default Main
