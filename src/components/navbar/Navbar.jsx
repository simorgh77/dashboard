import React from 'react';
import "./Navbar.css"
const Navbar = () => {
    const activeStyle={
        color:"#3F4254",
        '::after':{
            content:""
        }
    }
    return (
        <div className='nav_container'>
            <div className='left_nav'>
                <div className="dashboard">
                 
                <span className='dashboardTitle'>Dashboard</span>
                <div className='breadCrumb'>
                    {
                        bradCrumb.map((bread,index)=>(
                           <a href={bread.path} style={bread.active ? activeStyle:{}}>
                            {bread.title}
                            </a>
                        ))
                    }
                    </div>
                   
                    </div>
                    <div className="sort">
                        <label htmlFor="sortBy">
                            Sort By:
                        </label>
                        <select name="sortBy" id="sortBy" className='sortBySelect'>
                            <option value="1">Latest</option>
                            <option value="2">favorite</option>
                            <option value="3">Cheapest</option>

                        </select>
                    </div>
              
            </div>
            <div className="right_nav">
            <div className='impact'></div>
            <div className='tools'></div>
            </div>
        </div>
    );
}
const bradCrumb=[
    {
        title:"Home",
        path:"/",
        active:false
    },
    {
        title:"My Team",
        path:"/",
        active:false
    },
    {
        title:"Dashbord",
        path:"/",
        active:true
    }
]
export default Navbar;
