import '../../css/main.css'
import React from 'react'

import SidebarOption from './SidebarOption';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarOption-container">
                <i className="fab fa-twitter fa-2x twitter-icon"></i>
                <SidebarOption active icon="fas fa-home" name="Home"/>
                <SidebarOption icon="fas fa-hashtag" name="Explore"/>
                <SidebarOption icon="far fa-bell" name="Notifications"/>
                <SidebarOption icon="far fa-envelope" name="Messages"/>
                <SidebarOption icon="far fa-bookmark" name="Bookmarks"/>
                <SidebarOption icon="far fa-list-alt" name="Lists"/>
                <SidebarOption icon="far fa-user" name="Profile"/>
                <SidebarOption icon="far fa-dot-circle" name="More"/>

                <button type="button" className="btn btn-primary btn-tweet">Tweet</button>
            </div>
        </div>
    )
}

export default Sidebar;