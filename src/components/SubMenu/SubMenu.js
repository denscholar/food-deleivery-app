import React from 'react';
import { ChevronRightRounded } from '@mui/icons-material';
import './SubMenu.css';

const SubMenu = ({name}) => {
  return (
    <div className="subMenucontainer">
        <h3>{name}</h3>
        <div className="viewAll">
            <p>View All</p>
            <ChevronRightRounded/>
        </div>
    </div>
  )
}

export default SubMenu