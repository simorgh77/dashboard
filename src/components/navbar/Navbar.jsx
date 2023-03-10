import React,{useState} from 'react';
import "./Navbar.css"
const Navbar = () => {
    const activeStyle={
        color:"#3F4254",

    }

    const [impactRange,setImpactRange]=useState(1);
    console.log(impactRange);
    return (
        <div className='nav_container'>
            <div className='left_nav'>
                <div className="dashboard">
                 
                <span className='dashboardTitle'>Dashboard</span>
                <div className='breadCrumb'>
                    {
                        bradCrumb.map((bread,index)=>(
                           <a key={index} href={bread.path} style={bread.active ? activeStyle:{}}>
                            {bread.title}

                             {!bread.active&& " - " } 
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
              {/* <div className="divider"></div>  */}

            <div className="right_nav">
            <div className='impact'>
            <label htmlFor="level">Impact Level:</label>
            <input type="range" defaultValue={1} min={1} max={5} step={.1} onChange={(e)=>setImpactRange(e.target.value)}/>

            <span className='levelValue'>{impactRange}</span>
            </div>
            {/* <div className="divider"></div> */}
            <div className='tools'>
                <label htmlFor="tools">
                    Quick Tools:
                </label>

                <img src="/icons/Empty.svg" alt="up" />
                <img src="/icons/PlusFile.svg" alt="plus" />
                <img src="/icons/Upload.svg" alt="down" />
            </div>
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
