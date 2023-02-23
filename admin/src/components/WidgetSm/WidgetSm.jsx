import React from 'react';
import './WidgetSm.css';
import avatar from '../../images/avatar.png';
import { Visibility } from '@mui/icons-material';

export const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={avatar} alt="avatar" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={avatar} alt="avatar" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">System Administrator</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={avatar} alt="avatar" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Full Stack Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={avatar} alt="avatar" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">ICT Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon' /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={avatar} alt="avatar" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">John Doe</span>
            <span className="widgetSmUserTitle">Project Manager</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/> Display
          </button>
        </li>
      </ul>
    </div>
  );
};
