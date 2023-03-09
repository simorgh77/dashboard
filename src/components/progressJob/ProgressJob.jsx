import React from 'react';
import "./ProgressJob.css"
const ProgressJob = ({icon,title,description}) => {
    return (
        <div className='progressWrapper'>
            <div className="image">
                <img src={`/icons/${icon}.svg`} width="40px" alt="icon" />
            </div>
            <div className="details">
                <div className="title">
                    {title}
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    );
}

export default ProgressJob;
