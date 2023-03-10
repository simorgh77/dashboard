import Dropdown from 'react-bootstrap/Dropdown';
import "./DropDown.css"
function BasicExample({btn}) {
  return (
    <Dropdown className='dropWrapper'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <div className="item_button">
            <div className="item_elements">
              <span className="icon">
                <img
                  src={`/icons/${btn.icon}`}
                  width="24px"
                  height="24px"
                  alt="app"
                />
              </span>
              <span className="button_title">{btn.title}</span>
            </div>

            <div className="arrow">
              <img src="/icons/ArrowRight.svg" alt="arrow" width="7px" />
            </div>
          </div> 
      </Dropdown.Toggle>
      <Dropdown.Menu className='menu'>
        {
          btn.dropElement?.map((element,index)=>(
            <div className='dropElement'>
              <div>
            <img src="/icons/Dash.svg" alt="" className='dash' />
            <Dropdown.Item className='dropDownItems' key={index} href="#/action-1">{element}</Dropdown.Item>
            </div>
            <img src="/icons/ArrowRight.svg" alt="arrow" className='arrowright'/>
            </div>
          ))
        }
       
  
      </Dropdown.Menu>
    </Dropdown>
  );
}
 
export default BasicExample;