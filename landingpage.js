import { Link } from "react-router-dom"
import LandingImage from "./images/landing.jpg"
import "./landing.css"
const Landing = () =>{
    return(
   <>
   <div className="landingPage">
      <div className="landing-image">
        <img src={LandingImage} alt="image"/>
      </div>
      <div  className="actions">
        <div>10x Team 04</div>
        <Link to="/post-view">
        <div className="button-div">
            <button className="button">Enter</button>
        </div>
        </Link>
      </div>
   </div>
   </>
    )
}
export default Landing