import React from 'react';
import "./widgetSm.css";
import {Visibility} from '@material-ui/icons';

const WidgetSm = () => {
  return (
  <div className="widgetSm">
      <span className="widgetSmTitle">Newly Joined Members</span>
      <ul className="widgetSmList">
          <li className="widgetSmListItem">
              <img src="https://images.pexels.com/photos/10049249/pexels-photo-10049249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Rabin</span>
                <span className="widgetSmUserTitle">Software Developer</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
          </li>

          <li className="widgetSmListItem">
              <img src="https://images.pexels.com/photos/10049249/pexels-photo-10049249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Rabin</span>
                <span className="widgetSmUserTitle">Software Developer</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
          </li>

          <li className="widgetSmListItem">
              <img src="https://images.pexels.com/photos/10049249/pexels-photo-10049249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
              <span className="widgetSmUsername">Rabin</span>
                <span className="widgetSmUserTitle">Software Developer</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
          </li>

          <li className="widgetSmListItem">
              <img src="https://images.pexels.com/photos/10049249/pexels-photo-10049249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
               <span className="widgetSmUsername">Rabin</span>
                <span className="widgetSmUserTitle">Software Developer</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
          </li>

          <li className="widgetSmListItem">
              <img src="https://images.pexels.com/photos/10049249/pexels-photo-10049249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
              <div className="widgetSmUser">
              <span className="widgetSmUsername">Rabin</span>
                <span className="widgetSmUserTitle">Software Developer</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon"/>
                  Display
              </button>
          </li>
      </ul>
  </div>
  );
};

export default WidgetSm;
