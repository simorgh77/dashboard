import React from 'react';

const StatusButton = ({title,backgroudColor,color}) => {
    return (
        <button style={{backgroundColor:backgroudColor
            ,color:color,border:"none",padding:".5rem",
        borderRadius:"6px",cursor:"pointer"}}>
            {title}
        </button>
    );
}

export default StatusButton;
