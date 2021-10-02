import '../../css/main.css'
import React from 'react'

const SidebarOption = ({active, icon, name}) => {
    return (
        <div className={`sidebarOption ${active && "active"}`}>
            <div className="icon-container">
                <i className={icon +  " fa-2x icon"}></i>
            </div>
            <h4 className="name">{name}</h4>
        </div>
    )
}

export default SidebarOption