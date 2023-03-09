import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const CustomDropDown = () => {

    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {/* <div className="item_button">
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
          </div> */}
          dsfa
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  
};

export default CustomDropDown;
