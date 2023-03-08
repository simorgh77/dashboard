import React from 'react';
import "./Profile.css"
const Profile = ({icon='/icons/userProfile.svg',userName="Paul Melone",jobPosition="Python Dev",status="online"}) => {
    return (
        <div className='profile_wrapper'>
            <span className='user_image'>
                <img src={icon} alt="profile" width="50px" height="50px" style={{borderRadius:"10px"}}/>
            </span>
            <div className='user_details'>
               <span className='user_name'> 
                {userName}
               </span>
               <span className='position'>
                {jobPosition}
               </span>
               <span className='status'>
                {status}
               </span>
            </div>
        </div>
    );
}

export default Profile;
