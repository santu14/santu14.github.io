import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div  className="card justify-content-center header-card">
            <div className="typewriter">
                <h1>Hello, my name is Santiago Solana.</h1>
            </div>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link about"  href={props.link}>About</a>
                </li>

                <li className="nav-item">
                    <h1 className="divider">|</h1>
                </li>

                <li className="nav-item">
                    <a className="nav-link portfolio"  href={props.link}>Portfolio</a>
                </li>

                <li className="nav-item">
                    <h1 className="divider">|</h1>
                </li>

                <li className="nav-item">
                    <a className="nav-link contact"  href={props.link}>Contact</a>
                </li>
            </ul>
        </div>
  );
}

export default Header;
