import React from 'react';

import "./Arrivals.css"
import StatusButton from "../statusButton/StatusButton";
const Arrivals = ({icon,title,description,price,
    paidStatus,
    currentStatus,backgroundColor,
    color}) => {
    return (
        <div className='arrivalContainer'>

            <div  className='arivalWrapper'>
            <div className="arrivalIcon">
                <img src={`/icons/${icon}.svg`} width="30px" alt="icon" />
            </div>
            <div className="details">
                <div className="title">
                    {title}
                </div>
                <div className="description">
                   <span>FTP: </span> 
                    <span>
                    {description}
                        </span>
                </div>
            </div>
            </div>

            <div className='otherDetails'>
                <div className="price">
                    <span>{price}</span>
                    <span>{paidStatus}</span>
                </div>
             
                <div className="status">
                    <StatusButton title={currentStatus} backgroudColor={backgroundColor} color={color}/>
                </div>

                <div className="actions">
                    <button><img src="./icons/ButtonSettings.svg" alt="setting" /></button>
                    <button><img src="./icons/ButtonEdit.svg" alt="edit" /></button>
                    <button><img src="./icons/ButtonTrash.svg" alt="trash" /></button>

                </div>
            </div>
        </div>
    );
}

export default Arrivals;
