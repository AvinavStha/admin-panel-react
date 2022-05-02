import React from 'react';
import './sidebar.css';
import { LineStyle, TrendingUp, AttachMoney, MailOutline, Feedback, ChatBubbleOutline, PermIdentity, Storefront } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h1 className="sidebarTitle">Dashboard</h1>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Analytical
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h1 className="sidebarTitle">Quick Menu</h1>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem ">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Transactions
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h1 className="sidebarTitle">Notification</h1>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
