import React from "react";
import "./UserSpecifications.css";
const UserSpecifications = ({
  profile,
  name,
  skills,
  salary,
  salaryStatus,
  commissionPrice,
  commissionStatus,
  companyName,
  activity,
  rate,
  rateStatus
}) => {
  return  (
    <div className="tableWrapper">
    <td className="products">
            <img src={`/icons/${profile}.svg`} alt="avatar" />
            <div className="data">
                <span>{name}</span>
                <span>{skills}</span>
            </div>
        
    </td>

    <td className="earnings">
        <span>{salary}</span>
        <span>{salaryStatus}</span>
    </td>

    <td className="comission">
        <span>{commissionPrice}</span>
        <span>{commissionStatus}</span>
    </td>

    <td className="company">
        <span>{companyName}</span>
        <span>{activity}</span>
    </td>

    <td className="rating">
        <span>
        <img src="/icons/Star.svg" alt="" />
        <img src="/icons/Star.svg" alt="" />
        <img src="/icons/Star.svg" alt="" />
        <img src="/icons/Star.svg" alt="" />
        <img src="/icons/Star.svg" alt="" />
        </span>
        <span>
            {rateStatus}
        </span>

    </td>

    <td>
        <button  className="offer">View Offer</button>
    </td>

  
    </div>
  )
  
};

export default UserSpecifications;
