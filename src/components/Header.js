import React from "react";
import "./Header.css";

const Header = () => {

    return (

        <header className="header">
            <div className="header-content">

                <div className="header-text">
                    <h1>
                        Hi There, I am <span className="name">Jony</span>
                    </h1>
                    <h2 className="role">Creative Director</h2>
                    <button className="View">View Works</button>
                </div>

                <div className="header-image">
                    <img src="./Jony.png" alt="Jony" />
                </div>

            </div>
        </header >
    );

};

export default Header;
