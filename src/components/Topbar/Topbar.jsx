import React from 'react';
import "./topbar.css";
import avinav from "../../img/avinav.jpg";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Shrestha Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src={avinav} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
