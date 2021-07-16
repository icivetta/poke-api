import React from "react";
import Logo from "./Logo.png";
import '../App.css';
import Pokeball from "./pokeball.png";
import Linkedin from "./linkedin.png";
import Github from "./Github.png";

class Header extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="header">
            <div>
                <a onClick={() => window.location.reload(false)} href="https://www.linkedin.com/in/ignacio-civetta/"><img id="linkedin" className='Logos' src={Linkedin} alt=""/></a>
                </div>
                <div>
                      <a onClick={() => window.location.reload(false)} href="">
                    <h2 id="miNombre" >IGNACIO CIVETTA</h2>
                    </a>
                </div>
                
                <div>
                <a onClick={() => window.location.reload(false)} href="https://github.com/icivetta"><img id="github" className='Logos' src={Github} alt=""/></a>
                </div>
            </div>
        )
    }

}
export default Header