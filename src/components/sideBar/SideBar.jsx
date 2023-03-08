import React from 'react';
import SideBarItems from "../../static/SideBarItems";
import "./SideBar.css"
import SideBaritems from '../../static/SideBarItems';
import Profile from '../profile/Profile';

const Panel = () => {

    return (
        <div className='container'>
            <div className="logo">

                <div className="metronic">
                    <span>
                        <img src="/icons/Metronic.svg" alt="metronic" />
                    </span>

                     <span>
                        Metronic
                     </span>
                </div>

                <div className="logoutIcon">
                    <img src="/icons/Logout.svg"  height="28px" alt="logout"/>
                </div>
            </div>

            <div className="profile">
                <Profile/>
                <div>
                    <img src="/icons/DarkMode.svg" alt="" srcset="" width="25px"/>
                </div>
            </div>

            <div className="search">
                <input type="text" placeholder='Search' />
                <img src="/icons/Search.svg" alt="searchIcon"  />

            </div>

            <div className="sideBarIems">

                {
                    SideBaritems.map((item,index)=>
                       (
                        <div className="sideBar"> 
                       <h2 className='items_header'>
                            {item.Header}
                        </h2>
                        
                        <div className="sideBar_item">
                            {
                                item.items.map((btn,index)=>({
                                },

                                    <div className="item_button">
                                        <div className="item_elements">
                                        <span className='icon'>
                                     
                                        <img src={`/icons/${btn.icon}`} width="24px" height="24px" alt="app" />
                                        </span>
                                        <span className='button_title'>{btn.title}</span> 
                                        
                                        </div>

                                        <div className='arrow'>
                                            <img src="/icons/ArrowRight.svg" alt="arrow" width='7px'/>
                                        </div>
                                      
                                       
                                    </div>
                                ))
                            }
                        </div>
                        </div>
                        )
                        
                    )
                }
                
            </div>
        </div>
    );
}

export default Panel;
