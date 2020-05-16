import React, { Component } from "react";
import "./directory.styles.scss"
import MenuItem from "../menu-item/menu-item.component"
import sections from "./directory.data"



class Directory extends Component{
    constructor(){
        super();
        this.state = {
            sections:sections
        }
    }
    render()
    {   
        return  (
            <div className="directory-menu">
                {this.state.sections.map(section => 
                    <MenuItem title={section.title} subtitle="Shpo Now"  key= {section.id}  imageUrl={section.imageUrl}  size={section.size}/>
                )}
            </div>
        )
    }
}

export default Directory