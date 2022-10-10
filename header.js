
import { Link } from "react-router-dom";
import "./header.css";
const Header=()=>{
    return (
        <>
            <nav className="header">
                <section className="logo">
                    <img src={require("../src/images/header.png")} alt="log"/>
                </section>
                <section className="camera-icon" >
                <Link to="/form-page">
                <img  src={require("../src/images/camera.png")} alt="camera"  />
                </Link>                
                </section>
                
            </nav>
        </>
    )
}
export default Header