import React from "react";
import "./homepage.styles.scss"

function HomPage(){
    return (
        <div className="hompage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">Shpo Now</span>
                    </div>               
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">JACKETS</h1>
                        <span className="subtitle">Shpo Now</span>
                    </div>               
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">SNEAKERS</h1>
                        <span className="subtitle">Shpo Now</span>
                    </div>               
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">WOMEN'S</span>
                    </div>               
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">MEN'S</span>
                    </div>               
                </div>
            </div>
        </div>
    )
}

export default HomPage;
