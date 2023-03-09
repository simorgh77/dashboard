import React from 'react';

import "./WidgetCards.css"

const WidgetCards = ({icon,title,description,backgroundColor,titleColor
    ,descriptionColor}) => {
    return (
        <div className='widgetCard' style={{backgroundColor:backgroundColor}}>
           <div className='widgetImage'>

           
            <img src={`./icons/${icon}.svg`} alt="widget"  />
            </div>
            <div className='widgetDetail'>
            <span style={{color:titleColor}}>{title}</span>
            <span style={{color:descriptionColor}}>{description}</span>
            </div>
           
        </div>
    );
}

export default WidgetCards;
